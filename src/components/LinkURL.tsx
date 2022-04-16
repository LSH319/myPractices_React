import { Link } from "react-router-dom";
import GetURLS from "../data/GetURLS";
import '../css/LinkURLS.css';
import reactLogo from '../img/react_logo.png'; 
import gitLogo from '../img/github_logo.png'; 
import homepageLogo from '../img/homepage_logo.png'; 

function LinkURL(title:string[]){

    const URLS = GetURLS(title[0]);
    if(title[0] === 'ETC'){
        return(
            <div className="linkURLS">
                {URLS ? 
                    <Link to={URLS[0]}>
                        {/* <img src="/img/react_logo.png" alt="detail" /> */}
                        <img src={reactLogo} alt="detail" />
                    </Link>
                :null}
            </div>
        );
    }
    else{
        return(
            <div>
                {URLS ? 
                    <div className="linkURLS">
                        <Link to={URLS[0]}>
                            {/* <img src="./img/react_logo.png" alt="detail" /> */}
                            <img src={reactLogo} alt="detail" />
                        </Link>
                        <a href={URLS[1]} target='_blank'>
                            {/* <img src="/img/github_logo.png" alt="git" /> */}
                            <img src={gitLogo} alt="detail" />
                        </a>
                        <a href={URLS[2]} target='_blank'>
                            {/* <img src="/img/homepage_logo.png" alt="gh-page" /> */}
                            <img src={homepageLogo} alt="detail" />
                        </a>
                    </div>
                :null}
            </div>
        );
    }
}

export default LinkURL;