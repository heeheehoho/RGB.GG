import {Link} from 'react-router-dom';
import imagemain from '../images/slogan.png';
import imagemain2 from '../images/lo.png';
import '../App.css';

const Home = () =>{
    return(
    <div>
        <nav id="menubar">
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">RANKING</Link></li>
            <li><Link to="/member">MEMBER</Link></li>
            <li><Link to="/guide">GUIDE</Link></li>
        </ul>
    </nav>

    <div>
    <img className="lo" src={imagemain2}/>
    </div>

    <br></br>

    <div>
        <img className="slogan" src={imagemain}/>
    </div>
    <form action="https://www.google.com/search" method="GET">
        <div className="search">
        <input className="input-1" type="text" name="q" placeholder="Welcome to RGB"/>
        <button className="search_button" type="submit">.GG</button>
        </div>
    </form>
    </div>
    );
};

export default Home;