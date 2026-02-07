import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";

export function App() {
  return (
    <main className="text-light mx-auto space-y-2.5">
      <Nav />
      <Hero />
      <Features />
    </main>
  )
}