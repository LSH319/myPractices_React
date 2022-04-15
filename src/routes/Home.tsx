import PracticeSwiper from "../components/PracticeSwiper";


function Home(){

    const titles = [
        ['StarBucks CloneCoding','/img/starbucks_logo.png'],
        ['React Tutorial','/img/react_logo.png'],
        ['React Practice','/img/react_logo.png'],
        ['Soomgo CloneCoding','/img/soomgo_logo.svg'],
        ['ETC']
    ];

    return(
        <PracticeSwiper titles={titles}/>
    );
}

export default Home;