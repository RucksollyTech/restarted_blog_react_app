import React from 'react'
import { Link } from 'react-router-dom'
import Blogs from './Blogs'

const Home = () => {
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
            <Blogs />
        </div>
    )
}

export default Home