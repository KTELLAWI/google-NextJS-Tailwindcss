import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import HeaderOption from './HeaderOption'

export default function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg: space-x-36 lg:pl-52
        border-b ">
            <div className="flex space-x-6">
                <HeaderOption 
                Icon={SearchIcon}
                title="All" selected/>
                <HeaderOption 
                Icon={PhotographIcon}
                title="photo" />
                <HeaderOption 
                Icon={PlayIcon}
                title="Videos" />
                <HeaderOption 
                Icon={NewspaperIcon}
                title="News" />
                <HeaderOption 
                Icon={MapIcon}
                title="'Maps" />
                <HeaderOption 
                Icon={DotsVerticalIcon}
                title="More" />
             
             
             
             
            </div>




         <div className="flex space-x-4 ">
             <p>Settings</p>
             <p>Tools</p>
         </div>
        </div>
    )
}
