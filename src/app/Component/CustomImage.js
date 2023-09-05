'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

const CustomImage = ({src ,alt , priority}) => {
  const prioty = priority ? true : false
let content;
  content = (
    <div className='flex justify-center bg-pink-500'>
      <Image
      src={src}    
      alt={alt}
      height={650}
      width={650}
      className='my-8'
      priority={prioty}
      />
    </div>)
useEffect(()=>{
const timeout = setTimeout(()=>content  , 2000)
return ()=>clearTimeout(timeout)
},[content])

  return content
}

export default CustomImage