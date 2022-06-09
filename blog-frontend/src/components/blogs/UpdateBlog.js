import React, {useEffect, useState} from 'react';
import Header from "../includes/Header";
import {withRouter} from 'react-router-dom'

const UpdateBlog = (props) => {

    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [file, setFile] = useState('')
    const [description, setDescription] = useState('')

    useEffect(  () => {
        getData()
    },[])

    async function editBlog(id) {

        let formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('file_path', file)

        let result = await fetch('http://127.0.0.1:8000/api/updateblog/'+id+'?_method=PUT', {
            method: 'POST',
            body: formData
        })
        alert('Blog updated')
        getData()
    }

    async function getData() {
        let result = await fetch('http://127.0.0.1:8000/api/blog/'+props.match.params.id)
        result = await result.json()
        setData(result)
        setTitle(result.title)
        setDescription(result.description)
        setFile(result.file)
    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Update Blog</h1>
                <br/>
                <input type="text" defaultValue={data.title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Blog Title" className="form-control"/>
                <br/>
                <input type="text" defaultValue={data.description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Blog Description" className="form-control"/>
                <br/>
                <input type="file" defaultValue={data.file_path} onChange={(e) => setFile(e.target.files[0])}  className="form-control"/>
                <br/>
                <img width='80' height='80' src={'http://127.0.0.1:8000/'+data.file_path} />
                <br /> <br />
                <button className="btn btn-primary" onClick={() => editBlog(data.id)}>Update Blog</button>
            </div>
        </div>
    );
};

export default withRouter(UpdateBlog);
