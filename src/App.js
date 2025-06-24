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

  const FileIcon = () => (
    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  );

  const WeatherIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  );

  const UserIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );

  const FilterIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
    </svg>
  );

  // Credible Messengers data
  const credibleMessengers = [
    {
      id: 1,
      name: "Marcus",
      initial: "M",
      color: "#10b981",
      specialties: "Housing & Job Support",
      yearsHome: 3,
      status: "online",
      bio: "I've been home for 3 years and found stable housing and work. Happy to help with job searches, housing applications, and navigating reentry challenges."
    },
    {
      id: 2,
      name: "Ana",
      initial: "A", 
      color: "#3b82f6",
      specialties: "Education & Family Reunification",
      yearsHome: 5,
      status: "online",
      bio: "Been home 5 years. Went back to school, got my GED and now in college. Also worked on rebuilding family relationships. Here to support your journey."
    }
  ];

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
      name: "LA Family Housing",
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
    }
  ];

  // Active Chat Interface
  const ActiveChatScreen = () => {
    if (!activeChatUser) return null;

    const sendMessage = (messageText) => {
      if (!messageText.trim()) return;

      const newMessage = {
        id: chatMessages.length + 1,
        sender: user.name,
        message: messageText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: true
      };

      setChatMessages(prev => [...prev, newMessage]);

      // Simulate credible messenger response after a delay
      setTimeout(() => {
        const responses = [
          "That's a great question. I went through something similar when I first got home.",
          "I understand how you're feeling. Let me share what worked for me...",
          "Have you tried reaching out to the resources we talked about? I can help you with that.",
          "You're doing great by asking for help. That takes courage.",
          "I'm here for you. Let's figure this out together."
        ];
        
        const responseMessage = {
          id: chatMessages.length + 2,
          sender: activeChatUser.name,
          message: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isUser: false
        };

        setChatMessages(prev => [...prev, responseMessage]);
      }, 1500);
    };

    return (
      <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        {/* Chat Header */}
        <div style={{ backgroundColor: 'black', padding: '24px', borderBottom: '2px solid #374151' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={() => navigateTo('chat')}
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
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <ChevronLeftIcon />
            </button>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: activeChatUser.color, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                {activeChatUser.initial}
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-2px', 
                right: '-2px', 
                width: '16px', 
                height: '16px', 
                backgroundColor: '#10b981', 
                borderRadius: '50%', 
                border: '2px solid black'
              }}></div>
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>{activeChatUser.name}</h2>
              <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: 0 }}>Credible Messenger • Online now</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div style={{ flex: 1, padding: '16px', backgroundColor: '#f5f5f5', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '50px', fontSize: '12px', display: 'inline-block' }}>
              🔒 Private conversation • Only you and {activeChatUser.name} can see this
            </div>
          </div>

          {chatMessages.map((message) => (
            <div 
              key={message.id}
              style={{ 
                display: 'flex', 
                alignItems: 'start', 
                gap: '12px', 
                justifyContent: message.isUser ? 'flex-end' : 'flex-start' 
              }}
            >
              {!message.isUser && (
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: activeChatUser.color, 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  {activeChatUser.initial}
                </div>
              )}
              
              <div style={{ flex: 1, textAlign: message.isUser ? 'right' : 'left', maxWidth: '70%' }}>
                <div style={{ 
                  backgroundColor: message.isUser ? 'black' : 'white', 
                  color: message.isUser ? 'white' : 'black',
                  borderRadius: '16px', 
                  borderTopRightRadius: message.isUser ? '4px' : '16px',
                  borderTopLeftRadius: message.isUser ? '16px' : '4px',
                  padding: '12px 16px',
                  border: message.isUser ? 'none' : '1px solid #d1d5db',
                  display: 'inline-block',
                  boxShadow: message.isUser ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.05)'
                }}>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.4 }}>{message.message}</p>
                </div>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: '12px', 
                  margin: '4px 8px 0 8px',
                  textAlign: message.isUser ? 'right' : 'left'
                }}>
                  {message.timestamp}
                </p>
              </div>

              {message.isUser && (
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  backgroundColor: '#6b7280', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  {user.name.charAt(0)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div style={{ backgroundColor: 'white', padding: '16px', borderTop: '2px solid #f5f5f5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    sendMessage(e.target.value);
                    e.target.value = '';
                  }
                }}
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
            <button 
              onClick={(e) => {
                const input = e.target.parentElement.querySelector('input');
                sendMessage(input.value);
                input.value = '';
              }}
              style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'black', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                border: 'none',
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

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
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          color: 'white'
        }}>
          <HomeIcon />
        </div>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Our Netwrkx</h1>
        <p style={{ fontSize: '18px', color: 'white', opacity: 0.9, marginBottom: '32px', lineHeight: 1.6, padding: '0 16px' }}>
          Connect with LA's juvenile justice reentry services, shelters, and resources all in one place
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
              marginRight: '16px',
              color: 'white'
            }}>
              <HomeIcon />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Real-Time Housing Network</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Find emergency & transitional housing</p>
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
              marginRight: '16px',
              color: 'white'
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
              marginRight: '16px',
              color: 'white'
            }}>
              <WeatherIcon />
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>Credible Messenger</p>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Peer support and guidance</p>
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
            cursor: 'pointer',
            color: 'white'
          }}>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div style={{ margin: '0 24px', marginTop: '-12px', backgroundColor: '#ef4444', borderRadius: '16px', padding: '16px', border: '1px solid #dc2626' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ color: 'white' }}>
            <WeatherIcon />
          </div>
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
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <HomeIcon />
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>5 nearby</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Emergency Housing</p>
            <p style={{ fontSize: '12px', opacity: 0.9, textAlign: 'left', margin: '4px 0 0 0' }}>Find bed tonight</p>
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
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <HomeIcon />
              <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>3 units</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Transitional Housing</p>
            <p style={{ fontSize: '12px', opacity: 0.7, textAlign: 'left', margin: '4px 0 0 0' }}>6-24 month programs</p>
          </button>
          
          <button 
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
              <UserIcon />
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>8 open</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Food & Meals</p>
            <p style={{ fontSize: '12px', opacity: 0.9, textAlign: 'left', margin: '4px 0 0 0' }}>Daily meal programs</p>
          </button>

          <button 
            onClick={() => navigateTo('chat')}
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid black', 
              padding: '20px', 
              borderRadius: '24px', 
              color: 'black',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <ShieldIcon />
              <span style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>Available</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Mental Health</p>
            <p style={{ fontSize: '12px', opacity: 0.7, textAlign: 'left', margin: '4px 0 0 0' }}>Counseling & support</p>
          </button>
        </div>
      </div>

      <div style={{ padding: '0 24px 16px 24px', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Nearest Housing & Resources</h2>
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
                    textDecoration: 'none',
                    color: 'white'
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
                cursor: 'pointer',
                color: 'white'
              }}
            >
              <ChevronLeftIcon />
            </button>
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Housing Details</h2>
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
              cursor: 'pointer',
              color: 'white'
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
                placeholder="Search housing and resources..." 
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
            cursor: 'pointer',
            color: 'white'
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
            <div style={{ color: '#6b7280', fontSize: '48px', marginBottom: '16px' }}>
              <MapIcon />
            </div>
            <p style={{ color: '#6b7280', fontSize: '18px', fontWeight: 'bold', margin: '16px 0 0 0' }}>Housing & Resource Map</p>
            <p style={{ color: '#9ca3af', fontSize: '14px', margin: '4px 0 0 0' }}>Interactive map would display here</p>
          </div>
        </div>
        
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
              cursor: 'pointer',
              color: index === 0 ? 'white' : 'black'
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
        <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Housing & Resources ({shelters.length})</h3>
        
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
                  justifyContent: 'center',
                  color: 'white'
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
                    textDecoration: 'none',
                    color: 'white'
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
                    cursor: 'pointer',
                    color: 'black'
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
              cursor: 'pointer',
              color: 'white'
            }}
          >
            <ChevronLeftIcon />
          </button>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', margin: 0 }}>Credible Messengers</h2>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: 0 }}>Connect with peer mentors who understand your journey</p>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: '16px', backgroundColor: '#f5f5f5', overflowY: 'auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ backgroundColor: 'black', color: 'white', padding: '8px 16px', borderRadius: '50px', fontSize: '12px', display: 'inline-block' }}>
            💬 Chat with people who've been where you are • Safe & Private
          </div>
        </div>

        {/* Active Credible Messengers */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: 'black', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>Available Now</h3>
          
          {/* Marcus Card */}
          <button 
            onClick={() => {
              setCurrentScreen('active-chat');
              setActiveChatUser(credibleMessengers[0]);
              setChatMessages([
                {
                  id: 1,
                  sender: "Marcus",
                  message: `Hey ${user.name}! 👋 I'm Marcus. I've been home for 3 years and found stable housing and work. Happy to help with job searches, housing applications, and navigating reentry challenges. What's going on? How can I help you today?`,
                  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  isUser: false
                }
              ]);
            }}
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid #10b981', 
              borderRadius: '16px', 
              padding: '16px',
              marginBottom: '12px',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
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
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-2px', 
                  right: '-2px', 
                  width: '16px', 
                  height: '16px', 
                  backgroundColor: '#10b981', 
                  borderRadius: '50%', 
                  border: '2px solid white'
                }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'black', fontWeight: 'bold', margin: 0, fontSize: '16px' }}>Marcus</h4>
                <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Been home 3 years • Housing & Job Support</p>
                <p style={{ color: '#10b981', fontSize: '12px', margin: '4px 0 0 0', fontWeight: 'bold' }}>● Online now</p>
              </div>
              <div style={{ 
                backgroundColor: '#10b981', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '8px', 
                border: 'none', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Chat
              </div>
            </div>
          </button>

          {/* Ana Card */}
          <button 
            onClick={() => {
              setCurrentScreen('active-chat');
              setActiveChatUser(credibleMessengers[1]);
              setChatMessages([
                {
                  id: 1,
                  sender: "Ana",
                  message: `Hey ${user.name}! 👋 I'm Ana. Been home 5 years. Went back to school, got my GED and now in college. Also worked on rebuilding family relationships. Here to support your journey. What can I help you with today?`,
                  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  isUser: false
                }
              ]);
            }}
            style={{ 
              backgroundColor: 'white', 
              border: '2px solid #3b82f6', 
              borderRadius: '16px', 
              padding: '16px',
              cursor: 'pointer',
              width: '100%',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#3b82f6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  A
                </div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-2px', 
                  right: '-2px', 
                  width: '16px', 
                  height: '16px', 
                  backgroundColor: '#10b981', 
                  borderRadius: '50%', 
                  border: '2px solid white'
                }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'black', fontWeight: 'bold', margin: 0, fontSize: '16px' }}>Ana</h4>
                <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Been home 5 years • Education & Family Reunification</p>
                <p style={{ color: '#10b981', fontSize: '12px', margin: '4px 0 0 0', fontWeight: 'bold' }}>● Online now</p>
              </div>
              <div style={{ 
                backgroundColor: '#3b82f6', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '8px', 
                border: 'none', 
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Chat
              </div>
            </div>
          </button>
        </div>

        {/* Group Chats */}
        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: 'black', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>Group Conversations</h3>
          
          <div style={{ 
            backgroundColor: 'white', 
            border: '2px solid black', 
            borderRadius: '16px', 
            padding: '16px',
            marginBottom: '12px',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#8b5cf6', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <ChatIcon />
                </div>
                <div>
                  <h4 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Housing Support Group</h4>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>12 members • Share housing tips & resources</p>
                </div>
              </div>
              <div style={{ color: 'black' }}>
                <ChevronLeftIcon />
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            border: '2px solid black', 
            borderRadius: '16px', 
            padding: '16px',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: '#f59e0b', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <UserIcon />
                </div>
                <div>
                  <h4 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Job & Education Circle</h4>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>8 members • Career guidance & opportunities</p>
                </div>
              </div>
              <div style={{ color: 'black' }}>
                <ChevronLeftIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div style={{ display: 'grid', gap: '12px' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
              <div style={{ color: 'black' }}>
                <ChevronLeftIcon />
              </div>
            </div>
          </a>
        </div>

        <div style={{ marginTop: '24px', backgroundColor: '#dbeafe', borderRadius: '16px', padding: '16px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#1e40af', fontSize: '16px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Safe Space Guidelines</h3>
          <p style={{ color: '#1e40af', fontSize: '14px', margin: 0 }}>
            All conversations are private and moderated. Our credible messengers are trained peers who've successfully reintegrated into the community.
          </p>
        </div>
      </div>

      <BottomNav activeScreen="chat" />
    </div>
  );

  // Resources Screen
  const DocumentsScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: 'linear-gradient(to right, #dc2626, #ef4444)', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Reentry Resources</h1>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: '4px 0 0 0' }}>Housing programs and support services</p>
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
            cursor: 'pointer',
            color: 'white'
          }}>
            <SearchIcon />
          </button>
        </div>
      </div>

      <div style={{ flex: 1, padding: '24px', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Reentry Support Organizations</h2>
        
        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
          <a 
            href="https://www.avalon-carver.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: 'white', 
              padding: '16px', 
              borderRadius: '16px', 
              border: '2px solid #ef4444',
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
                justifyContent: 'center',
                color: 'white'
              }}>
                <HomeIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Avalon Carver</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Emergency housing & transitional housing</p>
              </div>
            </div>
            <div style={{ color: 'black' }}>
              <ChevronLeftIcon />
            </div>
          </a>

          <a 
            href="https://homeboyindustries.org/"
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
                backgroundColor: '#10b981', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}>
                <UserIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Homeboy Industries</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Jobs, education & healing community</p>
              </div>
            </div>
            <div style={{ color: 'black' }}>
              <ChevronLeftIcon />
            </div>
          </a>

          <a 
            href="https://www.pathwaytokinship.org/"
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
                justifyContent: 'center',
                color: 'white'
              }}>
                <ShieldIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Pathway to Kinship</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Family reunification & support services</p>
              </div>
            </div>
            <div style={{ color: 'black' }}>
              <ChevronLeftIcon />
            </div>
          </a>
        </div>

        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '18px', marginBottom: '16px' }}>Official Resources</h2>
        
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
                justifyContent: 'center',
                color: 'white'
              }}>
                <HomeIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Official Housing Finder</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>LA County housing search tool</p>
              </div>
            </div>
            <div style={{ color: 'black' }}>
              <ChevronLeftIcon />
            </div>
          </a>

          <a 
            href="tel:211"
            style={{ 
              backgroundColor: 'white', 
              padding: '16px', 
              borderRadius: '16px', 
              border: '2px solid #10b981',
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
                backgroundColor: '#10b981', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'white'
              }}>
                <PhoneIcon />
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Call 211 - Emergency Help</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>24/7 housing and crisis support</p>
              </div>
            </div>
            <div style={{ color: 'black' }}>
              <ChevronLeftIcon />
            </div>
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
      case 'active-chat':
        return <ActiveChatScreen />;
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
