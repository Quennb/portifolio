import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div class="menu principal">
      <h1> Menu principal </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/apresentação">Apresentação</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/hobbies">Hobbies</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/habilidades">Habilidades</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/contato">Contato</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
