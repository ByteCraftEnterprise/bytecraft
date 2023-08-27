import '../App.css';
import Card from "../components/Card"
import card from "../goals.js"


function Homepage() {
    const gradient = {
        background: 'linear-gradient(90deg, #0F8B8D 0%, #725AC1 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };

    const cards = card.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="heading">
                    Welcome to <span style={gradient}>ByteCraft</span>
                </h1>
                <p>An online computer science platform created for you</p>
                <button className="button" href="#mainsection">Learn more</button>
            </header>
            <div className='main' id="mainsection">
                <div className='mission'>
                    <h3>Our Mission</h3>
                    <p>Our mission is to provide accessible and high-quality online computer science education to underserved students in grades 9-12, <span className='highlight'> empowering them with the skills, knowledge, and opportunities</span> to thrive in the digital age. We are committed to bridging the educational and opportunity gaps that exist among underserved communities, fostering diversity and inclusion in STEM fields.</p>
                    <p>By providing access to <span className='highlight'> comprehensive curriculum, personalized mentorship, and a supportive learning environment</span>, we aim to equip individuals with the tools they need to pursue successful careers. Through our program, we aspire to make a lasting social impact, enabling students to unlock their full potential, contribute to innovation, and <span className='highlight'> shape a more equitable and inclusive future </span>.</p>
                </div>
            </div>
            <div className='goals'>
                <h3>Our Goals</h3>
                <div className='cards-list'>
                    {cards}
                </div>
            </div>

        </div >
    );
}

export default Homepage;