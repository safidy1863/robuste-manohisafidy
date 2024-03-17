import { useSignals } from "@preact/signals-react/runtime";
import "./main.css";
import { Footer, Home, Navigation, Services } from "./sections";
import { isLight } from "./signals";
import { Experiences } from "./sections/experiences";

const App = () => {
  useSignals();

  return (
    <div
      className={`${
        isLight.value ? "" : "dark"
      } bg-gray dark:bg-blue-dark  min-h-screen`}
    >
      <div className="h-screen flex flex-col padding">
        <Navigation />
        <Home />
      </div>
      <main>
        <Services />
        <Experiences />
      </main>
      <Footer />
    </div>
  );
};

export default App;
