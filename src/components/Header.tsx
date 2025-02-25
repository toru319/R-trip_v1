import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto px-4 flex items-center">
        <img src="https://www.city.atami.lg.jp/_res/projects/default_project/_page_/001/002/074/sunbeach.JPG" alt="熱海" className="w-16 h-16 rounded-full mr-4" />
        <h1 className="text-3xl font-bold">2025年3月熱海旅行</h1>
      </div>
    </header>
  );
};

export default Header;
