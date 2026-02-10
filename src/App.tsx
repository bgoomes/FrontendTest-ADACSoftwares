import { Nav } from "./components/nav";
import { Hero } from "./page/hero";
import { Features } from "./page/features";
import { Contents } from "./page/contents";
import { Gallery } from "./page/gallery";
import { Partners } from "./page/partners";
import { Testimonials } from "./page/testimonials";
import { Cta } from "./page/cta";
import { Footer } from "./page/footer";

export function App() {
  return (
    <main className="text-light mx-auto space-y-2.5">
      <Nav />
      <Hero />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Cta />
      <Footer />
    </main>
  )
}