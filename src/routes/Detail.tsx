import { Link, useParams } from "react-router-dom";

function Detail(){
    const {id} = useParams();
    console.log(id);
    return(
        <div>
            <Link to='/'>홈으로</Link>
            <p>{id}에 관련한 내용들</p>
        </div>
    );
}

export default Detail;