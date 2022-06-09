import React, {useState} from 'react';
import Header from "../includes/Header";
import {Table} from "react-bootstrap";

const SearchBlog = () => {

    const [data, setData] = useState([])

    async function search(key) {
        let result = await fetch('http://127.0.0.1:8000/api/search-blog/'+key)
        result = await result.json()
        setData(result)
    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Search Blog</h1>
                <br/>
                <input type="text" onChange={(e) => search(e.target.value)} placeholder="Enter Blog Title"  className="form-control"/>
                <br/>
                {
                    data.length > 0 ?
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Description</th>
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
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    :
                    <h1>No Data Found</h1>
                }

            </div>
        </div>
    );
};

export default SearchBlog;
