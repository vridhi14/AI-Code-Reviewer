import React from 'react';
import styled from 'styled-components';

const languages = [
  { value: "js", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "c", label: "C" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "php", label: "PHP" },
];

const Dropdown = ({ language, setLanguage }) => {
  const selectedLabel = languages.find(l => l.value === language)?.label || "Select";

  return (
    <StyledWrapper>
      <div className="select">
        <div className="selected">
          {selectedLabel}
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="arrow">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
        <div className="options">
          {languages.map((lang) => (
            <div key={lang.value} title={lang.value} className="option" onClick={() => setLanguage(lang.value)}>
              {lang.label}
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .select {
  width: fit-content;
  cursor: pointer;
  position: relative;
  transition: 300ms;
  color: white;
}

.selected {
  background-color: #2a2f3b;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  z-index: 100;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.arrow {
  height: 10px;
  width: 25px;
  fill: white;
  transition: 300ms;
}

.options {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 5px;
  background-color: #2a2f3b;
  position: absolute;   /* was "relative" */
  top: 100%;             /* was "top: -100px" */
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: 300ms;
  z-index: 99;
}

.select:hover > .options {
  opacity: 1;
  visibility: visible;
}
`;

export default Dropdown;