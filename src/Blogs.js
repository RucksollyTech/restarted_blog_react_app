import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div className='blogsContainer'>
            <Link to={"/blog_detail/2"}>
                <div className='singleBlog'>
                    <div className="imgCon">
                        <img src="/Images/default.jpg" alt="Default pix" />
                    </div>
                    <div className="gridBottom">
                        <div className='text-center'>
                            <small className='text-muted'>
                                Python
                            </small>
                        </div>
                        <div className="pt-3 bold6 text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, consectetur!
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={"/blog_detail/2"}>
                <div className='singleBlog'>
                    <div className="imgCon">
                        <img src="/Images/default.jpg" alt="Default pix" />
                    </div>
                    <div className="gridBottom">
                        <div className='text-center'>
                            <small className='text-muted'>
                                Python
                            </small>
                        </div>
                        <div className="pt-3 bold6 text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, consectetur!
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={"/blog_detail/2"}>
                <div className='singleBlog'>
                    <div className="imgCon">
                        <img src="/Images/default.jpg" alt="Default pix" />
                    </div>
                    <div className="gridBottom">
                        <div className='text-center'>
                            <small className='text-muted'>
                                Python
                            </small>
                        </div>
                        <div className="pt-3 bold6 text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, consectetur!
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={"/blog_detail/2"}>
                <div className='singleBlog'>
                    <div className="imgCon">
                        <img src="/Images/default.jpg" alt="Default pix" />
                    </div>
                    <div className="gridBottom">
                        <div className='text-center'>
                            <small className='text-muted'>
                                Python
                            </small>
                        </div>
                        <div className="pt-3 bold6 text-center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, consectetur!
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Blogs