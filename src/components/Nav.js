import React from 'react';
import { BiHomeAlt, BiUser, BiTask } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from 'react-icons/bs';
import { Link } from 'react-scroll';
import StageIcon from '../assets/stage.png';  // Assurez-vous du chemin correct

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiHomeAlt />
          </Link>
          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BiUser />
          </Link>
          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsClipboardData />
          </Link>
          <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsBriefcase />
          </Link>
          {/* Ajout de l'icône pour la page Stage */}
          <Link
            to='stage'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <img src={StageIcon} alt='Stage' className='w-8 h-8' />
          </Link>
          {/* Fin de l'ajout */}
          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
