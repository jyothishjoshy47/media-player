import React, { useState } from 'react'
import {Modal, Button, FloatingLabel, Form} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../Services/allAPI';

function Add({setAddVideoResponse}) {
    const [invalidYouTubeUrl,setInvalidYouTubeUrl] = useState(false)
    const [videoDetails,setVideoDetails] = useState({
      caption:"",imgUrl:"",youTubeUrl:""
    })
    const [show, setShow] = useState(false);

    console.log(videoDetails);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getEmbedURL = (link) => {
      // https://www.youtube.com/watch?v=L0yEMl8PXnwc
      // https://www.youtube.com/embed/L0yEMl8PXnw
        if (link.includes("v=")) {
          let videoId = link.split("v=")[1].slice(0,11)
          console.log(videoId);
          setVideoDetails({...videoDetails,youTubeUrl:`https://www.youtube.com/embed/${videoId}`})
          
          setInvalidYouTubeUrl(false)
        }else{
          setVideoDetails({...videoDetails,youTubeUrl:""})
          setInvalidYouTubeUrl(true)
        }
    }

    const handleUpload = async () =>{
      console.log("inside handle upload");
      // const {key1,key2...} = object-name
      const {caption,imgUrl,youTubeUrl} = videoDetails
      if (caption && imgUrl && youTubeUrl) {
        console.log("api call");
        try {
          const result = await addVideoAPI(videoDetails)
          console.log(result);
          if (result.status>=200 && result.status<300) {
            console.log(result.data);
            setAddVideoResponse(result.data)
            setVideoDetails({caption:"",imgUrl:"",youTubeUrl:""})
            toast.success(`${result.data.caption} added your collection!!!`)
            handleClose()
          }else{
            toast.error(result.response.data)
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.warning("Please fill the form completely")
      }
    }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Videos</h5>
        <button className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5' onClick={handleShow}>+</button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details!!!</p>
          <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3">
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Image URL" className="mb-3">
            <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="YouTube URL" className="mb-3">
            <Form.Control onChange={e=>getEmbedURL(e.target.value)}  type="text" placeholder="YouTube URL" />
          </FloatingLabel>
          {
            invalidYouTubeUrl && <div className='text-danger fw-bolder'>Invalid youtube url</div>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Add
