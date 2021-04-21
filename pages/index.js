import Head from 'next/head'
import Avatar from '../components/Avatar'
import{MicrophoneIcon, SearchIcon, ViewGridIcon} from '@heroicons/react/solid'
import Image from  'next/image'
import Footer from '../components/Footer'
import React,{useRef,useState} from 'react'
import {useRouter} from 'next/router'


   

export default function Home() {
  const [term , setTerm] =  useState('')
  const searchInputRef = useRef()
  const router = useRouter();

  const createPatient = (e) => {
   // e.preventDefault();
        
    // run your API call here, then...
   
}
  const search =(event)=>{
     event.preventDefault();
   // const  term = searchInputRef.current.value;
      if(!term ) return
      console.log(term)
      const index = Number(router.query.start) || 0
      router.push(`/search?term=${term}`)
  }
  return (
    <div  className=" flex flex-col  justify-center items-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <header className="flex w-full  p-5 justify-between text-sm text-gray-700" >

         <div className=" flex space-x-4 items-center">
           <p className="link">About</p>
           <p className="link">Store</p>
         </div>
         <div className="flex space-x-4 items-center">
           <p className="link">Gmail</p>
           <p className="link">Images</p>
           <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-600 cursor-pointer "/>
           <Avatar url="https://mpng.subpng.com/20180605/jay/kisspng-computer-icons-avatar-user-profile-5b16409fd8f963.4008572815281849918887.jpg"/>
         </div>
       </header>

       <form className="flex  flex-col items-center mt-44 flex-grow w-4/5 ">
       <Image
        src='/google.png'
        alt="Picture of the author"
        width={300}
        height={100}
      />
         <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
         rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
           <SearchIcon
           className="h-5 mr-3 text-gray-500 "
           />
           <input
           type="text"
           onChange={(e) => setTerm(e.target.value)}
           ref={searchInputRef}
           
           className=" flex-grow  focus:outline-none"
           />
        
           <MicrophoneIcon className="h-5"/>
         </div>
         <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-x-0 sm:flex-row sm:space-x-4">
           <button
            type="submit"
           onClick={search}
           className="btn bg-gray-4 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-grey-300 hover:shadow-md">Google Search</button>
           <button
           onClick={search}
           type="submit"
            className="btn bg-gray-4 p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-grey-300 hover:shadow-md">I'm Feeling lucky</button>
         </div>
       </form>
       
      <Footer/>
    </div>
  )
}
