import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import { ChevronDoubleRightIcon, ChevronLeftIcon ,ChevronRightIcon} from '@heroicons/react/solid';


export default function PaginationButton() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0 ;
     console.log(router.query.start)
     console.log(router)

    return (
        <div className="flex max-w-lg justify-between text-blue-700 mb-10">
             {startIndex >= 10 && (
                 <Link href={`/search?term=${router.query.term}&start=${startIndex-10}`}>
                 <div className="cursor-pointer flex flex-grow items-center flex-col hover:underline">
                     <ChevronLeftIcon className='h-5 ' />
                     <p>Pre vious</p>
                 </div> 
                 </Link>
             )}
             <Link href={`/search?term=${router.query.term}&start= ${startIndex+10}`}>
             <div className="cursor-pointer flex flex-grow flex-col items-center hover:underline">
                 <ChevronDoubleRightIcon className='h-5 cursor-pointer'/>
                 <p>Next</p>
             </div>
             </Link>
            
        </div>
    )
}
