import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar nabvar-light bg-light">
        <span className="nabvar-brand mb-0">
          <h1>
            <strong>Registro de Sismos Chile</strong>
          </h1>
        </span>
      </nav>
    </div>
  );
}

export default Header;
