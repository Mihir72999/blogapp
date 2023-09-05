
import CustomImage from "@/app/Component/CustomImage"
import { Video } from "@/app/Component/Video"
import { compileMDX } from "next-mdx-remote/rsc"
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib"
import rehypeHighlight from "rehype-highlight/lib"
import rehypeSlug from "rehype-slug"

export async function findPostByName(file){
   const data =await fetch(`https://raw.githubusercontent.com/Mihir72999/test-blogpost/main/${file}`,
   {headers:{
    Accept:'application/vnd.github+json',
            Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,
            'X-Github-Api-Version' :'2022-11-28'
   }}
   )
   
   if(!data.ok) return undefined
   const rowMDX = await data.text()

   if(rowMDX === '404 : Not Found') return undefined
 const {content , frontmatter} = await compileMDX({
    source: rowMDX,
    components:{
        CustomImage,
        Video,
       
    },
    options:{
        parseFrontmatter:true ,
        
        mdxOptions:{
            
            
            rehypePlugins:[
                rehypeHighlight ,
                rehypeSlug,
                [rehypeAutolinkHeadings , {
                    behavior:'wrap'
                   }],
            ],
            format:'mdx'
        },
    }
 })
const id = file.replace(/.\mdx/ , '')
const blogPost = {meta:{id ,
     title:frontmatter.title ,
     date:frontmatter.date ,
     tags:frontmatter.tags
    } , content}
    

    return blogPost
}


export async function getPostMet(){
    const res = await fetch('https://api.github.com/repos/Mihir72999/test-blogpost/git/trees/main?recursive=1',
    {
        headers:{
            Accept:'application/vnd.github+json',
            Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,
             'X-Github-Api-Version' :'2022-11-28'
            
        }
    }   
    )
    if(!res.ok) return undefined
    const repoFileTree = await res.json()
   
    const fileArray = repoFileTree.tree.map(obj =>obj.path).filter(repo=>repo.endsWith('.mdx'))
    const posts = []
    for (const file of fileArray){
         const data = await findPostByName(file)
        if(data){
        const {meta} = data
        posts.push(meta)
       }else{
           posts.push([])
        }
     }
    return posts
}


