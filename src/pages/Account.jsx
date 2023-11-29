import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
        <div className='w-full text-white'>
            <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
                    <div className='absolute top-[20%] p-4 md:p-8'>
                        {/* <h1 className='text-3xl md:text-5xl font-bold'>MyShows</h1> */}
                    </div>
                </div>
         </div>
         <SavedShows/>
    </>
  )
}

export default Account
