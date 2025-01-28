import  Axios  from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";
function GetAxios(){
    const [mydata,setData] = useState([]);
    useEffect(()=>{
        Axios.get(baseURL).then((response)=>{
            setData(response.data);
        })
    },[])
    return(
        <>
            {
                (mydata.map((item) => {
                    const {id,title,body} = item ;
                    return(
                        <div key={id}>
                            <h4>{id}</h4>
                            <h4>{title}</h4>
                            <h4>{body}</h4>
                        </div>
                    );
                }))
            }
           {/* <h4>{mydata.id}</h4>
                <h4>{mydata.title}</h4>
                <h4>{mydata.body}</h4> */} 
        </>
    )
}
export default GetAxios;
