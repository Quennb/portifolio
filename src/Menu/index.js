import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div class="menu principal">
      <h1> Menu principal </h1>
      <nav>
        <ul>
          <NavLink to="/hobbies">Hobbies</NavLink>
          <p>
            {" "}
            <NavLink to="/apresentação">Apresentação</NavLink>
          </p>
          <p>
            <NavLink to="/contato">Contato</NavLink>
          </p>
          <p>
            <NavLink to="/habilidades">Habilidades</NavLink>
          </p>
        </ul>
      </nav>
    </div>
  );
}
