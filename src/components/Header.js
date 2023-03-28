import React from 'react';
// images
import Logo from '../assets/logo2.PNG';

const Header = () => {
  return (
    <header className='py-9'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          {/* button */}
          
          <a href='mailto:mathisroussel78@gmail.com'>
    <button className='btn btn-sm'>Travailler avec moi</button>
         </a>
 
        </div>
      </div>
    </header>
  );
};

export default Header;


