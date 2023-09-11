'use client'
import { FaRegUserCircle} from "react-icons/fa";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import {signOut} from 'next-auth/react'
import Link from "next/link";
import { classVariants } from "@/app/Component/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";


const  NavbarMenu  = [
    {name:'Dashboard' , href:'/' , active:true} ,
    {name:'Team' , href:'/' ,active:false} ,
    {name:'Projects' , href:'' , active:false} ,
    {name:'Celenders' , href:'/' , active:false} ,

]

export default function Navbar(){ 
const [session , setSession] =useState({})
const [isMenu , setIsMenu] = useState(false)
const [account, setAccount] = useState(false)  
const [data , setData] = useState(NavbarMenu)
async function user(){
 const  user = await getSession()
setSession(user?.user)
}
const handleChage = (name)=>{
    const index = NavbarMenu.map((menu)=>{
        return {
            ...menu ,
            active: menu.name === name.name
        }
    })
    setData(index)
}

useEffect(()=>{
    user()
},[session?.name])
function classes (...classes){
    return classes.filter(Boolean).join(' ')
}

const users = (
  session && session?.image ? <Image src={session?.image}
    className=" cursor-pointer rounded-full "
    alt="" height={45} width={45}/>
    : <FaRegUserCircle fill="#fff" size={35}/>
)
const link =(
<Link href='/signin' className={cn(classVariants({variant:'default'}),'hidden lg:inline-block lg:mx-48 text-xl')}>signIn</Link>

)

return(
    <>
    <div className="flex lg:justify-between  justify-start  w-full lg:items-center item-start  lg:text-xl text-x bg-gray-800 text-zinc-100">
   <div className="hidden  lg:flex list-none  lg:mx-28 mx-2 my-2">
    
       {data.map((menu)=>(
           <li onClick={()=>handleChage(menu)} className={ `${menu.active ? 'text-white': 'cursor-pointer text-zinc-300'} hover:bg-slate-600  hover:rounded-md my-2 px-4  py-2`} key={menu.name}>{menu.name}</li>
       ))}
   </div>
   <div onClick={()=>setIsMenu(prev=>!prev)} className="lg:hidden  mx-2 my-4 inline ">
      {isMenu ? 
       <AiOutlineClose size={22} fill="#fff"/>
       :
       <AiOutlineMenu  size={22} fill="#fff"/>
       }
       </div>
   <div className={classes( isMenu ? 'flex' : 'hidden' ,` lg:hidden w-full flex-col list-none gap-2 px-1 py-2`)}>
      <div>
       {data.map(menu =>(
           <li className="hover:bg-slate-600 hover:border  hover:rounded-md py-3  px-4" key={menu.name}>{menu.name}</li>
           ))}</div>
   
           <hr className="text-white w-full px-3 " />
           {session && session ? (<div>
         <div className="my-3 flex"><div className="mx-2">{users} </div>
           {session &&<span className="flex flex-col ">
            <sub className="my-2 mx-3">{session?.name}</sub>
            <sub className="my-2 mx-3">{session?.email}</sub>
            </span>}
             </div>
            <div onClick={()=>signOut()} className="mx-4 my-2 ">signOut</div>
            </div>)
           :
           <div>
           <Link href='/signin' className={cn(classVariants({variant:'default'}),'lg:hidden my-2 inline-block lg:mx-48 text-xl')}>signIn</Link>
   
           </div> 
           }
   </div>
   
   {session && session ?
   (<div onClick={()=>setAccount(prev=>!prev)} className=" lg:flex hidden items-center lg:mx-48 mx-2  ">
      {users}
   </div>) : link }
    </div> 
    <div className={classes(account ? 'lg:flex' : 'lg:hidden', 'hidden absolute border bg-white rounded-md hover:cursor-pointer right-[130px]  gap-2 flex-col px-12 py-3 list-none')}>
    {session && <> 
    <sup className="mt-4">{session?.name}</sup> 
    <sub className="mb-2">{session?.email}</sub>
    </>}
      <hr/>
    <li onClick={()=>signOut()}>signOut</li>
        </div>    
    </>      
)

}
