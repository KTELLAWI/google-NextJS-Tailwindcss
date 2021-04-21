import React,{useRef} from 'react'
import Image from  'next/image'
import { useRouter, } from "next/router";
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

export default function Header () {
    const router =useRouter();
    const searchWord = useRef(null)

     const search =(e)=>{
         e.preventDefault();
         const term = searchWord.current.value;
         if (!term) return;
         router.push(`/search?term=${term}`)
     }
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center'>
            <Image
            className=" cursor-pointer"
        src='/google.png'
        onClick={()=> router.push('/')}
        alt="Picture of the author"
        width={120}
        height={40}
      /> 
      <form className="border-gray-200 flex flex-grow border rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-5  ">
          <input 
          ref={searchWord}
          type="text"
          className="flex-grow w-full focus:outline-none"
          defaultValue={router.query.term}
          />
          <XIcon className="h-5 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          onClick={()=> (searchWord.current.value="")}/>
          <MicrophoneIcon
          className="h-5 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon
          className="h-5 text-blue-500 hidden sm:inline-flex  "/>
          <button
          type="submit"
          hidden
          onClick={search}
          >search</button>
 
      </form>
      <Avatar
      className="ml-auto "
      url="https://mpng.subpng.com/20180605/jay/kisspng-computer-icons-avatar-user-profile-5b16409fd8f963.4008572815281849918887.jpg"
      
      />

            </div>
            <HeaderOptions/>
            
        </header>

    )
}
