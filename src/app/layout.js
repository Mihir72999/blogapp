
import Navbar from './Component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title:{
    default:'blogapp',
    template:`blogapp | %s`
  } ,
  description: 'Generated next blog app'
}

const inter = Inter({subsets:['latin-ext']})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
  
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
