import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <DictionarySearch />
        </main>
        <footer className="App-footer">
          <small>Coded by Katherine Simpson</small>
        </footer>
      </div>
    </div>
  );
}
