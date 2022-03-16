import React,{useEffect} from 'react'
import $ from 'jquery'
export default function Css() {
    useEffect(()=>{
        $('button').click(()=>{
            // $('p:first').removeClass('bg-blue-500')
            // $('p:eq(1)').removeClass('bg-blue-500')
            // $('p:contains("spams")').removeClass('w-24')
            // $('p,button').addClass('bg-red-500 w-24')
            $('p:eq(1)').toggleClass('bg-blue-500')
        })
    })
  return (
    <div>
        <p className='bg-blue-500 w-24'>lorem spam</p>
        <p className='bg-blue-500 w-24'>lorem spam</p>
        <p className='bg-blue-500 w-24'>lorem spams</p>
        <button>click</button>
    </div>
  )
}
