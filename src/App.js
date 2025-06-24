import React, { useState } from 'react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [user, setUser] = useState({ name: 'Jordan' });
  const [selectedShelter, setSelectedShelter] = useState(null);
  const [activeChatUser, setActiveChatUser] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Icons as SVG components
  const HomeIcon = () => (
    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  );

  const MapIcon = () => (
    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
    </svg>
  );

  const ChatIcon = () => (
    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  // Bottom Navigation Component
  const BottomNav = ({ activeScreen }) => (
    <div style={{ 
      backgroundColor: 'white', 
      borderTop: '2px solid black', 
      padding: '24px', 
      display: 'flex', 
      justifyContent: 'space-around' 
    }}>
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
        <span style={{ fontSize: '12px' }}>Housing</span>
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
        <span style={{ fontSize: '12px' }}>Support</span>
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
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          color: 'white'
        }}>
          <HomeIcon />
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Our Netwrkx</h1>
        <p style={{ fontSize: '18px', color: 'white', opacity: 0.9, marginBottom: '32px', lineHeight: 1.6, padding: '0 16px' }}>
          Connect with LA's juvenile justice reentry services, shelters, and resources all in one place
        </p>
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
        >
          Find Shelter Now
        </button>
        <a 
          href="tel:211"
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            color: 'white',
            fontWeight: 'bold',
            padding: '20px 24px',
            borderRadius: '16px',
            border: '2px solid white',
            fontSize: '16px',
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            boxSizing: 'border-box'
          }}
        >
          Call 211 for Help
        </a>
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
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: '4px 0 0 0' }}>Reentry Services & Resources</p>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px', background: 'linear-gradient(to bottom, transparent, white)' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Quick Access</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
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
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <HomeIcon />
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>5 nearby</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Emergency Housing</p>
            <p style={{ fontSize: '12px', opacity: 0.9, textAlign: 'left', margin: '4px 0 0 0' }}>Find bed tonight</p>
          </button>
          
          <a 
            href="tel:211"
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid black', 
              padding: '20px', 
              borderRadius: '24px', 
              color: 'black',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              textDecoration: 'none',
              display: 'block'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <PhoneIcon />
              <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>24/7</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Call 211</p>
            <p style={{ fontSize: '12px', opacity: 0.7, textAlign: 'left', margin: '4px 0 0 0' }}>Immediate help</p>
          </a>
        </div>
      </div>

      <BottomNav activeScreen="dashboard" />
    </div>
  );

  // Chat Screen
  const ChatScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: 'black', padding: '24px' }}>
        <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Credible Messengers</h2>
        <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: 0 }}>Connect with peer mentors</p>
      </div>

      <div style={{ flex: 1, padding: '16px', backgroundColor: '#f5f5f5' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '50px', fontSize: '12px', display: 'inline-block' }}>
            💬 Chat with people who've been where you are • Safe & Private
          </div>
        </div>

        <div style={{ 
          backgroundColor: 'white', 
          border: '2px solid #10b981', 
          borderRadius: '16px', 
          padding: '16px',
          marginBottom: '12px'
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
            <div style={{ flex: 1 }}>
              <h4 style={{ color: 'black', fontWeight: 'bold', margin: 0, fontSize: '16px' }}>Marcus</h4>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Been home 3 years • Housing & Job Support</p>
              <p style={{ color: '#10b981', fontSize: '12px', margin: '4px 0 0 0', fontWeight: 'bold' }}>● Online now</p>
            </div>
          </div>
        </div>

        <a 
          href="tel:211"
          style={{ 
            backgroundColor: 'white', 
            border: '2px solid #ef4444', 
            borderRadius: '16px', 
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
              color: 'white'
            }}>
              <PhoneIcon />
            </div>
            <div>
              <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Crisis Support - Call 211</h3>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>24/7 immediate help and resources</p>
            </div>
          </div>
        </a>
      </div>

      <BottomNav activeScreen="chat" />
    </div>
  );

  // Main render logic
  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'chat':
        return <ChatScreen />;
      default:
        return <OnboardingScreen />;
    }
  };

  return (
    <div style={{ 
      maxWidth: '448px', 
      margin: '0 auto', 
      backgroundColor: 'white', 
      borderRadius: '24px', 
      overflow: 'hidden', 
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
    }}>
      {renderScreen()}
    </div>
  );
};

export default App;
