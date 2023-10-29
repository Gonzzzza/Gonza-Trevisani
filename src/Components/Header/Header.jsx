import { Link } from 'react-router-dom';
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
                        <Link to='/'>
                            <a href="">
                                <h3>Gonza Trevisani</h3>
                            </a>
                        </Link>
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
                    <Link to='#home'>
                        <a href="" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                            <h3>Home</h3>
                        </a>
                    </Link>
                </div>
                <div className='link'>
                     <Link to='#about'>
                        <a href="" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                            <h3>About</h3>
                        </a>
                     </Link>
                </div>
                <div className='link'>
                     <Link to='#projects'>
                        <a href="" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                            <h3>Projects</h3>
                        </a>
                     </Link>
                </div>
                <div className='link'>
                     <Link to='#contact'>
                        <a href="" onClick={toggleMenu} className={`link-nav ${isMenuOpen ? 'open' : ''}`}>
                            <h3>Contact</h3>
                        </a>
                     </Link>
                </div>
            </nav>
        </header>
        </>
    )
}