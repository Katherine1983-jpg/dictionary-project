import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Have a rummage...</h1>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="The world's your oyster..."
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">Suggested words: wine, yoga, forest, love...</div>
      </section>
      <Results results={results} />
    </div>
  );
}
