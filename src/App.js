import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>📖Dictionary</h1>
        </header>
        <main>
          <DictionarySearch />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Katherine Simpson and is{" "}
            <a
              href="https://github.com/Katherine1983-jpg/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
