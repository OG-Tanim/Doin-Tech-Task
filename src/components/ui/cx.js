/**
 * Joins className parts, dropping falsy values and de-duplicating tokens so a
 * base class and an override can overlap without emitting the token twice.
 * Order of first appearance is preserved.
 */
export function cx(...parts) {
  const seen = new Set();
  for (const part of parts) {
    if (!part) continue;
    for (const token of part.split(" ")) {
      if (token) seen.add(token);
    }
  }
  return [...seen].join(" ");
}