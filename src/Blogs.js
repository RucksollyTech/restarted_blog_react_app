import React from 'react'
import { Link } from 'react-router-dom'

// const Blogs = ({value}) => {
const Blogs = (props) => {

    const {value} = props
    // props.value
    return (
        <div className='blogsContainer'>
            {value.map((item,index,array)=>(
                <Link to={"/blog_detail/2"} key={item.id}>
                    <div className='singleBlog'>
                        <div className="imgCon">
                            <img src={`https://rucksolly.pythonanywhere.com/${item.user.image}`} alt="Default pix" />
                        </div>
                        <div className="gridBottom">
                            <div className='text-center'>
                                <small className='text-muted'>
                                    {item.title}
                                </small>
                            </div>
                            <div className="pt-3 bold6 text-center">
                                {item.body}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            
        </div>
    )
}

export default Blogs