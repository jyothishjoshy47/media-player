import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { addVideoAPI, getAllVideoAPI, getSingleCategoryAPI, updateCategoryAPI } from '../Services/allAPI'

function View({setDeleteVideoCategoryResponse,addVideoResponse,removeCategoryVideoResponse}) {
  const [deleteResponse,setDeleteResponse] = useState("")
  const [allVideos,setAllVideos] = useState([])
  console.log(allVideos);
  useEffect(()=>{
    getAllVideos()
  },[addVideoResponse,deleteResponse,removeCategoryVideoResponse])

  const getAllVideos = async ()=>{
    try{
      const result = await getAllVideoAPI()
      console.log(result);
      if (result.status>=200 && result.status<300) {
        setAllVideos(result.data)
      }
    }catch(error){
      console.log(error);
    }
  }

  const dragOverView = (e)=>{
    e.preventDefault()
  }

  const handleCategoryVideo = async (e) => {
    const {categoryId,videoDetails} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(categoryId,videoDetails);
    try {
      const {data} =  await getSingleCategoryAPI(categoryId)
      console.log(data);
      const updateCategoryVideoList = data.allVideos.filter(item=>item.id!==videoDetails.id)
      console.log(updateCategoryVideoList);
      const {categoryName,id} = data
      const categoryResult = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updateCategoryVideoList})
      setDeleteVideoCategoryResponse(categoryResult.data)
      await addVideoAPI(videoDetails)
      getAllVideos()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Row droppable={true} onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
       {
        allVideos.length>0?
          allVideos?.map(video=>(
            <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
              <VideoCard displayData={video} setDeleteResponse={setDeleteResponse}/>
            </Col>
          ))
        :
          <div className='fw-bolder text-danger'>Nothing to display</div>
       }
      </Row>
    </>
  )
}

export default View