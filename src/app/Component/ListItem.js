import Link from "next/link"



const ListItem = ({posts , tag} ) => {
    
const {id , title , date} = posts
const navigate = (tag) =>{
  switch(tag){
   case"blog":
     return `blogs/${id}`
    case"tag": 
     return `\/blogs/${id}`
    default :
      return '/'
  }
}

    return (
   <li className="border-2 px-3 py-2 mt-3 bg-black text-white border-black text-xl lg:text-2xl dark:text-white">
    <Link href={`${navigate(tag)}`} className='underline hover:text-blue-300/70'>
     
     {title}
    
    </Link>
    <br />
    <p className="text-sm mt-1">{date}</p>
   </li>
  )
}

export default ListItem