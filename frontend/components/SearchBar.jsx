import React from "react";

export const SearchBar = ({ keyword, setKeyword, placeholder }) => {
  return (
    <div className="mt-2 mx-auto" style={{ width: "90%" }}>
      <input
        className="input is-rounded is-small has-text-centered"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
