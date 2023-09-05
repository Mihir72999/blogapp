import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'
const classVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium text-white ',
    {
    variants:{  
        variant:{
         default:'bg-slate-900 hover:bg-slate-500 dark:bg-slate-100 dark:text-slate-900',
         outline:'bg-transparent border border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 '            
        },
        size:{
            default:'h-10 py-2 px-4',
            small:'h-8 px-2 rounded-md'
        }
    },
    defaultVariants:{
        variant:'default',
        size:'default'
    }
})   

const Button = ({ className ,size , variant, ...props   } ) => {
    
  return <button className={cn(classVariants({className ,size , variant}))} {...props} />
}
export {classVariants}
export default Button