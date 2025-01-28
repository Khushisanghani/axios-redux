// import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import  Axios  from "axios";
import { useState } from "react";

function PostAxios(){
    const [mytitle,setTitle] = useState('');
    const [mybody,setBody] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:mytitle,
            body:mybody
        })
        .then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter title :</label>
                <input type="text" name="title" value={mytitle} 
                onChange={(e)=>setTitle(e.target.value)}/>
                <br/><br/>
                <label>Enter body :</label>
                <input type="text" name="body" value={mybody}
                 onChange={(e)=>setBody(e.target.value)}/>
                <br/><br/>
                <input type="submit" value='post'/>
            </form>
        </>
    )
}
export default PostAxios;