import React from "react";

function Button({ text, path }) {
  return (
    <li className="menu-item" id="gobottom">
      <a href={path} className="menu-link" target="_blank">
        <button className="btn btn-primary d-grid w-100" type="submit">
          {text}
        </button>
      </a>
    </li>
  );
}
export default Button;