import './Moggeta-landing.css';
import project5 from '../../../assets/Images/project5-portfolio.jpg';
import design from './archive/Moggeta Design.pdf';


export const Moggeta = () => {
    return(
        <header className="container-total-project5">
                <div className="container-hero-project5">
                    <div className="center-project5">
                        <div className="container-title-project5">
                            <h1 className="title-project5">MOGGETA LANDING PAGE</h1>
                        </div>
                        <div className="container-data-project5">
                            <p>
                            This project is a landing page design created in Figma for a company oriented to the sale of silos for agriculture, it does not have any functionality, it is only a design to later make the website. This project was designed with my front-end developer skills.                            </p>
                        </div>
                        <div className="container-button-project5">
                            <a href={design} download>
                                <button className="btn-project5">
                                    Download design
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-second-project5">
                    <div className="container-img">
                        <img className='image-project5' src={project5} alt="img-project" />
                    </div>                
                    <div className="container-data-project-5">
                        <div className="container-title-project-5">
                            <h3 className="title-project-5">Moggeta landing page</h3>
                            <p>This project is a landing page design created in Figma for a company oriented to the sale of silos for agriculture, it does not have any functionality, it is only a design to later make the website. This project was designed with my front-end developer skills.
                            Feel free to check out the Project by visiting the Live Link.</p>
                        </div>
                        <div className="container-tecnologys-project-5">
                            <h3 className="title-project-5">Tools Used</h3>
                            <ul className='ul-skills-project-5'>
                                <li className='li-skills-project-5'>Figma</li>
                            </ul>
                        </div>
                        <div className="container-see-project-5">
                            <h3 className="title-project-5">See live</h3>
                            <div className="container-buttons-project-5">
                                <a href={design} download>
                                    <button className='btn-link-project-5'>Download Design</button>
                                </a>
                                <a href="/">
                                    <button className='btn-back-project-5'>Go back</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}