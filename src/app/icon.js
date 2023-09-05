
import { ImageResponse } from "next/server"

export const size = {
    width:35,
    height:35
}

export const alt = 'MS icon'

export const contentType = 'image/png'

export default function  icon() {
    
    return new ImageResponse(
       (<div
        style={{
            fontSize:24,
            width:'100%',
            height:'100%',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            color:'black',  
            background:'white'
        }}
        >
           Ms 
        </div>),size
    )
}