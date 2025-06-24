import React, { useState } from 'react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {currentScreen === 'home' && (
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(to bottom, #7f1d1d, #991b1b)', 
          padding: '40px 20px', 
          textAlign: 'center',
          color: 'white',
          borderRadius: '20px'
        }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            borderRadius: '20px', 
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px'
          }}>
            🏠
          </div>
          
          <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Our Netwrkx</h1>
          <p style={{ fontSize: '16px', marginBottom: '40px', opacity: 0.9 }}>
            Juvenile justice reentry housing assistance for Los Angeles
          </p>
          
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            style={{
              width: '100%',
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              padding: '15px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '15px'
            }}
          >
            Find Shelter Now
          </button>
          
          <a 
            href="tel:211"
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: 'bold',
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid white',
              fontSize: '16px',
              textDecoration: 'none',
              textAlign: 'center'
            }}
          >
            Call 211 for Help
          </a>
        </div>
      )}

      {currentScreen === 'dashboard' && (
        <div style={{ minHeight: '100vh', padding: '20px' }}>
          <div style={{ backgroundColor: 'black', padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
            <h1 style={{ color: 'white', fontSize: '20px', margin: 0 }}>Hey Jordan! 🏠</h1>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: '5px 0 0 0' }}>
              Reentry Services & Resources
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
            <div style={{ 
              backgroundColor: 'black', 
              padding: '20px', 
              borderRadius: '15px', 
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>🏠</div>
              <h3 style={{ margin: 0, fontSize: '14px' }}>Emergency Housing</h3>
              <p style={{ fontSize: '12px', opacity: 0.8, margin: '5px 0 0 0' }}>Find bed tonight</p>
            </div>
            
            <a 
              href="tel:211"
              style={{ 
                backgroundColor: 'white', 
                border: '2px solid black', 
                padding: '20px', 
                borderRadius: '15px', 
                color: 'black',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>📞</div>
              <h3 style={{ margin: 0, fontSize: '14px' }}>Call 211</h3>
              <p style={{ fontSize: '12px', opacity: 0.7, margin: '5px 0 0 0' }}>Immediate help</p>
            </a>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            border: '2px solid black', 
            borderRadius: '15px', 
            padding: '15px'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Nearest Housing Resources</h3>
            <div style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '15px', 
              borderRadius: '10px',
              marginBottom: '10px'
            }}>
              <h4 style={{ margin: '0 0 5px 0' }}>Weingart Center Association</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                Emergency Shelter • 0.3 mi • 24/7
              </p>
              <a 
                href="tel:(213) 689-2190"
                style={{ 
                  display: 'inline-block',
                  marginTop: '8px',
                  backgroundColor: 'black',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  fontSize: '12px'
                }}
              >
                Call (213) 689-2190
              </a>
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '15px'
          }}>
            <button 
              onClick={() => setCurrentScreen('home')}
              style={{
                backgroundColor: '#7f1d1d',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
