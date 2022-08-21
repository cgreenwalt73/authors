import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const AuthorForm= (props) => {

    const [ name, setName ] = useState("")
    const [ errors, setErrors ] = useState([])
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', { name })
            .then(res =>{
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <Link to="/">Home</Link>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <label>
                Name:
                <input type='text' onChange= {e => setName(e.target.value)} />
            </label><br/>
            <button>Submit</button>
        </form>
    )
}
export default AuthorForm;