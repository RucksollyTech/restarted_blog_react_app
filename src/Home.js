import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Blogs from './Blogs'
import axios from 'axios';

const Home = () => {
    const [apiData,setApiData] = useState()
    const [error,setError] = useState()
    const [loading,setLoading] = useState(true)

    const getUser = async()=> {
        try {
            const {data} = await axios.get('https://rucksolly.pythonanywhere.com/api/blogs');
            setLoading(false)
            setApiData(data);
        } catch (error) {
            setLoading(false)
            setError(error);
        }
    }
    useEffect(()=>{
        getUser();
    },[])
    return (
        <div>
            <div className="displayBAr">
                <Link to={"/"} className='active'>
                    Latest
                </Link>
                <Link to={"/"}>
                    Popular
                </Link>
                <Link to={"/"}>
                    Programming
                </Link>
                <Link to={"/"}>
                    Books
                </Link>
            </div>
            {loading && 
                <div className="spinner-border text-primary" role="status" />
            }
            {error && <div className='alert alert-danger'>Something went wrong.Please try again</div>}
            {apiData && <Blogs value={apiData} />}
        </div>
    )
}

export default Home