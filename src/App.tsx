import { Hero } from "./components/hero";
import { Nav } from "./components/nav";

export function App() {
  return (
    <main className="text-light w-5xl mx-auto ">
      <Nav />
      <Hero />
    </main>
  )
}