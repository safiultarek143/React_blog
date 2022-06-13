import React, {useState, useEffect} from 'react';
import Header from "../includes/Header";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Articles = () => {

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
                <h1>Welcome to my blog </h1>
                  
                </div>
                </div>

    );
};

export default Articles;

