import React, {useState, useEffect} from 'react';
import Header from "../includes/Header";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const BlogList = () => {

    const [data, setData] = useState([])
    useEffect( () => {
        getData()
    },[])
    async function getData() {
        let result = await fetch('http://127.0.0.1:8000/api/bloglist')
        result = await result.json()
        setData(result)
    }

    return (
        <div>
            <Header />
            <div className="col-sm-8 offset-sm-2">
                <h1>Blog List</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td><img width='80' height='80' src={'http://127.0.0.1:8000/'+item.file_path} /></td>
                                <td>{item.description}</td>
                                <td>
                                    <Link to={'update/'+item.id} className='btn btn-info btn-sm ml-2'>Update</Link>
                                    <Link to={'blog-details/'+item.id} className='btn btn-info btn-sm ml-2'>Show</Link>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>  
                </div>
                </div>

    );
};

export default BlogList;
