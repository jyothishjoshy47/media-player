import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVideoHistoryAPI, removeHistoryAPI } from '../Services/allAPI';


function History() {
  const [videoHistory,setVideoHistory] = useState([])

  console.log(videoHistory);
  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async()=>{
    try {
      const result = await getVideoHistoryAPI()
      setVideoHistory(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteVideoHistory = async (videoId)=>{
    try {
      await removeHistoryAPI(videoId)
      getAllHistory()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between '>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>
      </div>
      <table className='table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
          </tr>
        </thead>
        <tbody>
        {
          videoHistory.length>0?
           videoHistory?.map((item,index)=>(
            <tr key={item?.id}>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href="https://www.youtube.com/embed/tOM-nWPcR4U" target='_blank'>{item?.youTubeUrl}</a></td>
              <td>{item?.timeStamp}</td>
              <td><button onClick={()=>deleteVideoHistory(item?.id)} className='btn'>
                    <i className='fa-solid fa-trash text-danger '></i>
                </button>
              </td>
            </tr>
           ))
          :
          <div className='text-danger fw-bolder '>Your watch History is empty!!!</div>
        }
        </tbody>
      </table>
    </div>
  )
}

export default History
