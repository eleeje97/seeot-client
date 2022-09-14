import React from "react";
import { Link } from "react-router-dom";

function Button({ text, path, id, userId}) {
  return (
    <li className="menu-item" id={id}>
      <Link to={{pathname: path}}
            state= {{
              userId: userId
            }}
            className="menu-link">
        <button className="btn btn-primary d-grid w-100" type="submit">
          {text}
        </button>
      </Link>
    </li>
  );
}
export default Button;