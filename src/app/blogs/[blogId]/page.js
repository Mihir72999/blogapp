import { findPostByName, getPostMet } from '@/lib/post'
import Link from 'next/link'
import  {notFound} from 'next/navigation'
import React from 'react'
import 'highlight.js/styles/an-old-hope.css'


export const revalidate = 0
export default async function Blogs({ params:{blogId} }){
   
    const post = await findPostByName(`${blogId}.mdx`)
   if(!post) return notFound()   
   const {meta , content} = post

const tags = meta.tags.map((tag,i)=>(
<Link key={i} href={`/tags/${tag}`} >{tag}</Link>
))
  return (
      <div className='m-auto py-11 lg:px-14 mt-6 px-4 bg-slate-600 lg:max-w-[50%] max-w-[100%] text-white'> 
      <h2 className='lg:text-3xl text-2xl ml-5 mb-5'>{meta?.title.toUpperCase()}</h2>
      <p className='mt-0 text-sm'>{meta.date}</p>
      <article className='flex flex-col gap-3'>
        {content}
      </article>
      <section>
      <h3>Related:</h3>
      <div className='flex flex-row gap-4'>
        {tags}
      </div>
      </section>
      <p className='mb-10 text-green-500 hover:underline'>
        <Link href='/blog'>back to home</Link>
      </p>
      </div>
  )
}
  export async function generateStaticParams(){
      const posts = await getPostMet()

if(!posts) return []
return posts.map((post)=>({
    
    blogId:post.id
}))
}
export async function generateMetadata({ params:{blogId} }) {
    const post = await findPostByName(`${blogId}.mdx`)
    
   if(!post){
    return {
        title:'post not fout'
    }
   }
    return {
        title : post.meta.title
    }
}
