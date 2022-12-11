import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {server} from '../index'

const Coins = () => {
 const [coins,setCoins]= useState([])
 const [currency,setCurrency]= useState('inr')
 const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

 useEffect(()=>{

  const fetchCoin = async ()=>{
    const {data} = await axios.get( `${server}/coins/markets?vs_currency=${currency}`)
    console.log(data);
    setCoins(data)
  }
  fetchCoin()
 },[currency])

 

  return (
    <>
    <div className='w-[85%] m-auto h-auto flex flex-col items-center'>
     <div className='m-8 text-center '>
      <p className='text-xl font-bold text-white bg-gray-500 p-1 mb-2' >Check Currency Value</p>
      <input type="radio"  value="inr" name='currency' defaultChecked   onChange={(e)=>setCurrency(e.target.value)} />
      <span className='ml-1 mr-6 font-semibold'>INR</span>
      <input type="radio" value="usd" name='currency'   onChange={(e)=>setCurrency(e.target.value)} />
      <span className='ml-1 mr-6 font-semibold'>USD</span>
      <input type="radio" value="eur" name='currency'   onChange={(e)=>setCurrency(e.target.value)} />
      <span className='ml-1 mr-6 font-semibold'>EUR</span>
     </div>
     <div className='flex flex-wrap gap-6'>
     {
        coins.map((i)=>(
            <div key={i.id} className="text-center py-8 px-12 w-[200px] shadow-lg rounded-lg hover:scale-110 duration-200">
                <Link to={`/coin/${i.id}`} className='flex flex-col items-center gap-2'>
                    <img src={i.image} alt="logo" className='w-[50px] ' />
                <p className='font-bold text-lg'>{i.symbol}</p>
                <p>{i.name}</p>
                <p><span>{currencySymbol}</span> {i.current_price}</p>
                </Link>
            </div>
           
        ))
      }
     </div>

    </div>
    
    </>
  )
}

export default Coins