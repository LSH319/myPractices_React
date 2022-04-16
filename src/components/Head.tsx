import { Link } from "react-router-dom";
import '../css/Head.css';

function Head(){

    const detailID = ['starbucks','reactTutorial','reactPractice','soomgo'];

    return(
        <div className="header">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to={`/detail/${detailID[0]}`}>Starbucks</Link>
                </li>
                <li>
                    <Link to={`/detail/${detailID[1]}`}>ReactTutorial</Link>
                </li>
                <li>
                    <Link to={`/detail/${detailID[2]}`}>ReactPractice</Link>
                </li>
                <li>
                    <Link to={`/detail/${detailID[3]}`}>Soomgo</Link>
                </li>
                <li>
                    <Link to='/etc'>ETC</Link>
                </li>
            </ul>
        </div>
    );
}

export default Head;