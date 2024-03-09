import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <img
        src="./images/world.png"
        alt="world"
        className="header--image"
      />
      <p className="header--title">my travel journal.</p>
    </header>
  );
}
