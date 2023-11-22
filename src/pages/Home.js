import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../Requests'
const Home = () => {
  return (
    <>
      <Main/>
      <Rows rowID='1' title='Popular' fetchURL={requests.requestPoplular}/>
      <Rows rowID='2' title='UpComing' fetchURL={requests.requestUpcoming}/>
      <Rows rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
      <Rows rowID='4' title='TopRated' fetchURL={requests.requestToprated}/>
      <Rows rowID='5' title='Horror' fetchURL={requests.requestHorror}/>

      
    </>
  )
}

export default Home
