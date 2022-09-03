import React from "react";

function Button({ text, path, id}) {
  return (
    <li className="menu-item" id={id}>
      <a href={path} className="menu-link" target="_blank">
        <button className="btn btn-primary d-grid w-100" type="submit">
          {text}
        </button>
      </a>
    </li>
  );
}
export default Button;