import React, { useState } from "react";
import "./Keywords.css";
const Keywords = () => {
  const [tags, setTags] = useState([]);
  const [keyword, setKeyword] = useState("");

  if (keyword === ",") {
    setKeyword("");
  }
  const handleKeyDown = (e) => {
    if (e.key !== ",") return;
    if (!keyword.trim()) return;
    setTags([...tags, keyword]);
    setKeyword("");
  };
  const handleKeyUp = (e) => {
    if (e.key !== "Enter") return;
    let newKeyWord = keyword.split(",").filter((v) => v !== ",");
    setTags([...tags, ...newKeyWord]);
    setKeyword("");
  };

  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };

  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        placeholder="Add Keyword"
      />
    </div>
  );
};

export default Keywords;
