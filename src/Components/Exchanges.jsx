import axios from 'axios'
import React, { useState,useEffect } from 'react'
import {server} from '../index'

const Exchanges = () => {
    const [exchanges,setExchanges] = useState([])

    useEffect(() => {
     const getData = async ()=>{
        let {data} = await axios.get(`${server}/exchanges`)
       console.log(data);
        setExchanges(data)
     }
    getData();
     
    }, [])
    

  return (
    <div className='w-[85%] mx-auto mt-12 h-screen flex flex-wrap justify-evenly gap-x-6 gap-y-6'>
      
      {
        exchanges.map((i)=>(
            <div key={i.id} className="text-center py-8 px-12 w-[200px] shadow-lg rounded-lg hover:scale-110 duration-200">
                <a href={i.url} target="_blank" rel="noreferrer" className='flex flex-col items-center gap-2'>
                    <img src={i.image} alt="logo" className='w-[50px] ' />
                <p className='font-bold text-lg'>{i.trust_score_rank}</p>
                <p className='font-mono font-semibold break-all'>{i.name}</p>
                </a>
            </div>
           
        ))
      }
    </div>
  )
}

export default Exchanges