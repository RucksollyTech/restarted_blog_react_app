import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

const Footer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='footer'>
        <div>
            <Link to={"/"}>
                <img src="/Images/logo.png" alt="logo" />
            </Link>
        </div>
        <div className='footerContainer'>
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/about"}>
                About 
            </Link>
            <button className='btn bold6' onClick={handleShow}>
                Write Blog
            </button>
            <Link to={"/all_blog"}>
                All blogs
            </Link>
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

export default Footer