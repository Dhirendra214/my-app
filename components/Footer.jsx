// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0070f3',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center',
        bottom: '0',
        width: '100%',
        left: '0',
      }}
    >
      <p style={{ margin: '0', fontSize: '1rem' }}>
        &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
      </p>
      <p style={{ margin: '0', fontSize: '0.9rem' }}>
        <a
          href="/privacy-policy"
          style={{
            color: '#fff',
            textDecoration: 'none',
            marginLeft: '10px',
            fontSize: '0.9rem',
          }}
        >
          Privacy Policy
        </a>
        |
        <a
          href="/terms-of-service"
          style={{
            color: '#fff',
            textDecoration: 'none',
            marginLeft: '10px',
            fontSize: '0.9rem',
          }}
        >
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

export default Footer;
