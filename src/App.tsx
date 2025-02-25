import React from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Schedule from './components/Schedule';
import PackingList from './components/PackingList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Countdown />
        <Schedule />
        <PackingList />
      </main>
    </div>
  );
};

export default App;
