import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Gallery from "./Gallery";
import "./styles.css";

function App() {
  const [search, setSearch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [info, setInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [selectSuggest, setSelectSuggest] = useState("");
  const [autocomplete, setAutocomplete] = useState(false);

  let sinResultados = [];

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Search
        search={search}
        setSearch={setSearch}
        info={info}
        setInfo={setInfo}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        error={error}
        setError={setError}
        noResults={noResults}
        setNoResults={setNoResults}
        loading={loading}
        setLoading={setLoading}
        suggestion={suggestion}
        setSuggestion={setSuggestion}
        showSuggestion={showSuggestion}
        setShowSuggestion={setShowSuggestion}
        selectSuggest={selectSuggest}
        setSelectSuggest={setSelectSuggest}
        autocomplete={autocomplete}
        setAutocomplete={setAutocomplete}
      />
      <Gallery
        sinResultados={sinResultados}
        search={search}
        setSearch={setSearch}
        info={info}
        setInfo={setInfo}
        loading={loading}
        setLoading={setLoading}
        error={error}
        noResults={noResults}
      />
    </div>
  );
}

export default App;
