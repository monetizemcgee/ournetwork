import React, { useState } from 'react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [user, setUser] = useState({ name: 'Jordan' });

  // Navigation function
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Icons as simple SVG components (since we can't use lucide-react without installing it)
  const HomeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  );

  const MapIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    </svg>
  );

  const ChatIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  );

  const FileIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  );

  const BellIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  );

  const UserIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const SendIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );

  const FilterIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
    </svg>
  );

  const PlusIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
    </svg>
  );

  // Bottom Navigation Component
  const BottomNav = ({ activeScreen }) => (
    <div style={{ backgroundColor: 'white', borderTop: '2px solid black', padding: '24px', display: 'flex', justifyContent: 'space-around' }}>
      <button 
        onClick={() => navigateTo('dashboard')}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '4px', 
          background: 'none', 
          border: 'none', 
          color: activeScreen === 'dashboard' ? 'black' : '#9CA3AF',
          cursor: 'pointer'
        }}
      >
        <HomeIcon />
        <span style={{ fontSize: '12px', fontWeight: activeScreen === 'dashboard' ? 'bold' : 'normal' }}>Home</span>
      </button>
      <button 
        onClick={() => navigateTo('map')}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '4px', 
          background: 'none', 
          border: 'none', 
          color: activeScreen === 'map' ? 'black' : '#9CA3AF',
          cursor: 'pointer'
        }}
      >
        <MapIcon />
        <span style={{ fontSize: '12px' }}>Map</span>
      </button>
      <button 
        onClick={() => navigateTo('chat')}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '4px', 
          background: 'none', 
          border: 'none', 
          color: activeScreen === 'chat' ? 'black' : '#9CA3AF',
          cursor: 'pointer'
        }}
      >
        <ChatIcon />
        <span style={{ fontSize: '12px' }}>Chat</span>
      </button>
      <button 
        onClick={() => navigateTo('documents')}
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '4px', 
          background: 'none', 
          border: 'none', 
          color: activeScreen === 'documents' ? 'black' : '#9CA3AF',
          cursor: 'pointer'
        }}
      >
        <FileIcon />
        <span style={{ fontSize: '12px' }}>Docs</span>
      </button>
    </div>
  );

  // Onboarding Screen
  const OnboardingScreen = () => (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom, #7f1d1d, #991b1b, #7f1d1d)', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      padding: '32px', 
      textAlign: 'center' 
    }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ 
          width: '112px', 
          height: '112px', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(4px)', 
          borderRadius: '24px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '24px', 
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <HomeIcon />
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Our Netwrkx</h1>
        <p style={{ fontSize: '18px', color: 'white', opacity: 0.9, marginBottom: '32px', lineHeight: 1.6, padding: '0 16px' }}>
          Your trusted companion for finding housing, support, and opportunities across Los Angeles
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: 'white', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(4px)', 
            borderRadius: '16px', 
            padding: '16px', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: '16px' 
            }}>
              <HomeIcon />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Real-Time Housing Map</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Find shelter & housing instantly</p>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: 'white', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(4px)', 
            borderRadius: '16px', 
            padding: '16px', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: '16px' 
            }}>
              <ChatIcon />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Peer Support Network</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Connect with trusted mentors</p>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: 'white', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(4px)', 
            borderRadius: '16px', 
            padding: '16px', 
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: '16px' 
            }}>
              <ShieldIcon />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Secure Document Vault</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Keep important docs safe</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button 
          onClick={() => navigateTo('dashboard')}
          style={{
            width: '100%',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            padding: '20px 24px',
            borderRadius: '16px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Get Started - It's Free
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', color: 'white', opacity: 0.9, fontSize: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ShieldIcon />
            <span style={{ marginLeft: '4px' }}>Safe</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ShieldIcon />
            <span style={{ marginLeft: '4px' }}>Private</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon />
            <span style={{ marginLeft: '4px' }}>Housing-Focused</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Screen
  const DashboardScreen = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #7f1d1d, #f5f5f5)' }}>
      <div style={{ backgroundColor: 'black', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Hey {user.name}! 🏠</h1>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: '4px 0 0 0' }}>What housing support do you need today?</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(4px)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer'
            }}>
              <BellIcon />
            </button>
            <button style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(4px)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer'
            }}>
              <UserIcon />
            </button>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '16px', 
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(4px)', 
          borderRadius: '16px', 
          padding: '16px', 
          border: '1px solid rgba(255, 255, 255, 0.2)' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <HomeIcon />
            <input 
              type="text" 
              placeholder="Ask AI: 'I need housing near me'" 
              style={{ 
                backgroundColor: 'transparent', 
                color: 'white', 
                flex: 1, 
                outline: 'none', 
                border: 'none',
                fontSize: '14px'
              }}
            />
            <button style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: 'none',
              cursor: 'pointer'
            }}>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>

      <div style={{ margin: '0 24px', marginTop: '-12px', backgroundColor: 'black', borderRadius: '16px', padding: '16px', border: '1px solid #374151' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <HomeIcon />
            </div>
            <div>
              <p style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Emergency Housing</p>
              <p style={{ color: 'white', opacity: 0.9, fontSize: '12px', margin: 0 }}>24/7 shelter available</p>
            </div>
          </div>
          <button 
            onClick={() => navigateTo('map')}
            style={{ 
              backgroundColor: 'white', 
              color: 'black', 
              padding: '8px 16px', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              fontSize: '14px', 
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Find Now
          </button>
        </div>
      </div>

      <div style={{ padding: '24px', background: 'linear-gradient(to bottom, transparent, white)' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Housing & Support Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <button 
            onClick={() => navigateTo('map')}
            style={{ 
              backgroundColor: 'black', 
              padding: '20px', 
              borderRadius: '24px', 
              color: 'white', 
              border: '1px solid #374151',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <HomeIcon />
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>12 beds</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Emergency Shelter</p>
            <p style={{ fontSize: '12px', opacity: 0.9, textAlign: 'left', margin: '4px 0 0 0' }}>Immediate housing available</p>
          </button>
          
          <button 
            onClick={() => navigateTo('map')}
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid black', 
              padding: '20px', 
              borderRadius: '24px', 
              color: 'black',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <HomeIcon />
              <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>3 units</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Transitional Housing</p>
            <p style={{ fontSize: '12px', opacity: 0.7, textAlign: 'left', margin: '4px 0 0 0' }}>6-24 month programs</p>
          </button>
          
          <button 
            onClick={() => navigateTo('chat')}
            style={{ 
              backgroundColor: 'black', 
              padding: '20px', 
              borderRadius: '24px', 
              color: 'white', 
              border: '1px solid #374151',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <ShieldIcon />
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>Available</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Mental Health</p>
            <p style={{ fontSize: '12px', opacity: 0.9, textAlign: 'left', margin: '4px 0 0 0' }}>Counseling & support</p>
          </button>

          <button 
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid black', 
              padding: '20px', 
              borderRadius: '24px', 
              color: 'black',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <UserIcon />
              <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>8 open</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Food & Meals</p>
            <p style={{ fontSize: '12px', opacity: 0.7, textAlign: 'left', margin: '4px 0 0 0' }}>Daily meal programs</p>
          </button>
        </div>
      </div>

      <div style={{ padding: '0 24px 16px 24px', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Housing Partners Nearby</h2>
          <button 
            onClick={() => navigateTo('map')}
            style={{ 
              color: 'black', 
              fontSize: '14px', 
              fontWeight: 'bold', 
              border: '1px solid black', 
              padding: '4px 12px', 
              borderRadius: '8px', 
              backgroundColor: 'transparent',
              cursor: 'pointer'
            }}
          >
            View Map
          </button>
        </div>
        
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', border: '2px solid black' }}>
          <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <HomeIcon />
                <h3 style={{ color: 'black', fontWeight: 'bold', margin: 0 }}>Avalon Carver</h3>
                <div style={{ width: '8px', height: '8px', backgroundColor: 'black', borderRadius: '50%' }}></div>
              </div>
              <p style={{ color: 'black', fontSize: '14px', opacity: 0.7, margin: '0 0 8px 0' }}>Emergency Shelter & Housing Services</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <MapIcon />
                  <span style={{ color: 'black', opacity: 0.6, fontSize: '12px', marginLeft: '4px' }}>0.7 mi</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: 'black', opacity: 0.6, fontSize: '12px' }}>24/7 Open</span>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '4px 12px', borderRadius: '50px' }}>
              <span style={{ fontSize: '12px', fontWeight: 'medium' }}>12 Beds</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeScreen="dashboard" />
    </div>
  );

  // Map Screen
  const MapScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: 'white', padding: '24px', borderBottom: '2px solid black' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <button 
            onClick={() => navigateTo('dashboard')}
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'black', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ChevronLeftIcon />
          </button>
          <div style={{ 
            flex: 1, 
            backgroundColor: '#f5f5f5', 
            border: '2px solid black', 
            borderRadius: '16px', 
            padding: '12px 16px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HomeIcon />
              <input 
                type="text" 
                placeholder="Search housing near you..." 
                style={{ 
                  backgroundColor: 'transparent', 
                  color: 'black', 
                  flex: 1, 
                  outline: 'none', 
                  border: 'none',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>
          <button style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'black', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: 'none',
            cursor: 'pointer'
          }}>
            <FilterIcon />
          </button>
        </div>
        
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
          <button style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            padding: '8px 16px', 
            borderRadius: '50px', 
            fontSize: '14px', 
            fontWeight: 'medium', 
            whiteSpace: 'nowrap', 
            border: 'none',
            cursor: 'pointer'
          }}>
            All Housing
          </button>
          <button style={{ 
            backgroundColor: 'white', 
            border: '2px solid black', 
            color: 'black', 
            padding: '8px 16px', 
            borderRadius: '50px', 
            fontSize: '14px', 
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}>
            Emergency Shelter
          </button>
          <button style={{ 
            backgroundColor: 'white', 
            border: '2px solid black', 
            color: 'black', 
            padding: '8px 16px', 
            borderRadius: '50px', 
            fontSize: '14px', 
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          }}>
            Transitional
          </button>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', backgroundColor: '#f5f5f5' }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom right, #dbeafe, #dcfce7)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <MapIcon />
            <p style={{ color: '#6b7280', fontSize: '18px', fontWeight: 'bold', margin: '16px 0 0 0' }}>Interactive Map</p>
            <p style={{ color: '#9ca3af', fontSize: '14px', margin: '4px 0 0 0' }}>Housing locations would appear here</p>
          </div>
        </div>
        
        <div style={{ position: 'absolute', top: '80px', left: '64px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: 'black', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '4px solid white',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <HomeIcon />
          </div>
        </div>
        
        <div style={{ position: 'absolute', top: '128px', right: '80px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            backgroundColor: 'white', 
            border: '4px solid black', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <HomeIcon />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', padding: '24px', border: '2px solid black', borderBottom: 'none' }}>
        <div style={{ width: '48px', height: '4px', backgroundColor: 'black', borderRadius: '50px', margin: '0 auto 16px auto' }}></div>
        <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Housing Options Near You (15)</h3>
        
        <div style={{ maxHeight: '128px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '16px', border: '1px solid #d1d5db' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'black', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <HomeIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Avalon Carver</p>
                <p style={{ color: 'black', opacity: 0.6, fontSize: '12px', margin: 0 }}>0.3 mi • Emergency Shelter</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button style={{ 
                width: '32px', 
                height: '32px', 
                backgroundColor: 'black', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: 'none',
                cursor: 'pointer'
              }}>
                <PhoneIcon />
              </button>
              <button style={{ 
                width: '32px', 
                height: '32px', 
                backgroundColor: 'white', 
                border: '2px solid black', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <MapIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeScreen="map" />
    </div>
  );

  // Chat Screen
  const ChatScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: 'black', padding: '24px', borderBottom: '2px solid #374151' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => navigateTo('dashboard')}
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              backdropFilter: 'blur(4px)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer'
            }}
          >
            <ChevronLeftIcon />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#d1d5db', 
                borderRadius: '50%', 
                border: '2px solid white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <UserIcon />
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-4px', 
                right: '-4px', 
                width: '16px', 
                height: '16px', 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                border: '2px solid black', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
              </div>
            </div>
            <div>
              <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Marcus</h2>
              <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: 0 }}>Housing Mentor • Online now</p>
            </div>
          </div>
          <button style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(4px)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer'
          }}>
            <PhoneIcon />
          </button>
        </div>
      </div>

      <div style={{ flex: 1, padding: '16px', gap: '16px', overflowY: 'auto', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '50px', fontSize: '12px', display: 'inline-block' }}>
            🏠 Housing-focused conversation • Private & secure
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            backgroundColor: '#d1d5db', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <UserIcon />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: 'white', border: '2px solid black', borderRadius: '16px', borderTopLeftRadius: '4px', padding: '16px' }}>
              <p style={{ color: 'black', fontSize: '14px', margin: 0 }}>Hey {user.name}! 🏠 I saw you're looking for housing resources. I've been through the system and found stable housing. I'm here to help guide you through your options. What's your current situation?</p>
            </div>
            <p style={{ color: 'black', opacity: 0.6, fontSize: '12px', marginTop: '4px', marginLeft: '8px' }}>2:34 PM</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'start', gap: '12px', justifyContent: 'flex-end' }}>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <div style={{ backgroundColor: 'black', borderRadius: '16px', borderTopRightRadius: '4px', padding: '16px', display: 'inline-block' }}>
              <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>Hi Marcus, thanks for reaching out. I'm staying at a friend's couch but it's not stable. I need to find my own place but don't know where to start.</p>
            </div>
            <p style={{ color: 'black', opacity: 0.6, fontSize: '12px', marginTop: '4px', marginRight: '8px' }}>2:36 PM</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', padding: '16px', borderTop: '2px solid black' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: '#f5f5f5', 
            border: '1px solid black', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <PlusIcon />
          </button>
          <div style={{ 
            flex: 1, 
            backgroundColor: '#f5f5f5', 
            border: '2px solid black', 
            borderRadius: '16px', 
            padding: '12px 16px' 
          }}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              style={{ 
                backgroundColor: 'transparent', 
                color: 'black', 
                width: '100%', 
                outline: 'none', 
                border: 'none',
                fontSize: '14px'
              }}
            />
          </div>
          <button style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'black', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: 'none',
            cursor: 'pointer'
          }}>
            <SendIcon />
          </button>
        </div>
      </div>

      <BottomNav activeScreen="chat" />
    </div>
  );

  // Documents Screen
  const DocumentsScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: 'linear-gradient(to right, #4f46e5, #7c3aed)', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>My Documents</h1>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: '4px 0 0 0' }}>Secure • Encrypted • Private</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(4px)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: 'none',
              cursor: 'pointer'
            }}>
              <SearchIcon />
            </button>
            <button style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(4px)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: 'none',
              cursor: 'pointer'
            }}>
              <PlusIcon />
            </button>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '16px', 
          backgroundColor: 'rgba(255, 255, 255, 0.2)', 
          backdropFilter: 'blur(4px)', 
          borderRadius: '16px', 
          padding: '16px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(34, 197, 94, 0.3)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <ShieldIcon />
            </div>
            <div>
              <p style={{ color: 'white', fontWeight: 'bold', margin: 0 }}>All documents secured</p>
              <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: 0 }}>256-bit encryption • Biometric access</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px', backgroundColor: '#f5f5f5' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
          <button style={{ 
            backgroundColor: 'white', 
            padding: '16px', 
            borderRadius: '16px', 
            border: '1px solid #d1d5db', 
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <FileIcon />
            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: '8px 0 0 0' }}>Scan</p>
            <p style={{ color: '#6b7280', fontSize: '12px', margin: '0' }}>Add document</p>
          </button>
          <button style={{ 
            backgroundColor: 'white', 
            padding: '16px', 
            borderRadius: '16px', 
            border: '1px solid #d1d5db', 
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <ShieldIcon />
            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: '8px 0 0 0' }}>Verify</p>
            <p style={{ color: '#6b7280', fontSize: '12px', margin: '0' }}>Check status</p>
          </button>
          <button style={{ 
            backgroundColor: 'white', 
            padding: '16px', 
            borderRadius: '16px', 
            border: '1px solid #d1d5db', 
            textAlign: 'center',
            cursor: 'pointer'
          }}>
            <UserIcon />
            <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: '8px 0 0 0' }}>Share</p>
            <p style={{ color: '#6b7280', fontSize: '12px', margin: '0' }}>Send securely</p>
          </button>
        </div>
      </div>

      <div style={{ flex: 1, padding: '0 24px 8px 24px' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Document Categories</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', border: '1px solid #d1d5db' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#dbeafe', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <UserIcon />
                </div>
                <div>
                  <h3 style={{ color: 'black', fontWeight: 'bold', margin: 0 }}>ID Documents</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>3 documents</p>
                </div>
              </div>
              <ChevronLeftIcon />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  backgroundColor: '#10b981', 
                  borderRadius: '4px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ color: 'white', fontSize: '12px' }}>✓</span>
                </div>
                <span style={{ color: 'black', fontSize: '14px' }}>Driver's License</span>
              </div>
              <span style={{ color: '#6b7280', fontSize: '12px' }}>Verified</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', border: '1px solid #d1d5db' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: '#d1fae5', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <HomeIcon />
                </div>
                <div>
                  <h3 style={{ color: 'black', fontWeight: 'bold', margin: 0 }}>Housing</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>2 documents</p>
                </div>
              </div>
              <ChevronLeftIcon />
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeScreen="documents" />
    </div>
  );

  // Main render logic
  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'map':
        return <MapScreen />;
      case 'chat':
        return <ChatScreen />;
      case 'documents':
        return <DocumentsScreen />;
      default:
        return <OnboardingScreen />;
    }
  };

  return (
    <div style={{ maxWidth: '448px', margin: '0 auto', backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
      {renderScreen()}
    </div>
  );
};

export default App;
