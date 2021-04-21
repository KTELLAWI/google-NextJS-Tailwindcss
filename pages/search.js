import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY,CONTEXT_KEY} from '../key'
import response  from '../response'
import {useRouter} from 'next/router'
import SearchResults from '../components/SearchResults'


export default function search({results}) {
    const router = useRouter();
    console.log(results)
    return (
        <div>
          <Head>
              <title>{router.query.term}=Google Search</title>
              <link rel= "icon" herf="/favicon.ico"></link>
          </Head>  
          <Header/>
          <SearchResults
          results={results}
          />
        </div>
    )
}

export async function getServerSideProps(context){
    const startIndex =  Number(context.query.start )|| "0";
     const useDummyData =false;
    const data= useDummyData ? response :
    await fetch (`https://www.googleapis.com/customsearch/v1?key=AIzaSyBDciQvM2c77oTayWXhd4SV8b6RK2_cgi0&cx=1fb7a0f318f2917b1&q=${context.query.term}&start=${startIndex}`)
    .then((response) => response.json())

    return{
        props:{
            results :data
        }
    }

}