import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import Card from 'react-bootstrap/Card'
import cardImage1 from '../assets/source.gif'
import cardImage2 from '../assets/features2.gif'
import cardImage3 from '../assets/features3.gif'

function Landing() {
  return (
    <>
      <div className='landingSection container '>
        <div className='row align-items-center my-5'>
          <div className='col-lg-5'>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Media Player App. will allow you to add and remove their uploaded videos , also helps to arrange them in different categories by providing drag and drop functionalities.</p>
            <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className='col-lg-6'>
            <img src={landingImg} alt="" />
          </div>
        </div>
        {/* features */}
        <div className="features my-5">
          <h3 className='text-center '>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card style={{ width: '22rem', height:'400px' }}>
                <Card.Img style={{height:'250px'}} className='img-fluid ' variant="top" src={cardImage1} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                  User can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: '22rem', height:'400px' }}>
                <Card.Img style={{height:'250px'}} className='img-fluid ' variant="top" src={cardImage2} />
                <Card.Body>
                  <Card.Title>Categorize Vidoes</Card.Title>
                  <Card.Text>
                  User can categorise the videos according to their prefernces using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: '22rem', height:'400px' }}>
                <Card.Img style={{height:'250px'}} className='img-fluid ' variant="top" src={cardImage3} />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                  User are able to see the history of watched videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* pre-footer */}
          <div className='my-5 row border rounded p-5 '>
            <div className="col-lg-5">
              <h3 className='text-warning '>Simple, Fast and Powerful</h3>
              <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .
              </p>
              <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Categorize Videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .
              </p>
              <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Watch History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime .
              </p>
            </div>
            <div className="col"></div>
            <div className="col-lg-6">
            <iframe width="100%" height="360" src="https://www.youtube.com/embed/Po3jStA673E?si=uuw-8F07uMPsDGQP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
      </div>
    </>
  )
}

export default Landing
