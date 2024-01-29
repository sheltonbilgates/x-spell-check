import React, { useState } from "react";

const SpellCheck = () => {
    const [inputText, setInputText] = useState("")
    const [suggestedText, setSuggestedText] = useState("")


  const customDictionary = {
    teh: "the",

    wrok: "work",

    fot: "for",

    exampl: "example",
  };

  const handleChange = (e) =>{
    const text = e.target.value
    setInputText(text)

    const words = text.split(" ")
    const correctedWords = words.map((word) => {
        const correctedWord = customDictionary[word.toLowerCase()];
        return correctedWord || word;
      });
  

      const firstCorrection = correctedWords.find((word, index) => word !== words[index])
      setSuggestedText(firstCorrection || "")
  }

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea value={inputText} cols="40" rows="5" placeholder="Enter text..." onChange={(e) => handleChange(e)}></textarea>
      {suggestedText && (
        <p>Did you mean: <strong>{suggestedText}</strong>?</p>
      )}
    </div>
  );
};

export default SpellCheck;
