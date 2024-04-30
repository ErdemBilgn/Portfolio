import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Home />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
