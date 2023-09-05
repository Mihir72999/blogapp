import Link from "next/link";
import Button from "./Component/Button";






export default  function Home() {
  return (
    <main className="flex-col items-center flex justify-center my-10">
   
       <h2 className="my-10">  hello welcome to my blog app</h2>
 
       <Button variant={'outline'}><Link href={'/blog'}>checkout blog </Link></Button>
    </main>
  )
}
