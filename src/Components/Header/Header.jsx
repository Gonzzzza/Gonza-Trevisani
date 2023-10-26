import imagelogo from '../../assets/Images/fotologo1.jpeg';
import './Header.css'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
 
    return (
        <>
        <header className='container-total'>
            <div className="container-header">
                <div className="container-left">
                    <div className="container-logo">
                        {/* <h2>G</h2> */}
                        {/* <img src={imagelogo} alt="" /> */}
                    </div>
                    <div className="container-name">
                        <a href="/">
                            <h3>Gonza Trevisani</h3>
                        </a>
                    </div>
                </div>
                <div className={`container-button ${isMenuOpen ? 'open' : ''}`}>
                    <button onClick={toggleMenu} className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        {
                            isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />
                        }
                    </button>
                </div>
            </div>
            <nav className={`container-links ${isMenuOpen ? 'open' : ''}`}>
                <div className='link'>
                    <a href="/#home" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                        <h3>Home</h3>
                    </a>
                </div>
                <div className='link'>
                    <a href="/#about" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                        <h3>About</h3>
                    </a>
                </div>
                <div className='link'>
                    <a href="/#projects" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                        <h3>Projects</h3>
                    </a>
                </div>
                <div className='link'>
                    <a href="/#contact" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                        <h3>Contact</h3>
                    </a>
                </div>
            </nav>
        </header>
        </>
    )
}