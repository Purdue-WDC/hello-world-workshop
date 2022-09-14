import React from 'react';
import { Link } from 'react-router-dom';

import { pages } from '../util/pages';


function Navbar() {
  return (
    <div
      style={{
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100vw',
        padding: '20px 30px',
        boxSizing: 'border-box'
      }}
    >
      {/* Site Name */}
      <div style={{fontSize: "24px"}}>
        Navbar
      </div>

      {/* Page Links */}
      <div
        style={{
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '18px'
        }}
      >
        {pages.map(page => (
          <Link
            to={'/' + page.path}
            style={{
              textDecoration: 'none',
              marginLeft: '20px'
            }}
            key={page.name}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;