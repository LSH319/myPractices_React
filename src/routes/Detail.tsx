import { Link, useParams } from "react-router-dom";
import Head from "../components/Head";

function Detail(){
    const {id} = useParams();

    //GetDetails(id);

    return(
        <div>
            <Head />
            <p>{id}에 관련한 내용들</p>
        </div>
    );
}

export default Detail;