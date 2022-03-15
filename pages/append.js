import React,{useEffect} from 'react'
import $ from 'jquery'
export default function Append() {
    // useEffect(()=>{
    // $('#append').append('<p>lorem</p>')
    // $('#append').prepend('<p>lorem2</p>')
    // $('#append').before('<p>lorem3</p>')
    // $('#append').after('<p>lorem4</p>')
    // $('<p>lorem5</p>').appendTo('#append')
    // $('<p>lorem6</p>').prependTo('#append')
    // $('<p></p>',{
    //     text:'lorem7',
    //     class:'bg-red-500'
    // }).prependTo('#append')
    // },[])
    useEffect(()=>{
        $('#hide').click(()=>{
            $('#append').hide()
        })
        // $('#remove').click(()=>{
        //     $('div').remove('#append2')
        // })
        $('#remove').click(()=>{
            $("p:contains('to')").remove()
        })
        $('#empty').click(()=>{
            $('#append2').empty('')
        })
    },[])
  return (
      <>
    {/* <div id='append'>append</div> */}
    <div id='append2'>
        <p>hello to</p>
        <p>hello too</p>
        <p>hello t</p>
    </div>
    <button id="hide">hide</button>
    <br></br>
    <button id="remove">remove</button>
    <br></br>
    <button id="empty">empty</button>
    </>
  )
}
