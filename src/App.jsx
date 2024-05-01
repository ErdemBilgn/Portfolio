import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { LanguageProvider } from "./contexts/LanguageContext";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Work />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
