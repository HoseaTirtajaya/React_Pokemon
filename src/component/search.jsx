import React, { useState } from "react";
import "./style/search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search some 💩️💩️💩️"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <p>Keyword: {keyword}</p>
    </div>
  );
};

export default Search;
