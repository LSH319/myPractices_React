import PracticeSwiper from "../components/PracticeSwiper";
import starbucksLogo from '../img/starbucks_logo.png';
import reactLogo from '../img/react_logo.png';
import soomgoLogo from '../img/soomgo_logo.svg';



function Home(){

    const titles = [
        // ['StarBucks CloneCoding','../img/starbucks_logo.png'],
        ['StarBucks CloneCoding',starbucksLogo],
        ['React Tutorial',reactLogo],
        ['React Practice',reactLogo],
        ['Soomgo CloneCoding',soomgoLogo],
        ['ETC']
    ];

    return(
        <PracticeSwiper titles={titles}/>
    );
}

export default Home;