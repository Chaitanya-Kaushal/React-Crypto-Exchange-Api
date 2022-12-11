import axios from 'axios'
import React, { useState,useEffect } from 'react'
import {server} from '../index'
import { Link, useParams } from 'react-router-dom'

const Coins = () => {
    const params = useParams()
 const [coins,setCoins]= useState([])


 useEffect(()=>{

  const fetchCoin = async ()=>{
    const {data} = await axios.get( `${server}/coins/${params.id}`)
    console.log(data);
    setCoins(data)
  }
  fetchCoin()
 },[params.id])

 

  return (
    <>
    <div className='w-[85%] m-auto h-auto flex flex-col items-center'>
   <Link to='/coin' className='text-lg font-bold rounded-md  text-white bg-red-500 p-2 m-4 left-0 absolute ' >  Back to Coins</Link>
     <div className=' mt-10 '>

     {
       
            <div className="text-center py-8 px-12 ">
                <div className='flex flex-col items-center gap-2'>
                <p className='font-bold text-3xl uppercase underline'>{coins.id}</p>   
                <p className='font-bold text-lg'>{coins.symbol}</p>
                <p></p>
                <img src={coins?.image?.large} alt="logo" />
                <p className='text-lg font-sans text-white bg-gray-500 p-6' >{coins.description?.en}</p>
                
                </div>
            </div>
           
       
      }

     </div>

    </div>
    
    </>
  )
}

export default Coins