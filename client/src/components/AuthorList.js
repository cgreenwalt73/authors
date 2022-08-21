import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditAuthor from './EditAuthor';

const AuthorList= props => {

    const [authors, setAuthors] = useState([]);

    const removeFromDom = authorID => {
        setAuthors(authors.filter(author => author._id !== authorID));
    }

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
        .then( res => {
            console.log(res);
            setAuthors(res.data.authors);
        })
        .catch( err => console.log(err) )
    }, [])

    const deleteAuthor = authorID => {
        axios.delete(`http://localhost:8000/api/authors/${authorID}`)
            .then( res => {
                console.log(res)
                removeFromDom(authorID)
            })
            .catch( err => console.log(err) );
    }

    return (
        <div>
            <Link to="/new">Add an author</Link>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    { authors.map((author, index) => {
                        return(
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/edit/${author._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={ e => {deleteAuthor(author._id)} }>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AuthorList;