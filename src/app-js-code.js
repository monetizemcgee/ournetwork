import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [user, setUser] = useState({ name: 'Jordan' });
  const [selectedShelter, setSelectedShelter] = useState(null);

  // Navigation function
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Icons as simple SVG components
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

  const ClockIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  );

  const WeatherIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  // LAHSA Shelter Data
  const shelters = [
    {
      id: 1,
      name: "Weingart Center Association",
      type: "Emergency Shelter",
      address: "566 S San Pedro St, Los Angeles",
      phone: "(213) 689-2190",
      distance: "0.3 mi",
      beds: "600+",
      services: ["24/7 Intake", "Case Management", "Meals", "Medical"],
      availability: "Call for availability",
      hours: "24/7",
      requirements: "18+ Adults"
    },
    {
      id: 2,
      name: "LA Family Housing - North Hollywood",
      type: "Bridge Housing",
      address: "7843 Lankershim Blvd, North Hollywood",
      phone: "(818) 982-4091",
      distance: "8.2 mi",
      beds: "85",
      services: ["Case Management", "Mental Health", "Meals", "Job Training"],
      availability: "Limited",
      hours: "24/7",
      requirements: "Referral needed"
    },
    {
      id: 3,
      name: "Covenant House California",
      type: "Youth Shelter",
      address: "1325 N Western Ave, Los Angeles",
      phone: "(323) 461-3131",
      distance: "3.1 mi",
      beds: "70",
      services: ["24/7 Intake", "Education", "Job Training", "Healthcare"],
      availability: "Space available",
      hours: "24/7",
      requirements: "18-24 years old"
    },
    {
      id: 4,
      name: "Volunteers of America - Glendale",
      type: "Family Shelter",
      address: "Glendale Area",
      phone: "(818) 246-5586",
      distance: "5.7 mi",
      beds: "45 units",
      services: ["Family Support", "Childcare", "Case Management", "School Enrollment"],
      availability: "Call 211",
      hours: "24/7",
      requirements: "Families with children"
    },
    {
      id: 5,
      name: "Special Service for Groups",
      type: "Transitional Housing",
      address: "Multiple Locations",
      phone: "(213) 553-1818",
      distance: "Varies",
      beds: "200+",
      services: ["Long-term Housing", "Mental Health", "Substance Abuse", "Life Skills"],
      availability: "Waitlist",
      hours: "Office: 9-5",
      requirements: "Assessment required"
    }
  ];

  // Emergency services
  const emergencyServices = [
    {
      name: "Emergency Response (Weather)",
      description: "Hotel vouchers during severe weather",
      contact: "Call 211",
      active: true
    },
    {
      name: "LA-HOP Outreach",
      description: "Request homeless outreach services",
      contact: "la-hop.org",
      active: true
    },
    {
      name: "Winter Shelter Program",
      description: "24/7 shelters during cold months",
      contact: "Call 211 for locations",
      active: true
    }
  ];

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
        <span style={{ fontSize: '12px' }}>Shelters</span>
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
        <span style={{ fontSize: '12px' }}>Resources</span>
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
          Connect with LA's housing services, shelters, and support resources all in one place
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
              <p style={{ fontWeight: 'bold', margin: 0 }}>Real-Time LAHSA Shelters</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Find emergency & bridge housing</p>
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
              <PhoneIcon />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>24/7 Support Line</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Call 211 for immediate help</p>
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
              <WeatherIcon />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Emergency Weather Alerts</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Get notified of shelter activations</p>
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
            transition: 'all 0.3s ease'
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
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: '4px 0 0 0' }}>LAHSA Services & Information</p>
          </div>
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
        </div>
      </div>

      <div style={{ flex: 1, padding: '24px', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Quick Links</h2>
        
        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          <a 
            href="https://www.lahsa.org/portal/apps/find-a-shelter/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: 'white', 
              padding: '16px', 
              borderRadius: '16px', 
              border: '2px solid black',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#ef4444', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <HomeIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>LAHSA Shelter Finder</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Official shelter search tool</p>
              </div>
            </div>
            <ChevronLeftIcon />
          </a>

          <a 
            href="https://www.lahsa.org/documents?id=2196-lahsa-shelter-list.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: 'white', 
              padding: '16px', 
              borderRadius: '16px', 
              border: '2px solid black',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#3b82f6', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <FileIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Shelter Directory PDF</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Complete list for offline use</p>
              </div>
            </div>
            <ChevronLeftIcon />
          </a>

          <a 
            href="https://www.lahsa.org/winter-shelter"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: 'white', 
              padding: '16px', 
              borderRadius: '16px', 
              border: '2px solid black',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#8b5cf6', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <WeatherIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Winter Shelter Program</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Seasonal emergency housing</p>
              </div>
            </div>
            <ChevronLeftIcon />
          </a>
        </div>

        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Housing Programs</h2>
        
        <div style={{ display: 'grid', gap: '12px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', border: '1px solid #d1d5db' }}>
            <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: '0 0 8px 0' }}>Emergency Response Program</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 12px 0' }}>
              Activated during severe weather or emergencies. Provides hotel/motel vouchers to unsheltered individuals.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ backgroundColor: '#10b981', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>ACTIVE</span>
              <span style={{ color: '#6b7280', fontSize: '12px' }}>Call 211 for vouchers</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', border: '1px solid #d1d5db' }}>
            <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: '0 0 8px 0' }}>Bridge Housing</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 12px 0' }}>
              Temporary housing with supportive services while waiting for permanent housing placement.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#6b7280', fontSize: '12px' }}>Referral required from CES</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '16px', border: '1px solid #d1d5db' }}>
            <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: '0 0 8px 0' }}>Transitional Housing</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 12px 0' }}>
              6-24 month programs with case management, job training, and life skills support.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#6b7280', fontSize: '12px' }}>Assessment required</span>
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
      case 'shelter-detail':
        return <ShelterDetailScreen />;
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

