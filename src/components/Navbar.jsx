
import { React, useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling (optional)
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  
    const Menu = [
      {
        id: 1,
        name: "Home",
        link: "#",
      },
      
      {
        id: 2,
        name: "Features",
        link: "#features",
      },
      {
        id: 3,
        name: "Services",
        link: "#services",
       },
      
      {
        id: 4,
        name: "Contact Us",
        link: "#contact",
      },
    ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar flex  justify-start md:flex-row flex-col bg-[#D1E7C4] fixed w-full p-1 z-50">
      <div className="logo md:justify-start flex justify-end ">
        <img src="mainlogo.png" alt="Logo" className='h-14 w-52 z-50 md:top-0 ' />
      </div>
      
      {/* Conditional rendering for nav-links */}
      <ul className={`nav-links flex md:flex-row flex-col md:space-x-10 space-y-10 text-xl md:space-y-0 items-center  ${isOpen ? 'active' : 'closing'} `}>
        {Menu.map((data, i) => (
          <li key={i} className={`nav-item ml-52 hover:bg-[#3daf57] hover:p-2 hover:rounded-md md:mr-8 flex justify-end md:top-1 top-10 relative right-40 z-50  `}>
            <a href={data.link} className={`${isOpen ? 'active' : ''}`} >{data.name}</a>
          </li>
        ))}
      </ul>

      <div className="menu-toggle md:hidden fixed left-5 top-5 white" onClick={toggleMenu}>
        {!isOpen ? <MenuIcon /> : <CloseIcon />}
      </div>
    </nav>
  );
};

export default Navbar;