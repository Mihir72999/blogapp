

import { getPostMet } from "@/lib/post"
import ListItem from "@/app/Component/ListItem"






const Blog = async() =>{
  const post = await getPostMet()
      
    return (
        
    <section className=" mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90"> Blog</h2>
      <ul className="w-full">
        
        {post && post.map(posts=>{   
       return   <ListItem  key={posts.id}  posts={posts} tag={'blog'} />
  
       
        })}
        </ul>  
        
    </section>
  ) 
}
  
    export default Blog