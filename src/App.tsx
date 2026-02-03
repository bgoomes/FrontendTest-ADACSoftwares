import { Button } from "./components/button";
import { Nav } from "./components/nav";

export function App() {
  return (
    <main className="text-light w-5xl mx-auto ">
      <Nav />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button text="Click me" />
    </main>
  )
}