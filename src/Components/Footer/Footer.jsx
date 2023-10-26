import './Footer.css';
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";


export const Footer = () => {
    return(
        <footer class="container-footer"> 
            <div className="first-line-footer">
                    <div className="container-social-footer">
                        <h2>Social</h2>
                        <a target='_blank' href="https://www.linkedin.com/in/gonza-trevisani/" className="link-icon-social">
                            <AiFillLinkedin className="icon-links-footer" />
                        </a>
                        <a target='_blank' href="https://github.com/Gonzzzza" className="link-icon-social">
                            <AiOutlineGithub className="icon-links-footer" />
                        </a>
                    </div>               
                    <div class="container-data-footer">
                        <h2 class="name-footer">Gonzalo Trevisani</h2>
                        <p class="data-footer">
                            A Frontend focused Web Developer building the Frontend of Websites
                            and Web Applications that leads to the success of the overall
                            product
                        </p>
                    </div>     
                </div>
            <span className="span-footer"></span>
            <div class="container-copy-footer">
                <p>
                    &copy; Copyright. Made by 
                </p>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/gonza-trevisani/">Gonzalo Trevisani</a>
            </div>
        </footer>
    )
}