import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Our Netwrkx</h1>
      <p>Housing assistance for Los Angeles</p>
      <a href="tel:211" style={{ 
        display: 'inline-block',
        backgroundColor: '#7f1d1d',
        color: 'white',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>
        Call 211 for Help
      </a>
    </div>
  );
}

export default App;
