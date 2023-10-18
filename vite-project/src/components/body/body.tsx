import React from 'react'
import { Images } from '../asset/imgs'

export default function body() {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] justify-center grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 mx-auto '>
            <div className='px-10 sm:bg-green-100 bg-white py-0 lg:py-14'>
                <h1 className='text-xl md:text-4xl font-extrabold pt-16 capitalize '>Stramline your tailwind <br /> projects</h1>
                <p className='text-zinc-500 my-5'>Expertly made,responsive , assesible component in react and HTML ready to be used on your website or app,just copy and paste them on yourTAilwind projet</p>
                <button className='px-4 py-1 text-white my-5 mb-5  bg-green-500 rounded'>Get started -</button>
            </div>
            <div className='bg-cover block md:active: ' style={{backgroundImage:`url(${Images.MainImg})`}}>
                <img className='sm:hidden bg-cover'  src={Images.MainImg} alt="" />
            </div>
        </div>
    </div>
  )
}
