import React, { useState } from 'react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedShelter, setSelectedShelter] = useState(null);

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
      availability: "Referral needed",
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

  const HomeScreen = () => (
  <div style={{ 
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #7f1d1d, #991b1b)',
    padding: '40px 20px',
    textAlign: 'center',
    color: 'white'
  }}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ 
        width: '80px', 
        height: '80px', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
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
        Connect with LA's juvenile justice reentry services, housing, and resources all in one place
      </p>
      
      {/* 3 Feature Badges */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px', width: '100%' }}>
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
            🏠
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
            📞
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
            ⚠️
          </div>
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontWeight: 'bold', margin: 0 }}>Emergency Weather Alerts</p>
            <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Get notified of housing activations</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
        Find Housing Now
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
  </div>
);
  const DashboardScreen = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #7f1d1d, #f5f5f5)', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'black', padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', margin: 0 }}>Hey Jordan! 🏠</h1>
            <p style={{ color: 'white', opacity: 0.9, fontSize: '14px', margin: '4px 0 0 0' }}>Reentry Services & Resources</p>
          </div>
          <button style={{ 
            width: '40px', 
            height: '40px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            border: 'none',
            cursor: 'pointer',
            color: 'white'
          }}>
            🔍
          </button>
        </div>
      </div>

      <div style={{ margin: '0 24px', marginTop: '-12px', backgroundColor: '#ef4444', borderRadius: '16px', padding: '16px', border: '1px solid #dc2626' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ color: 'white' }}>
            ⚠️
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
            onClick={() => setCurrentScreen('chat')}
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
              <span style={{ fontSize: '24px' }}>🏠</span>
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
              <span style={{ fontSize: '24px' }}>🏠</span>
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
              <span style={{ fontSize: '24px' }}>👥</span>
              <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', fontSize: '12px', padding: '2px 8px', borderRadius: '50px' }}>8 open</span>
            </div>
            <p style={{ fontWeight: 'bold', textAlign: 'left', margin: 0 }}>Food & Meals</p>
            <p style={{ fontSize: '12px', opacity: 0.9, textAlign: 'left', margin: '4px 0 0 0' }}>Daily meal programs</p>
          </button>

          <button 
            onClick={() => setCurrentScreen('chat')}
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
              <span style={{ fontSize: '24px' }}>🛡️</span>
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
        
        {shelters.map((shelter) => (
          <div 
            key={shelter.id}
            onClick={() => {
              setSelectedShelter(shelter);
              setCurrentScreen('shelter-detail');
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
                  <span style={{ fontSize: '18px' }}>🏠</span>
                  <h3 style={{ color: 'black', fontWeight: 'bold', margin: 0, fontSize: '16px' }}>{shelter.name}</h3>
                </div>
                <p style={{ color: 'black', fontSize: '14px', opacity: 0.7, margin: '0 0 8px 0' }}>{shelter.type} • {shelter.requirements}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px' }}>📍</span>
                    <span style={{ color: 'black', opacity: 0.6, fontSize: '12px', marginLeft: '4px' }}>{shelter.distance}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px' }}>🕐</span>
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
                  📞
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ChatScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', paddingBottom: '80px' }}>
      <div style={{ backgroundColor: 'black', padding: '24px', borderBottom: '2px solid #374151' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            ←
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

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: 'black', fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>Available Now</h3>
          
          <div style={{ 
            backgroundColor: 'white', 
            border: '2px solid #10b981', 
            borderRadius: '16px', 
            padding: '16px',
            marginBottom: '12px',
            cursor: 'pointer'
          }}>
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
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            border: '2px solid #3b82f6', 
            borderRadius: '16px', 
            padding: '16px',
            cursor: 'pointer'
          }}>
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
          </div>
        </div>

        {/* Group Conversations */}
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
                  💬
                </div>
                <div>
                  <h4 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Housing Support Group</h4>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>12 members • Share housing tips & resources</p>
                </div>
              </div>
              <div style={{ color: 'black' }}>
                →
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
                  👥
                </div>
                <div>
                  <h4 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Job & Education Circle</h4>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>8 members • Career guidance & opportunities</p>
                </div>
              </div>
              <div style={{ color: 'black' }}>
                →
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
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
                  📞
                </div>
                <div>
                  <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '16px', margin: 0 }}>Crisis Support - Call 211</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>24/7 immediate help and resources</p>
                </div>
              </div>
              <div style={{ color: 'black' }}>
                →
              </div>
            </div>
          </a>
        </div>

        {/* Safe Space Guidelines */}
        <div style={{ marginTop: '24px', backgroundColor: '#dbeafe', borderRadius: '16px', padding: '16px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#1e40af', fontSize: '16px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Safe Space Guidelines</h3>
          <p style={{ color: '#1e40af', fontSize: '14px', margin: 0 }}>
            All conversations are private and moderated. Our credible messengers are trained peers who've successfully reintegrated into the community.
          </p>
        </div>
      </div>
    </div>
  );

  const ResourcesScreen = () => (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', paddingBottom: '80px' }}>
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
            🔍
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
                🏠
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Avalon Carver</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Emergency housing & transitional housing</p>
              </div>
            </div>
            <div style={{ color: 'black' }}>
              →
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
               👥
             </div>
             <div>
               <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Homeboy Industries</p>
               <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Jobs, education & healing community</p>
             </div>
           </div>
           <div style={{ color: 'black' }}>
             →
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
               🛡️
             </div>
             <div>
               <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Pathway to Kinship</p>
               <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Family reunification & support services</p>
             </div>
           </div>
           <div style={{ color: 'black' }}>
             →
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
               🏠
             </div>
             <div>
               <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Official Housing Finder</p>
               <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>LA County housing search tool</p>
             </div>
           </div>
           <div style={{ color: 'black' }}>
             →
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
               📞
             </div>
             <div>
               <p style={{ color: 'black', fontWeight: 'bold', fontSize: '14px', margin: 0 }}>Call 211 - Emergency Help</p>
               <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>24/7 housing and crisis support</p>
             </div>
           </div>
           <div style={{ color: 'black' }}>
             →
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
   </div>
 );

 return (
   <div style={{ 
     maxWidth: '448px', 
     margin: '0 auto', 
     backgroundColor: 'white', 
     borderRadius: '24px', 
     overflow: 'hidden', 
     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     fontFamily: 'Arial, sans-serif'
   }}>
     {currentScreen === 'home' && <HomeScreen />}
     {currentScreen === 'dashboard' && <DashboardScreen />}
     {currentScreen === 'chat' && <ChatScreen />}
     {currentScreen === 'resources' && <ResourcesScreen />}
     
     {/* Bottom Navigation - only show on main screens */}
     {currentScreen !== 'home' && (
       <div style={{ 
         backgroundColor: 'white', 
         borderTop: '2px solid black', 
         padding: '24px', 
         display: 'flex', 
         justifyContent: 'space-around',
         position: 'fixed',
         bottom: 0,
         left: '50%',
         transform: 'translateX(-50%)',
         width: '100%',
         maxWidth: '448px',
         boxSizing: 'border-box'
       }}>
         <button 
           onClick={() => setCurrentScreen('dashboard')}
           style={{ 
             display: 'flex', 
             flexDirection: 'column', 
             alignItems: 'center', 
             gap: '4px', 
             background: 'none', 
             border: 'none', 
             color: currentScreen === 'dashboard' ? 'black' : '#9CA3AF',
             cursor: 'pointer'
           }}
         >
           <span style={{ fontSize: '20px' }}>🏠</span>
           <span style={{ fontSize: '12px', fontWeight: currentScreen === 'dashboard' ? 'bold' : 'normal' }}>Home</span>
         </button>
         <button 
           onClick={() => setCurrentScreen('map')}
           style={{ 
             display: 'flex', 
             flexDirection: 'column', 
             alignItems: 'center', 
             gap: '4px', 
             background: 'none', 
             border: 'none', 
             color: currentScreen === 'map' ? 'black' : '#9CA3AF',
             cursor: 'pointer'
           }}
         >
           <span style={{ fontSize: '20px' }}>📍</span>
           <span style={{ fontSize: '12px' }}>Housing</span>
         </button>
         <button 
           onClick={() => setCurrentScreen('chat')}
           style={{ 
             display: 'flex', 
             flexDirection: 'column', 
             alignItems: 'center', 
             gap: '4px', 
             background: 'none', 
             border: 'none', 
             color: currentScreen === 'chat' ? 'black' : '#9CA3AF',
             cursor: 'pointer'
           }}
         >
           <span style={{ fontSize: '20px' }}>💬</span>
           <span style={{ fontSize: '12px' }}>Support</span>
         </button>
         <button 
           onClick={() => setCurrentScreen('resources')}
           style={{ 
             display: 'flex', 
             flexDirection: 'column', 
             alignItems: 'center', 
             gap: '4px', 
             background: 'none', 
             border: 'none', 
             color: currentScreen === 'resources' ? 'black' : '#9CA3AF',
             cursor: 'pointer'
           }}
         >
           <span style={{ fontSize: '20px' }}>📋</span>
           <span style={{ fontSize: '12px' }}>Resources</span>
         </button>
       </div>
     )}
   </div>
 );
}

export default App;
