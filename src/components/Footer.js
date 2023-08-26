import "../styles/footer.css"
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="d-flex footer justify-content-center align-items-center">
            <div className="flex-column column column-1">
                <div className="flex-row">
                    <p className="bytecraft">ByteCraft</p>
                </div>
                <div className="flex-row d-inline-flex align-items-center">
                    <p>bytecraftersinfo@gmail.com</p>
                </div>
            </div>
            <div className="hide flex-column column align-self-start column-2">
                <p className="bold">Navigation</p>
                <p><a href="/bytecraft">About Us</a></p>
                <p><a href="/programs">Programs</a></p>
            </div>
            <div className="hide flex-column column align-self-start column-3">
                <p className="bold">Programs</p>
                <p><a href="https://www.coursera.org/learn/python">Python</a></p>
                <p><a href="https://www.coursera.org/learn/r-programming">R Programming</a></p>
                <p><a href="https://www.coursera.org/learn/web-development">Web Development</a></p>
                <p><a href="https://coursera.org/share/8e09182388ebdc420342bbf9e5f47402">Mobile Development</a></p>
                <p><a href="https://www.coursera.org/learn/data-science-ethics">Data Science Ethics</a></p>
            </div>
        </div >
    )
}

export default Footer;
