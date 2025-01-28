import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
    const [apiData, setApiData] = useState([]);
    function getData() {
        axios.get('https://679328645eae7e5c4d8dbc1f.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
            })
    }
    useEffect(() => {
        getData();
    }, []);
   function handleDelete(id) {
        axios.delete(`https://679328645eae7e5c4d8dbc1f.mockapi.io/crud/${id}`)
        .then(() => {
            getData();
        }).catch((error)=>{
            console.log(error);
        })
    }
    const setDataToStorage = (id,name,age,email) => {
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);
    }
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-2 mt-2">
                        <Link to="/create">
                            <button className="btn btn-primary">Create New Data</button>
                        </Link>
                    </div>
                    <table className="table table-bordered table-striped table-dark table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.emp_name}</td>
                                                <td>{item.emp_age}</td>
                                                <td>{item.emp_email}</td>
                                                <td>
                                                    <Link to='/edit'>
                                                    <button className="btn btn-primary"onClick={()=>setDataToStorage(item.id,item.emp_name,item.emp_age,item.emp_email)}>Edit</button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger"
                                                    onClick={() => { if(window.confirm('Are You Sure Delete Data??')){ handleDelete(item.id)}}}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Read;