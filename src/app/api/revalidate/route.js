import { revalidatePath } from "next/cache"
import { NextResponse  , NextRequest} from "next/server"
export async function GET(req = NextRequest ,res) {
   const secret = req.nextUrl.searchParams.get('secret')
   if(secret !== process.env.SECRET_TOKEN){
    return new NextResponse('invalide token' ,{status:401 , statusText:'unknown',
    headers:{
        'Content-Type':'application/json'
    }})
   }
   const path = req.nextUrl.searchParams.get('path') || '/'
  revalidatePath(path)
    return  NextResponse.json({revalidate:true})
  }