export default App;14px', margin: '4px 0 0 0' }}>Let's find you shelter and support</p>
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
      </div>

      {/* Emergency Alert Banner */}
      {emergencyServices.filter(s => s.active).length > 0 && (
        <div style={{ margin: '0 24px', marginTop: '-12px', backgroundColor: '#ef4444', borderRadius: '16px', padding: '16px', border: '1px solid #dc2626' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <WeatherIcon />
            <div style={{ flex: 1 }}>
              <p style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Emergency Shelter Active</p>
              <p style={{ color: 'white', opacity: 0.9, fontSize: '12px', margin: 0 }}>Hotel vouchers available - Call 211</p>
            </div>
            <a 
              href="tel:211"
              style={{ 
                backgroundColor: 'white', 
                color: '#ef4444', 
                padding: '8px 16px', 
                borderRadius: '12px', 
                fontWeight: 'bold', 
                fontSize: '14px', 
                border: 'none',
                textDecoration: 'none'
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      )}

      <div style={{ padding: '24px', background: 'linear-gradient(to bottom, transparent, white)' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Quick Access</h2>
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
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>5 nearby</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Emergency Shelter</p>
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
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <PhoneIcon />
              <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>24/7</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Call 211</p>
            <p style={{ fontSize: '12px', opacity: 0.7, textAlign: 'left', margin: '4px 0 0 0' }}>Immediate help</p>
          </a>
          
          <button 
            onClick={() => {
              setSelectedShelter(shelters[2]);
              navigateTo('shelter-detail');
            }}
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
              <UserIcon />
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>18-24</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Youth Shelter</p>
            <p style={{ fontSize: '12px', opacity: 0.9, textAlign: 'left', margin: '4px 0 0 0' }}>Covenant House</p>
          </button>

          <a 
            href="https://la-hop.org"
            target="_blank"
            rel="noopener noreferrer"
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
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <MapIcon />
              <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>LA-HOP</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Outreach Request</p>
            <p style={{ fontSize: '12px', opacity: 0.7, textAlign: 'left', margin: '4px 0 0 0' }}>Get help finding you</p>
          </a>
        </div>
      </div>

      <div style={{ padding: '0 24px 16px 24px', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Nearest LAHSA Shelters</h2>
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
            View All
          </button>
        </div>
        
        {shelters.slice(0, 3).map((shelter) => (
          <div 
            key={shelter.id}
            onClick={() => {
              setSelectedShelter(shelter);
              navigateTo('shelter-detail');
            }}
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              padding: '16px', 
              border: '2px solid black', 
              marginBottom: '12px',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <HomeIcon />
                  <h3 style={{ color: 'black', fontWeight: 'bold', margin: 0, fontSize: '16px' }}>{shelter.name}</h3>
                </div>
                <p style={{ color: 'black', fontSize: '14px', opacity: 0.7, margin: '0 0 8px 0' }}>{shelter.type} • {shelter.requirements}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <MapIcon />
                    <span style={{ color: 'black', opacity: 0.6, fontSize: '12px', marginLeft: '4px' }}>{shelter.distance}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ClockIcon />
                    <span style={{ color: 'black', opacity: 0.6, fontSize: '12px', marginLeft: '4px' }}>{shelter.hours}</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ backgroundColor: 'black', color: 'white', padding: '4px 12px', borderRadius: '50px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'medium' }}>{shelter.beds}</span>
                </div>
                <a 
                  href={`tel:${shelter.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    display: 'inline-flex',
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: 'black', 
                    borderRadius: '50%', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <PhoneIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav activeScreen="dashboard" />
    </div>
  );

  // Shelter Detail Screen
  const ShelterDetailScreen = () => {
    if (!selectedShelter) return null;

    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ backgroundColor: 'black', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
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
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Shelter Details</h1>
          </div>
        </div>

        <div style={{ flex: 1, padding: '24px', backgroundColor: '#f5f5f5' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '2px solid black', marginBottom: '16px' }}>
            <h2 style={{ color: 'black', fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>{selectedShelter.name}</h2>
            <p style={{ color: '#6b7280', fontSize: '16px', margin: '0 0 16px 0' }}>{selectedShelter.type}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '12px' }}>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 4px 0' }}>Distance</p>
                <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{selectedShelter.distance}</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '12px' }}>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 4px 0' }}>Capacity</p>
                <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{selectedShelter.beds}</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '12px' }}>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 4px 0' }}>Hours</p>
                <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{selectedShelter.hours}</p>
              </div>
              <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '12px' }}>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 4px 0' }}>Status</p>
                <p style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{selectedShelter.availability}</p>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: '0 0 12px 0' }}>Services Provided</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedShelter.services.map((service, index) => (
                  <span 
                    key={index}
                    style={{ 
                      backgroundColor: 'black', 
                      color: 'white', 
                      padding: '6px 12px', 
                      borderRadius: '50px', 
                      fontSize: '14px' 
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: '0 0 12px 0' }}>Requirements</h3>
              <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>{selectedShelter.requirements}</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'black', fontSize: '18px', fontWeight: 'bold', margin: '0 0 12px 0' }}>Location</h3>
              <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>{selectedShelter.address}</p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href={`tel:${selectedShelter.phone}`}
                style={{ 
                  flex: 1,
                  backgroundColor: 'black', 
                  color: 'white', 
                  padding: '16px', 
                  borderRadius: '12px', 
                  fontWeight: 'bold', 
                  fontSize: '16px', 
                  border: 'none',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <PhoneIcon />
                Call {selectedShelter.phone}
              </a>
              <button 
                style={{ 
                  backgroundColor: 'white', 
                  border: '2px solid black', 
                  color: 'black', 
                  padding: '16px', 
                  borderRadius: '12px', 
                  fontWeight: 'bold', 
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <MapIcon />
              </button>
            </div>
          </div>

          <div style={{ backgroundColor: '#fef3c7', borderRadius: '16px', padding: '16px', border: '1px solid #fbbf24' }}>
            <p style={{ color: '#92400e', fontSize: '14px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Important Note</p>
            <p style={{ color: '#92400e', fontSize: '14px', margin: 0 }}>
              Bed availability changes frequently. Always call ahead or dial 211 to confirm space and current requirements.
            </p>
          </div>
        </div>
      </div>
    );
  };

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
              <SearchIcon />
              <input 
                type="text" 
                placeholder="Search LAHSA shelters..." 
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
            All Shelters
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
            Emergency
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
            Family
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
            Youth
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
            <p style={{ color: '#6b7280', fontSize: '18px', fontWeight: 'bold', margin: '16px 0 0 0' }}>LAHSA Shelter Map</p>
            <p style={{ color: '#9ca3af', fontSize: '14px', margin: '4px 0 0 0' }}>Interactive map would display here</p>
          </div>
        </div>
        
        {/* Map markers for shelters */}
        {shelters.slice(0, 3).map((shelter, index) => (
          <div 
            key={shelter.id}
            style={{ 
              position: 'absolute', 
              top: `${80 + index * 60}px`, 
              left: index % 2 === 0 ? '64px' : 'auto',
              right: index % 2 === 1 ? '80px' : 'auto'
            }}
          >
            <div style={{ 
              width: '48px', 
              height: '48px', 
              backgroundColor: index === 0 ? 'black' : 'white', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: index === 0 ? '4px solid white' : '4px solid black',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }}
            onClick={() => {
              setSelectedShelter(shelter);
              navigateTo('shelter-detail');
            }}
            >
              <HomeIcon />
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: 'white', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', padding: '24px', border: '2px solid black', borderBottom: 'none' }}>
        <div style={{ width: '48px', height: '4px', backgroundColor: 'black', borderRadius: '50px', margin: '0 auto 16px auto' }}></div>
        <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>LAHSA Shelters ({shelters.length})</h3>
        
        <div style={{ maxHeight: '256px', overflowY: 'auto' }}>
          {shelters.map((shelter) => (
            <div 
              key={shelter.id}
              onClick={() => {
                setSelectedShelter(shelter);
                navigateTo('shelter-detail');
              }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '12px', 
                backgroundColor: '#f5f5f5', 
                borderRadius: '16px', 
                border: '1px solid #d1d5db',
                marginBottom: '12px',
                cursor: 'pointer'
              }}
            >
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
                  <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>{shelter.name}</p>
                  <p style={{ color: 'black', opacity: 0.6, fontSize: '12px', margin: 0 }}>{shelter.distance} • {shelter.type}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a 
                  href={`tel:${shelter.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: 'black', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <PhoneIcon />
                </a>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    backgroundColor: 'white', 
                    border: '2px solid black', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <MapIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav activeScreen="map" />
    </div>
  );

  // Chat Support Screen
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
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Support Center</h2>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: 0 }}>Get help finding shelter and services</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: '16px', backgroundColor: '#f5f5f5', overflowY: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '50px', fontSize: '12px', display: 'inline-block' }}>
            🏠 LAHSA Support Services • Private & Secure
          </div>
        </div>

        <div style={{ display: 'grid', gap: '12px' }}>
          <a 
            href="tel:211"
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid black', 
              borderRadius: '16px', 
              padding: '20px',
              textDecoration: 'none',
              display: 'block'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#ef4444', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <PhoneIcon />
                </div>
                <div>
                  <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Call 211</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>24/7 Housing Helpline</p>
                </div>
              </div>
              <ChevronLeftIcon />
            </div>
          </a>

          <a 
            href="https://la-hop.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid black', 
              borderRadius: '16px', 
              padding: '20px',
              textDecoration: 'none',
              display: 'block'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#3b82f6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <MapIcon />
                </div>
                <div>
                  <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>LA-HOP Portal</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Request outreach assistance</p>
                </div>
              </div>
              <ChevronLeftIcon />
            </div>
          </a>

          <div style={{ 
            backgroundColor: 'white', 
            border: '2px solid black', 
            borderRadius: '16px', 
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#10b981', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <UserIcon />
                </div>
                <div>
                  <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Case Management</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Connect with a specialist</p>
                </div>
              </div>
              <ChevronLeftIcon />
            </div>
          </div>

          <a 
            href="tel:18009783600"
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid black', 
              borderRadius: '16px', 
              padding: '20px',
              textDecoration: 'none',
              display: 'block'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#8b5cf6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <ShieldIcon />
                </div>
                <div>
                  <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Family Support</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>(800) 978-3600</p>
                </div>
              </div>
              <ChevronLeftIcon />
            </div>
          </a>
        </div>

        <div style={{ marginTop: '24px', backgroundColor: '#dbeafe', borderRadius: '16px', padding: '16px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#1e40af', fontSize: '16px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Emergency Weather Alert</h3>
          <p style={{ color: '#1e40af', fontSize: '14px', margin: '0 0 12px 0' }}>
            Hotel vouchers available due to severe weather. Call 211 or connect with an outreach worker.
          </p>
          <a 
            href="tel:211"
            style={{ 
              backgroundColor: '#1e40af', 
              color: 'white', 
              padding: '8px 16px', 
              borderRadius: '8px', 
              fontWeight: 'bold', 
              fontSize: '14px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Call 211 Now
          </a>
        </div>
      </div>

      <BottomNav activeScreen="chat" />
    </div>
  );

  // Resources Screen (formerly Documents)
  const DocumentsScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: 'linear-gradient(to right, #dc2626, #ef4444)', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Housing Resources</h1>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '