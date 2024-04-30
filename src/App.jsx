import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Home />
          <About />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
