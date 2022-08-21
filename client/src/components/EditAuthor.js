import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditAuthor = props => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then( res => {
            console.log(res.data);
            setName(res.data.name);
        })
        .catch( err => console.log(err) )
    }, [])

    const editAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/edit/' + id, {name} )
        .then( res => {
            console.log(res);
            navigate('/');
        })
        .catch( err => {
            console.log(err);
            setErrors(err.response.data.err.errors);
        });
    }

    return(
        <div>
            <Link to="/">Home</Link>
            <h2>Update Author Info</h2>
            <form onSubmit={editAuthor}>
                <label>
                    Name
                    <input type='text'
                        name="name"
                        value={name}
                        onChange= {e => setName(e.target.value)} 
                    />
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </label><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditAuthor;