import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../Requests'
const Home = () => {
  return (
    <>
      <Main/>
      <Rows title='UpComing' fetchURL={requests.requestUpcoming}/>
      <Rows title='Popular' fetchURL={requests.requestPoplular}/>
      <Rows title='Trending' fetchURL={requests.requestTrending}/>
      <Rows title='TopRated' fetchURL={requests.requestToprated}/>
      <Rows title='Horror' fetchURL={requests.requestHorror}/>

      
    </>
  )
}

export default Home
