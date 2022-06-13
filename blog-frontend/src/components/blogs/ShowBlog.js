import React, {useEffect, useState} from 'react';
import Header from "../includes/Header";
import {withRouter} from 'react-router-dom'

const ShowBlog = (props) => {

    const [data, setData] = useState([])

    useEffect(  () => {
        getData()
    },[])

    async function getData() {
        // process.env.NEXT_PUBLIC_API_SERVER_BASE_URL + "/api"
        let result = await fetch('http://127.0.0.1:8000/api/blog/'+props.match.params.id)
        result = await result.json()
        setData(result)
    }

    return (
        <div>
            <Header />
<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>{data.title}</h2>
      <h5>Title description, June 13, 2022</h5>
      <div class="fakeimg"><img width='400' height='400' src={'http://127.0.0.1:8000/'+data.file_path} /></div>
      <p>{data.description}</p>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default withRouter(ShowBlog);