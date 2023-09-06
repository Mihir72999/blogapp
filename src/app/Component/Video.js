'use client'
import React, { useEffect } from 'react'


export const Video = ({id}) => {
  let content;
  content=(
    <div className='flex justify-center w-[100%] my-10'>

        <iframe
        className='lg:w-[80%] w-[100%] h-[250px]'
         src={`https://www.youtube.com/embed/${id}`}
         title='youtube player'
         allow='gyroscope; autoplay; clipboard-write;  picture-in-picture; web-share'        
        />
    </div>

)
useEffect(()=>{
  const timeout = setTimeout(()=>content,2000)
    return ()=>clearTimeout(timeout)

  },[content])
  return content
}
