    import './Videogame-app.css';
    import project3 from '../../../assets/Images/project3-portfolio.jpg';
    



export const VideogameApp = () => {
    return(
        <header className="container-total-project3">
                <div className="container-hero-project3">
                    <div className="center-project3">
                        <div className="container-title-project3">
                            <h1 className="title-project3">VIDEOGAME APP</h1>
                        </div>
                        <div className="container-data-project3">
                            <p>
                            This project is a web application for a video game page where data is fetched to an API and then rendered. This application that I created with my front-end developer skills, has combined filters, a search engine and routes to data for each video game.
                            </p>
                        </div>
                        <div className="container-button-project3">
                            <a target='_blank' href="https://videogame-page-ten.vercel.app/">
                                <button className="btn-project3">
                                    Live Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-second-project3">
                    <div className="container-img">
                        <img className='image-project3' src={project3} alt="img-project" />
                    </div>                
                    <div className="container-data-project-3">
                        <div className="container-title-project-3">
                            <h3 className="title-project-3">Videogame app</h3>
                            <p>This project is a web application for a video game page where data is fetched to an API and then rendered. This application that I created with my front-end developer skills, has combined filters, a search engine and routes to data for each video game.
                            Do not hesitate to consult the project by visiting Live Link.</p>
                        </div>
                        <div className="container-tecnologys-project-3">
                            <h3 className="title-project-3">Tools Used</h3>
                            <ul className='ul-skills-project-3'>
                               <li className='li-skills-project-3'>HTML</li>
                               <li className='li-skills-project-3'>CSS</li>
                               <li className='li-skills-project-3'>Javascript</li>
                               <li className='li-skills-project-3'>GitHub</li>
                               <li className='li-skills-project-3'>GIT</li>
                               <li className='li-skills-project-3'>Express</li>
                               <li className='li-skills-project-3'>PostgreSQL</li>
                               <li className='li-skills-project-3'>React</li>
                            </ul>
                        </div>
                        <div className="container-see-project-3">
                            <h3 className="title-project-3">See live</h3>
                            <div className="container-buttons-project-3">
                                <a target='_blank' href="https://videogame-page-ten.vercel.app/">
                                    <button className='btn-link-project-3'>Live Link</button>
                                </a>
                                <a href="https://gonza-trevisani.vercel.app/">
                                    <button className='btn-back-project-3'>Go back</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}