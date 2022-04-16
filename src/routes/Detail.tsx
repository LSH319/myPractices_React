import {  useParams } from "react-router-dom";
import Head from "../components/Head";
import GetDetails from "../data/GetDetails";

function Detail(){
    const {id} = useParams();

    if(id){
        const [titles,texts] = GetDetails(id);

        return(
            <div>
                <Head />
                <p>{id}에 관련한 내용들</p>
                {titles.map((title,index)=>(
                    <div>
                        <h1>{title}</h1>
                        <span>{texts[index]}</span>
                    </div>
                ))}
            </div>
        );
    }
    else{
        return(
            <div>
                <Head />
                <p>{id}에 관련한 내용들</p>
                <h1>Get Data Fail</h1>
            </div>
        );
    }
    

    
}

export default Detail;