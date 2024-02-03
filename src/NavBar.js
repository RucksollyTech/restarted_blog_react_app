import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const [navShow, setNavShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='NavbarContainer sticky-top bg-white'>
            <div className='NavbarContent'>
                <div>
                    <Link to={"/"}>
                        <img src="/Images/logo.png" alt="Design image" />
                    </Link>
                </div>
                <div className='rightNav'>
                    <Link to={"/"}>
                        Home
                    </Link>
                    <Link to={"/about"}>
                        About
                    </Link>
                    <button className='btn bold6' onClick={handleShow}>
                        Write Blog
                    </button>
                    <img onClick={()=>setNavShow(!navShow)} className='breadCrumbs' width="24" height="24" src="https://img.icons8.com/material-sharp/24/menu--v1.png" alt="menu--v1"/>
                    <Link to={"/all_blog"}>
                        All BLogs
                    </Link>
                </div>
            </div>
            <div className={`${navShow ? "sideBarNav display" : "sideBarNav"}`} >
                <div className='leftBotton'>
                    <img onClick={()=>setNavShow(!navShow)} width="25" height="25" src="https://img.icons8.com/ios-glyphs/25/FFFFFF/delete-sign.png" alt="delete-sign"/>
                </div>
                <div className='sideBarLinks'>
                    <Link className='text-white' to={"/"}>
                        Home
                    </Link>
                    <Link className='text-white' to={"/about"}>
                        About
                    </Link>
                    <span className='text-white' onClick={handleShow}>
                        Write Blog
                    </span>
                    <Link className='text-white' to={"/all_blog"}>
                        All BLogs
                    </Link>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Write Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-group">
                        <label>Write blog</label>
                        <textarea class="form-control" rows="3" placeholder='Start typing...'></textarea>
                    </div>
                    <div class="form-group pt-3">
                        <label>Add Image</label>
                        <input type="file" class="form-control-file" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-sm btn-danger' onClick={handleClose}>
                        Close
                    </button>
                    <button className='btn btn-sm btn-primary'>
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NavBar