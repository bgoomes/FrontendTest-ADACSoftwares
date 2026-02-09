import { Contents } from "./components/contents";
import { Features } from "./components/features";
import { Gallery } from "./components/gallery";
import { Hero } from "./components/hero";
import { Nav } from "./components/nav";
import { Partners } from "./components/partners";

export function App() {
  return (
    <main className="text-light mx-auto space-y-2.5">
      <Nav />
      <Hero />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
    </main>
  )
}