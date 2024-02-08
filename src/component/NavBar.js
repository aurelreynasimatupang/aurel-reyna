import React, {useState, useEffect} from 'react';
import "../styles/navbar.scss";

function NavBar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('.content');
  
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
  
          if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            setActiveSection(section.getAttribute('id'));
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const handleLinkClick = (e) => {
      const links = document.querySelectorAll(".nav-button");
      links.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    }
    return (
        <div class="navbar justify-content-center">
        <a href="#about" class={activeSection === 'about' ? 'nav-button active' : 'nav-button'} onClick={handleLinkClick}>About</a>
        <a href="#portfolio" class={activeSection === 'portfolio' ? 'nav-button active' : 'nav-button'} onClick={handleLinkClick}>Portfolio</a>
        <a href="#contact" class={activeSection === 'contact' ? 'nav-button active' : 'nav-button'} onClick={handleLinkClick}>Contact</a>
      </div>
    );
}

export default NavBar;