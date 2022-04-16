import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "../css/SwiperCSS.css";

import { EffectCards, Navigation } from "swiper";
import LinkURL from "./LinkURL";

interface SwiperParameters{
    titles:string[][]
}

function PracticeSwiper(props:SwiperParameters){

    return(
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards , Navigation]}
            className="mySwiper"
            navigation = {true}
        >
            {props.titles.map((title) => (
                <SwiperSlide key={title[0]}>
                    {title[1] ? <img src={title[1]} alt="" className="logoimg"/> : null}
                    <p className="title">{title[0]}</p>
                    <LinkURL {...title}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default PracticeSwiper;