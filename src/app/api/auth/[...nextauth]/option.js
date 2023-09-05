import GithubProvider  from 'next-auth/providers/github'
import  CredentialsProvider  from 'next-auth/providers/credentials'
import { getServerSession } from 'next-auth'
export const option = {
    pages:{
        signIn:'/signin'
      },    
    providers:[
    
    GithubProvider({
    clientId:process.env.GITHUB_ID,
    clientSecret:process.env.GITHUB_SECRET
}),
CredentialsProvider({
    name:'credentials',
     credentials:{
       
         username:{
             label:'Username:',
             type:'text',
             placeholder:'your username',
             autocomplete:'current-username'
         },
         email:{
            label:'Email:',
            type:'email',
            placeholder:'enter your email' ,
            autocomplete : 'current-email'
        },
         password:{
             label:'Password:',
             type:'password',
             placeholder:'enter your password' ,
             autocomplete : 'current-password'
         },
     },  
    async authorize(credentails , req){
        
    console.log('credential' , credentails)
        const user =  {id:"42" , name:"mihir72999" , password:"mihir72999" , image:'https://avatars.githubusercontent.com/u/111626217?v=4' , email:credentails?.email}
        if(!credentails.password || !credentails.email || !credentails.password){
            console.log('invalid credentials')
        }
        if(credentails?.username === user.name && credentails?.password === user.password){
            return user
        }
    }
}),

],
secret:process.env.NEXTAUTH_SECRET,
session:{
    strategy:'jwt',
},
callbacks:{
    async session({token, session}){
        if(token){  
            session.user.name = token?.name 
            session.user.id = token?.id 
            session.user.email = token?.email
            session.user.image = token?.picture
           }
        return session
    },
    
    redirect(){
        return '/'
    }
}

} 

export const getSession = () => getServerSession(option)
