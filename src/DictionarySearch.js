import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000013ace0c54508949a498ae2a57a690b29c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
