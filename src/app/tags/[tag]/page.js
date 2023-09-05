
import ListItem from '@/app/Component/ListItem'
import { getPostMet } from '@/lib/post'
import Link from 'next/link'
import React from 'react'
export const revalidation = 60
export async function generateStaticParams(){
    const posts = await getPostMet()
    if(!posts) return []
    const tags = new Set(posts.map(post =>post.tags).flat())
  
  return Array.from(tags).map(tag=>({tag}))
}

export async function generateMetadata({params:{tag}}){
  return{
    title:`Post about ${tag}`
  }
}

const TagePosts = async({params:{tag}}) => {
  const posts = await getPostMet()
  if(!posts) return <p className='mt-10 text-center'>sorry , no post available</p>
    const tagPosts = posts.filter(post => post.tags.includes(tag))
    if(!tagPosts) {
        return (<>
            <div className='text-center'>sorry no post for that tags</div>
            <Link href='/'>go back home</Link></>
        )
    }
  return (
    <div>
        <h2 className='text-3xl ml-4 mb-0'>Result for #{tag}</h2>
        <section className='mt-6 mx-auto max-w-2xl'>
         <ul className='w-full list-none p-0'>
            {tagPosts.map(tag=>(
                 <ListItem key={tag.id} posts={tag} tag={'tag'}/>
            ))}
         </ul>
        </section>
    </div>
  )
}

export default TagePosts    