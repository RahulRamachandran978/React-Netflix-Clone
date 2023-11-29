import React ,{useState,useEffect} from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc,doc,onSnapshot} from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
    const[movies,setMovies] = useState([])
    const{user} = UserAuth()

    const slideLeft =() =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500 ;
    }

    const sliderRight = () =>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
          setMovies(doc.data()?.savedShows || []); // Use an empty array if SavedShows is null
        });
      }, [user?.email]); // Add user?.email as a dependency

      const movieRef = doc(db,'users',`${user?.email}`)

      const deleteShow = async (passedID)=>{
        try{
            const result = movies.filter((item)=>item.id !== passedID)
            await updateDoc(movieRef,{
                savedShows:result,
            })
        }catch(error){
            console.log(error)
        }
      }

  return (
    <>
    <h2 className='text-white w-[10px] font-bold md:text-xl p-4'>MyShows</h2>
    <div className='relative flex items-center'>
        <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 ' size={40}/>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,id)=>(
                    <div key={id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                    <img
                      className="w-full h-auto block"
                      src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                      alt={item?.title}
                    />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                      <p className="whitespace-normal text-xs md:text-sm flex justify-center font-bold text-center items-center h-full">
                        {item?.title}
                      </p>
                      <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                    </div>
                  </div>
            ))} 
        </div>
        <MdChevronRight onClick={sliderRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 ' size={40}/>
    </div>
      
    </>
  )
}

export default SavedShows
