import React,{useState,useEffect} from 'react'
import $ from 'jquery'
export default function Jquery() {
    useEffect(()=>{
        // $('#test').animate({
        //     // width: 'toggle',
        //     height:'+=100px',top:'100px',opacity:'0.5',borderRadius:'50%'}
        //     ,2000,()=>{$('span').fadeOut(2000)})
        // $('#test').animate({
        //     left:'100px'}
        //     ,2000)
        // $('#test').animate({
        //     left:'0px'}
        //     ,2000)
        // $('#test').animate({
        //     top:'100px'}
        //     ,2000)
        // $('button').click(()=>{
        //     $('#test').stop(false,true)
        // })
        var div = $('#test')
        div
        .slideUp(2000)
        .slideDown(2000)
        .fadeOut(2000)
        .fadeIn(2000)
    },[])
  return (
      <section>
    <div className="bg-red-500 relative" id="test">jquery</div>
    <p>animate</p>
    <span className="text-cyan-700">effect</span>
    <button>stop</button>
    </section>
  )
}
