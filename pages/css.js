import React,{useEffect} from 'react'
import $ from 'jquery'
export default function Css() {
    useEffect(()=>{
      var width = $(window).width();
      
        $('button').click(()=>{
            // $('p:first').removeClass('bg-blue-500')
            // $('p:eq(1)').removeClass('bg-blue-500')
            // $('p:contains("spams")').removeClass('w-24')
            // $('p,button').addClass('bg-red-500 w-24')
            // $('p:eq(1)').toggleClass('bg-blue-500')
            // var color = $('p').css('color')
            // $('input').val(color)
            // $('<span></span>').text(color).appendTo('body')
            // var color = $('input').val()
            // $('p').css({
            //     color: color,
            //     backgroundColor: '#000'
            // })
            // innerWidth()
            // outerWidth(true) true calcalute with margin false calcalute padding and border
            var div =$('#dim')
            console.log(div);
            div.text(div.width('+='+50).width()+'px'+' '+div.height()+'px')
        })
    })
  return (
    <div className = "w-32" id='dim'>
      <input type='text' name='c' />
        <p className='p-8 text-white bg-blue-500 w-28'>lorem spam</p>
        <p className='p-8 bg-blue-500 w-28'>lorem spam</p>
        <p className='p-8 text-white bg-blue-500 w-28'>lorem spams</p>
        <button>click</button>
    </div>
  )
}
