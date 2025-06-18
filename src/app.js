import React, { useState } from 'react';
import { ChevronLeft, Home, MapPin, MessageCircle, FileText, Calendar, Bot, Phone, Navigation, Users, Shield, Plus, Bell, User, Search, Filter, Send, Mic } from 'lucide-react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [user, setUser] = useState({ name: 'Jordan' });

  // Navigation function
  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  // Bottom Navigation Component
  const BottomNav = ({ activeScreen }) => (
    <div className="bg-white border-t-2 border-black px-6 py-4">
      <div className="flex justify-around">
        <button 
          onClick={() => navigateTo('dashboard')}
          className={`flex flex-col items-center space-y-1 ${activeScreen === 'dashboard' ? 'text-black' : 'text-gray-400'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-semibold">Home</span>
        </button>
        <button 
          onClick={() => navigateTo('map')}
          className={`flex flex-col items-center space-y-1 ${activeScreen === 'map' ? 'text-black' : 'text-gray-400'}`}
        >
          <MapPin className="w-6 h-6" />
          <span className="text-xs">Map</span>
        </button>
        <button 
          onClick={() => navigateTo('chat')}
          className={`flex flex-col items-center space-y-1 ${activeScreen === 'chat' ? 'text-black' : 'text-gray-400'}`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Chat</span>
        </button>
        <button 
          onClick={() => navigateTo('documents')}
          className={`flex flex-col items-center space-y-1 ${activeScreen === 'documents' ? 'text-black' : 'text-gray-400'}`}
        >
          <FileText className="w-6 h-6" />
          <span className="text-xs">Docs</span>
        </button>
      </div>
    </div>
  );

  // Onboarding Screen
  const OnboardingScreen = () => (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 flex flex-col justify-between p-8 text-center">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-28 h-28 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white border-opacity-20">
          <Home className="w-14 h-14 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Our Netwrkx</h1>
        <p className="text-lg text-white opacity-90 mb-8 leading-relaxed px-4">
          Your trusted companion for finding housing, support, and opportunities across Los Angeles
        </p>
        
        <div className="space-y-5 mb-10">
          <div className="flex items-center text-white bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-10">
            <div className="w-10 h-10 bg-white bg-opacity-15 rounded-xl flex items-center justify-center mr-4">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Real-Time Housing Map</p>
              <p className="text-sm opacity-80">Find shelter & housing instantly</p>
            </div>
          </div>
          
          <div className="flex items-center text-white bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-10">
            <div className="w-10 h-10 bg-white bg-opacity-15 rounded-xl flex items-center justify-center mr-4">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Peer Support Network</p>
              <p className="text-sm opacity-80">Connect with trusted mentors</p>
            </div>
          </div>
          
          <div className="flex items-center text-white bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-10">
            <div className="w-10 h-10 bg-white bg-opacity-15 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Secure Document Vault</p>
              <p className="text-sm opacity-80">Keep important docs safe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button 
          onClick={() => navigateTo('dashboard')}
          className="w-full bg-white text-black font-bold py-5 px-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          Get Started - It&apos;s Free
        </button>
        <div className="flex items-center justify-center space-x-6 text-white opacity-90 text-sm">
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            <span>Safe</span>
          </div>
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            <span>Private</span>
          </div>
          <div className="flex items-center">
            <Home className="w-4 h-4 mr-1" />
            <span>Housing-Focused</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-gray-100">
      <div className="bg-black px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-xl font-bold">Hey {user.name}! 🏠</h1>
            <p className="text-white opacity-90 text-sm">What housing support do you need today?</p>
          </div>
          <div className="flex space-x-3">
            <button className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-20">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-20">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        <div className="mt-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-20">
          <div className="flex items-center space-x-3">
            <Home className="w-5 h-5 text-white" />
            <input type="text" placeholder="Ask AI: 'I need housing near me'" className="bg-transparent text-white placeholder-white placeholder-opacity-70 flex-1 outline-none"/>
            <button className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-6 -mt-3 bg-black rounded-2xl p-4 shadow-lg border border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Emergency Housing</p>
              <p className="text-white opacity-90 text-xs">24/7 shelter available</p>
            </div>
          </div>
          <button 
            onClick={() => navigateTo('map')}
            className="bg-white text-black px-4 py-2 rounded-xl font-semibold text-sm"
          >
            Find Now
          </button>
        </div>
      </div>

      <div className="px-6 py-6 bg-gradient-to-b from-transparent to-white">
        <h2 className="text-black font-bold text-lg mb-4">Housing & Support Services</h2>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigateTo('map')}
            className="bg-black p-5 rounded-3xl text-white shadow-lg transform hover:scale-105 transition-all border border-gray-800"
          >
            <div className="flex items-center justify-between mb-3">
              <Home className="w-8 h-8" />
              <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">12 beds</span>
            </div>
            <p className="font-bold text-left">Emergency Shelter</p>
            <p className="text-xs opacity-90 text-left">Immediate housing available</p>
          </button>
          
          <button 
            onClick={() => navigateTo('map')}
            className="bg-white border-2 border-black p-5 rounded-3xl text-black shadow-lg transform hover:scale-105 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <Home className="w-8 h-8" />
              <span className="bg-black bg-opacity-10 text-xs px-2 py-1 rounded-full">3 units</span>
            </div>
            <p className="font-bold text-left">Transitional Housing</p>
            <p className="text-xs opacity-70 text-left">6-24 month programs</p>
          </button>
          
          <button className="bg-white border-2 border-black p-5 rounded-3xl text-black shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-8 h-8" />
              <span className="bg-black bg-opacity-10 text-xs px-2 py-1 rounded-full">8 open</span>
            </div>
            <p className="font-bold text-left">Food & Meals</p>
            <p className="text-xs opacity-70 text-left">Daily meal programs</p>
          </button>
          
          <button 
            onClick={() => navigateTo('chat')}
            className="bg-black p-5 rounded-3xl text-white shadow-lg transform hover:scale-105 transition-all border border-gray-800"
          >
            <div className="flex items-center justify-between mb-3">
              <Shield className="w-8 h-8" />
              <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">Available</span>
            </div>
            <p className="font-bold text-left">Mental Health</p>
            <p className="text-xs opacity-90 text-left">Counseling & support</p>
          </button>
        </div>
      </div>

      <div className="px-6 pb-4 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-black font-bold text-lg">Housing Partners Nearby</h2>
          <button 
            onClick={() => navigateTo('map')}
            className="text-black text-sm font-semibold border border-black px-3 py-1 rounded-lg"
          >
            View Map
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-black">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Home className="w-4 h-4 text-black" />
                  <h3 className="text-black font-semibold">Avalon Carver</h3>
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <p className="text-black text-sm opacity-70">Emergency Shelter & Housing Services</p>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-black opacity-60 mr-1" />
                    <span className="text-black opacity-60 text-xs">0.7 mi</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-black opacity-60 text-xs">24/7 Open</span>
                  </div>
                </div>
              </div>
              <div className="bg-black text-white px-3 py-1 rounded-full">
                <span className="text-xs font-medium">12 Beds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeScreen="dashboard" />
    </div>
  );

  // Map Screen
  const MapScreen = () => (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-white px-6 py-4 shadow-sm border-b-2 border-black">
        <div className="flex items-center space-x-3 mb-3">
          <button 
            onClick={() => navigateTo('dashboard')}
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1 bg-gray-100 border-2 border-black rounded-2xl px-4 py-3">
            <div className="flex items-center space-x-2">
              <Home className="w-4 h-4 text-black" />
              <input type="text" placeholder="Search housing near you..." className="bg-transparent text-black flex-1 outline-none text-sm"/>
            </div>
          </div>
          <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-2">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
            All Housing
          </button>
          <button className="bg-white border-2 border-black text-black px-4 py-2 rounded-full text-sm whitespace-nowrap">
            Emergency Shelter
          </button>
          <button className="bg-white border-2 border-black text-black px-4 py-2 rounded-full text-sm whitespace-nowrap">
            Transitional
          </button>
        </div>
      </div>

      <div className="flex-1 relative bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg font-semibold">Interactive Map</p>
            <p className="text-gray-500 text-sm">Housing locations would appear here</p>
          </div>
        </div>
        
        <div className="absolute top-20 left-16">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <Home className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="absolute top-32 right-20">
          <div className="w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-lg">
            <Home className="w-6 h-6 text-black" />
          </div>
        </div>

        <div className="absolute top-4 right-4 space-y-2">
          <button className="w-10 h-10 bg-white border-2 border-black rounded-full shadow-lg flex items-center justify-center">
            <Navigation className="w-5 h-5 text-black" />
          </button>
          <button className="w-10 h-10 bg-white border-2 border-black rounded-full shadow-lg flex items-center justify-center">
            <Plus className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-t-3xl shadow-2xl p-6 border-t-2 border-black">
        <div className="w-12 h-1 bg-black rounded-full mx-auto mb-4"></div>
        <h3 className="text-black font-bold text-lg mb-4">Housing Options Near You (15)</h3>
        
        <div className="space-y-3 max-h-32 overflow-y-auto">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-black font-semibold text-sm">Avalon Carver</p>
                <p className="text-black opacity-60 text-xs">0.3 mi • Emergency Shelter</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </button>
              <button className="w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center">
                <Navigation className="w-4 h-4 text-black" />
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
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-black px-6 py-4 border-b-2 border-gray-800">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigateTo('dashboard')}
            className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-20"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center space-x-3 flex-1">
            <div className="relative">
              <div className="w-12 h-12 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-black flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Marcus</h2>
              <p className="text-white opacity-90 text-sm">Housing Mentor • Online now</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-20">
            <Phone className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
        <div className="text-center">
          <div className="bg-black text-white px-4 py-2 rounded-full text-xs inline-block">
            🏠 Housing-focused conversation • Private & secure
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="bg-white border-2 border-black rounded-2xl rounded-tl-md p-4 shadow-sm">
              <p className="text-black text-sm">Hey {user.name}! 🏠 I saw you&apos;re looking for housing resources. I&apos;ve been through the system and found stable housing. I&apos;m here to help guide you through your options. What&apos;s your current situation?</p>
            </div>
            <p className="text-black opacity-60 text-xs mt-1 ml-2">2:34 PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 justify-end">
          <div className="flex-1 text-right">
            <div className="bg-black rounded-2xl rounded-tr-md p-4 shadow-sm inline-block">
              <p className="text-white text-sm">Hi Marcus, thanks for reaching out. I&apos;m staying at a friend&apos;s couch but it&apos;s not stable. I need to find my own place but don&apos;t know where to start.</p>
            </div>
            <p className="text-black opacity-60 text-xs mt-1 mr-2">2:36 PM</p>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-4 border-t-2 border-black">
        <div className="flex items-center space-x-3">
          <button className="w-10 h-10 bg-gray-100 border border-black rounded-full flex items-center justify-center">
            <Plus className="w-5 h-5 text-black" />
          </button>
          <div className="flex-1 bg-gray-100 border-2 border-black rounded-2xl px-4 py-3">
            <input type="text" placeholder="Type your message..." className="bg-transparent text-black w-full outline-none text-sm"/>
          </div>
          <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <BottomNav activeScreen="chat" />
    </div>
  );

  // Documents Screen
  const DocumentsScreen = () => (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-xl font-bold">My Documents</h1>
            <p className="text-white opacity-90 text-sm">Secure • Encrypted • Private</p>
          </div>
          <div className="flex space-x-3">
            <button className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        <div className="mt-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 bg-opacity-30 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold">All documents secured</p>
              <p className="text-white opacity-90 text-sm">256-bit encryption • Biometric access</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50">
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-black font-semibold text-sm">Scan</p>
            <p className="text-gray-600 text-xs">Add document</p>
          </button>
          <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-black font-semibold text-sm">Verify</p>
            <p className="text-gray-600 text-xs">Check status</p>
          </button>
          <button className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-black font-semibold text-sm">Share</p>
            <p className="text-gray-600 text-xs">Send securely</p>
          </button>
        </div>
      </div>

      <div className="flex-1 px-6 py-2">
        <h2 className="text-black font-bold text-lg mb-4">Document Categories</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-black font-semibold">ID Documents</h3>
                  <p className="text-gray-600 text-sm">3 documents</p>
                </div>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-black text-sm">Driver&apos;s License</span>
                </div>
                <span className="text-gray-500 text-xs">Verified</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Home className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-black font-semibold">Housing</h3>
                  <p className="text-gray-600 text-sm">2 documents</p>
                </div>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
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
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
      {renderScreen()}
    </div>
  );
};

export default App;
