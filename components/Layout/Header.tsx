import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 flex justify-center items-center z-50 relative bg-ivory">
      <Link to="/" className="inline-block transform hover:scale-105 transition-transform duration-300">
        <img  
          src="https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/logo.png"
          alt="CardCampus" 
          className="h-10 md:h-14 w-auto object-contain"
        />
      </Link>
    </header>
  );
};

export default Header;
