import React,{useEffect} from 'react'
import $ from 'jquery'
export default function Parent() {
    useEffect(()=>{
        // var p = $('p').parent().css('border','1px solid red')
        // var p = $('p').parents().css('border','1px solid red')
        // var p = $('p').parents('.py-8').css('border','1px solid red')
        // var p = $('p').parentsUntil('.py-8').css('border','1px solid yellow')
        // var p =$('section').children().css('border','1px solid yellow')
        // var p =$('section').find('p').css('border','1px solid yellow') 
        // var p =$('section').find('*').css('border','1px solid yellow') 
    //    $('section').find($('p:contains("to")')).css('border','1px solid yellow') 
        // $('div:contains("contains")').siblings().css('border','1px solid yellow')
        // $('div:contains("contains")').siblings('.m-0').css('border','1px solid black')
        // $('div:contains("contains")').next('.test').css('border','4px solid black')
        // $('div:contains("contains")').prev().css('border','4px solid black')
        // $('div:contains("contains")').nextAll('.test').css('border','4px solid black')
        // $('div:contains("contains")').nextUntil('.test').css('border','4px solid black')
        // $('div:contains("contains")').prevAll('').css('border','4px solid black')
        // $('.py-8').first().css('border','4px solid black')
        // $('.py-8').last().css('border','4px solid black')
        // $('.py-8').eq(-1).css('border','4px solid black')
        // $('p').filter('.test').css('border','4px solid black')
        $('p').not((osama)=>{return osama===1}).css('border','4px solid black')
        // $('p').filter((osama)=>{return osama===1}).css('border','4px solid black')
        // $('p').not('.test').css('border','4px solid black')
    },[])
  return (
      <section className='py-6 border-4 border-orange-500 border-solid'>
    this is section
    <div className='w-48 py-8 border-2 border-red-900 border-solid'> this is div1</div>
    <div className='w-48 py-8 border-2 border-red-900 border-solid'> this is div2</div>
    <div className='w-48 py-8 border-2 border-red-900 border-solid'> this is div3</div>
    <div className='w-48 py-8 border-2 border-red-900 border-solid'> this is div4 contains</div>
    <p className='m-0 border-2 border-blue-900 border-solid w-fit'> welocme to traversing</p>
    <p className='m-0 border-2 border-blue-900 border-solid w-fit'> welocme to traversing2</p>
    <p className='m-0 border-2 border-blue-900 border-solid w-fit test'> welocme to traversing3</p>
    
    </section>
  )
}
