import Head from "../components/Head";
import GetDetails from "../data/GetDetails";

function ETC(){

    const [titles, texts] = GetDetails('etc');
    return(
        <div>
            <Head />
            <span>기타 부분들</span>
            {titles.map((title,index)=>(
                    <div>
                        <h1>{title}</h1>
                        <span>{texts[index]}</span>
                    </div>
                ))}
        </div>
    );
}

export default ETC;