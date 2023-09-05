
import { ImageResponse } from "next/server"

export const size = {
    width:35,
    height:35
}

export const contentType = 'image/png'

export const alt = 'Ms icon'

export default function  icon() {
    
    return new ImageResponse(
       (<div
        style={{
            fontSize:25,
            width:'100%',
            height:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            color:'red',  
            background:'white'
        }}
        >
           Ms 
        </div>),size
    )
}