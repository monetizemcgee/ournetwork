import React, { useState } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const HomeScreen = () => (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #7f1d1d, #991b1b)',
      padding: '40px 20px',
      textAlign: 'center',
      color: 'white'
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
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        Call 211 for Help
      </a>
    </div>
  );

  const DashboardScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <div style={{ backgroundColor: 'black', padding: '20px', color: 'white' }}>
        <h1 style={{ fontSize: '20px', margin: '0 0 5px 0' }}>Hey Jordan! 🏠</h1>
        <p style={{ opacity: 0.9, fontSize: '14px', margin: 0 }}>
          Reentry Services & Resources
        </p>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{ 
          backgroundColor: '#ef4444', 
          color: 'white', 
          padding: '15px', 
          borderRadius: '10px', 
          marginBottom: '20px' 
        }}>
          <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>🚨 Emergency Shelter Active</h3>
          <p style={{ margin: '0 0 10px 0', fontSize: '12px' }}>Hotel vouchers available - Call 211</p>
          <a 
            href="tel:211"
            style={{ 
              backgroundColor: 'white', 
              color: '#ef4444', 
              padding: '8px 16px', 
              borderRadius: '5px', 
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            Call Now
          </a>
        </div>

        <h2 style={{ fontSize: '18px', marginBottom: '15px' }}>Quick Access</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <button 
            onClick={() => setCurrentScreen('chat')}
            style={{ 
              backgroundColor: 'black', 
              padding: '20px', 
              borderRadius: '15px', 
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>🏠</div>
            <h3 style={{ margin: 0, fontSize: '14px' }}>Emergency Housing</h3>
            <p style={{ fontSize: '12px', opacity: 0.8, margin: '5px 0 0 0' }}>Find bed tonight</p>
          </button>
          
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
          padding: '15px',
          marginBottom: '20px'
        }}>
          <h3 style={{ margin: '0 0 15px 0' }}>Nearest Housing Resources</h3>
          
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '10px',
            marginBottom: '10px'
          }}>
            <h4 style={{ margin: '0 0 5px 0' }}>Weingart Center Association</h4>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
              Emergency Shelter • 0.3 mi • 24/7
            </p>
            <a 
              href="tel:(213) 689-2190"
              style={{ 
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '12px'
              }}
            >
              Call (213) 689-2190
            </a>
          </div>

          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '10px'
          }}>
            <h4 style={{ margin: '0 0 5px 0' }}>Covenant House California</h4>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
              Youth Shelter • 3.1 mi • 18-24 years old
            </p>
            <a 
              href="tel:(323) 461-3131"
              style={{ 
                backgroundColor: 'black',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontSize: '12px'
              }}
            >
              Call (323) 461-3131
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ 
        backgroundColor: 'white', 
        borderTop: '2px solid black', 
        padding: '15px', 
        display: 'flex', 
        justifyContent: 'space-around',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        <button 
          onClick={() => setCurrentScreen('dashboard')}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '12px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '20px' }}>🏠</div>
          Home
        </button>
        <button 
          onClick={() => setCurrentScreen('chat')}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '12px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '20px' }}>💬</div>
          Support
        </button>
        <button 
          onClick={() => setCurrentScreen('home')}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '12px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '20px' }}>📋</div>
          Resources
        </button>
      </div>
    </div>
  );

  const ChatScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ backgroundColor: 'black', padding: '20px', color: 'white' }}>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Credible Messengers</h2>
        <p style={{ opacity: 0.9, fontSize: '14px', margin: '5px 0 0 0' }}>
          Connect with peer mentors who understand your journey
        </p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '70vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '20px', 
            fontSize: '12px', 
            display: 'inline-block' 
          }}>
            💬 Chat with people who've been where you are • Safe & Private
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          border: '2px solid #10b981', 
          borderRadius: '15px', 
          padding: '15px',
          marginBottom: '15px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#10b981', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              M
            </div>
            <div>
              <h4 style={{ margin: '0 0 2px 0', fontSize: '16px' }}>Marcus</h4>
              <p style={{ color: '#666', fontSize: '14px', margin: '0 0 5px 0' }}>
                Been home 3 years • Housing & Job Support
              </p>
              <p style={{ color: '#10b981', fontSize: '12px', margin: 0, fontWeight: 'bold' }}>
                ● Online now
              </p>
            </div>
          </div>
        </div>

        <a 
          href="tel:211"
          style={{ 
            backgroundColor: 'white', 
            border: '2px solid #ef4444', 
            borderRadius: '15px', 
            padding: '20px',
            textDecoration: 'none',
            display: 'block'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: '#ef4444', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '20px'
            }}>
              📞
            </div>
            <div>
              <h3 style={{ color: 'black', fontSize: '16px', margin: '0 0 5px 0' }}>
                Crisis Support - Call 211
              </h3>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                24/7 immediate help and resources
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Navigation */}
      <div style={{ 
        backgroundColor: 'white', 
        borderTop: '2px solid black', 
        padding: '15px', 
        display: 'flex', 
        justifyContent: 'space-around',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        <button 
          onClick={() => setCurrentScreen('dashboard')}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '12px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '20px' }}>🏠</div>
          Home
        </button>
        <button 
          onClick={() => setCurrentScreen('chat')}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '12px',
            cursor: 'pointer',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          <div style={{ fontSize: '20px' }}>💬</div>
          Support
        </button>
        <button 
          onClick={() => setCurrentScreen('home')}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '12px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          <div style={{ fontSize: '20px' }}>📋</div>
          Resources
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      backgroundColor: 'white',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'dashboard' && <DashboardScreen />}
      {currentScreen === 'chat' && <ChatScreen />}
    </div>
  );
}

export default App;
