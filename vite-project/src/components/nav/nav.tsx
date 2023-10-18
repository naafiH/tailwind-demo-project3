import React from 'react'
import "../asset/imgs"
import { Images } from '../asset/imgs'

export default function nav() {
  return (
    <div className='flex justify-between items-center px-10 my-2 max-w-[1240px] mx-auto'>
        <img className='w-[80px]' src={Images.Logo} alt="" />
        <h1 className='text-sm'>Components</h1>
    </div>
  )
}
