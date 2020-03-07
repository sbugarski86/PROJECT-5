import React from 'react';

const Navbar = () => {
  return <div>
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html" className="fas fa-code">Developer</a>
      </h1>
      <ul>
        <li><a href="profiles.html"></a></li>
        <li><a href="register.html"></a></li>
        <li><a href="login.html"></a></li>
      </ul>

    </nav>
  </div>;
};

export default Navbar;
