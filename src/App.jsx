import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';

const routes = { "": Home };
const current = () => (location.hash.startsWith('#/') ? location.hash.slice(2) : null);

export default function App() {
  const [route, setRoute] = useState(current() ?? '');
  useEffect(() => {
    const onHash = () => {
      const next = current();
      if (next !== null) setRoute(next);
    };
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, []);
  const Page = routes[route] ?? Home;
  return <Page />;
}
