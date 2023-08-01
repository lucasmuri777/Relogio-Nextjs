'use client'
import Image from 'next/image'
import {useState, useEffect} from 'react'
  
export default function Home() {
  const [fulltime, setFullTime] = useState('')
  const [greeting, setGreeting] = useState('')


useEffect(()=>{
  if(fulltime == ''){
    pegarTime()
    return
  }
  const setTime = setInterval(pegarTime,10000)
  function pegarTime(){
    const fullTime1 = new Intl.DateTimeFormat('pt-BR', {
      timeStyle: 'short',
      hour12: false
    }).format();
    setFullTime(fullTime1)
  }

  function getHour(){
    const hour = new Date().getHours();
    if(hour >= 0 && hour < 12){
      setGreeting('Bom dia! 😀')
    }else if(hour >= 12 && hour < 18){
      setGreeting('Boa tarde! 😎')
    }else if(hour >= 18 && hour <= 23){
      setGreeting('Boa Noite! 😴')
    }
  }
  getHour()

  return () =>{
    clearInterval(setTime)
  }
},[fulltime])

  

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-white
      bg-gradient-to-r from-sky-500 to-indigo-500'> 
    <div className='text-9xl'>{fulltime}</div>
    <div className='text-5xl font-bold'>{greeting}</div>
    </div>
  )
}
