// Renders <Home/> to static markup and writes a normalized snapshot.
//
// Normalization matters: Tailwind class order inside a class attribute has no
// effect on rendering (the stylesheet decides precedence, not attribute order),
// so comparing raw markup would fail on harmless class reordering. We parse the
// element tree and canonicalize it so that a diff only appears when something
// actually matters: a different element tree, a different class *set*, a changed
// coordinate, or changed text.
import { renderToStaticMarkup } from "react-dom/server";
import { writeFileSync } from "node:fs";
import Home from "../src/pages/Home.jsx";

const VOID = new Set([
  "img",
  "br",
  "hr",
  "input",
  "meta",
  "link",
  "source",
  "path",
  "circle",
  "rect",
]);

function parse(html) {
  const root = { tag: "#root", attrs: {}, children: [] };
  const stack = [root];
  let i = 0;

  while (i < html.length) {
    const lt = html.indexOf("<", i);
    if (lt === -1) break;

    // text between tags
    if (lt > i) {
      const text = html.slice(i, lt);
      if (text.trim()) stack.at(-1).children.push({ text: collapse(text) });
    }

    if (html.startsWith("</", lt)) {
      const gt = html.indexOf(">", lt);
      stack.pop();
      i = gt + 1;
      continue;
    }

    const gt = html.indexOf(">", lt);
    let raw = html.slice(lt + 1, gt);
    const selfClose = raw.endsWith("/");
    if (selfClose) raw = raw.slice(0, -1);

    const spaceIdx = raw.search(/\s/);
    const tag = (spaceIdx === -1 ? raw : raw.slice(0, spaceIdx)).toLowerCase();
    const attrSrc = spaceIdx === -1 ? "" : raw.slice(spaceIdx);

    const attrs = {};
    const attrRe = /([a-zA-Z-:][-a-zA-Z0-9_:.]*)(?:=("[^"]*"|'[^']*'|[^\s"'>]+))?/g;
    let m;
    while ((m = attrRe.exec(attrSrc)) !== null) {
      let value = m[2];
      if (value === undefined) value = "";
      else if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      attrs[m[1].toLowerCase()] = value;
    }

    // React injects a comment delimiter between adjacent text nodes; drop it.
    if (VOID.has(tag) || selfClose) {
      stack.at(-1).children.push({ tag, attrs, children: [] });
    } else {
      const node = { tag, attrs, children: [] };
      stack.at(-1).children.push(node);
      stack.push(node);
    }
    i = gt + 1;
  }
  return root;
}

function collapse(text) {
  return text.replace(/\s+/g, " ").trim();
}

// Void elements in React SSR come through as <img .../>; re-open them so the
// tokenizer treats them as self-closing consistently.
function canonical(node, depth = 0) {
  const pad = "  ".repeat(depth);
  if (node.text !== undefined) return `${pad}#text ${JSON.stringify(node.text)}`;
  if (node.tag === "#root") return node.children.map((c) => canonical(c, depth)).join("\n");

  const attrs = Object.entries(node.attrs)
    .filter(([name]) => name !== "data-reactroot")
    .map(([name, value]) => {
      if (name === "class") {
        const classes = collapse(value).split(" ").filter(Boolean).sort();
        return `${name}="${classes.join(" ")}"`;
      }
      return value === "" ? name : `${name}=${JSON.stringify(value)}`;
    })
    .sort();

  const head = `${pad}<${node.tag}${attrs.length ? " " + attrs.join(" ") : ""}>`;
  if (node.children.length === 0) return head;
  return [head, ...node.children.map((c) => canonical(c, depth + 1))].join("\n");
}

const out = process.argv[2] ?? "page.html";
writeFileSync(out, canonical(parse(renderToStaticMarkup(<Home />))) + "\n");
console.log("wrote", out);