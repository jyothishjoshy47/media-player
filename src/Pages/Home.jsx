import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Categories from '../Components/Categories'



function Home() {
  const [addVideoResponse,setAddVideoResponse] = useState()
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  return (
    <>
      <div className="container my-5 d-flex  justify-content-between ">
        <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className='container-fluid my-5 row'>
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View addVideoResponse={addVideoResponse} removeCategoryVideoResponse={removeCategoryVideoResponse}/>
        </div>
        <div className="col-lg-6">
          <Categories setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
        </div>
      </div>
    </>
  )
}

export default Home
