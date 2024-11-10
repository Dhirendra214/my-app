import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Services', 'Contact'];
  const [randomItem, setRandomItem] = useState(navItems); // Initialize state with navItems

  useEffect(() => {
    setRandomItem(navItems); // Ensure the state is set on the client side
  }, []);

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#0070f3', display: 'flex', gap: '20px' }}>
      {randomItem.map((item, index) => (
        <Link
          key={index}
          href={`/`}
          style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
