import React, {useState} from 'react';
import Header from "../includes/Header";

const AddBlog = () => {

    const [title, setTitle] = useState('')
    const [file, setFile] = useState('')
    const [description, setDescription] = useState('')

    async function addBlog() {
       // console.log(title, title, description, file)
        const formData = new FormData()
        formData.append('file_path', file)
        formData.append('title', title)
        formData.append('description', description)

        let result = await fetch("http://127.0.0.1:8000/api/addblog", {
            method: 'POST',
            body: formData
        })
        alert("Blog has been saved")
    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Add Blog</h1>
                <br/>
                <input type="text" placeholder="Enter Blog Title" onChange={(e) => setTitle(e.target.value)} className="form-control"/>
                <br/>
                <input type="file" placeholder="Enter Blog Image" onChange={(e) => setFile(e.target.files[0])} className="form-control"/>
                <br/>
                <input type="text" placeholder="Enter Blog Description" onChange={(e) => setDescription(e.target.value)} className="form-control"/>
                <br/>
                <button onClick={addBlog} className="btn btn-primary">Add Blog</button>
            </div>
        </div>
    );
};

export default AddBlog;