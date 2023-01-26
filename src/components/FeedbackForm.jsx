import React from 'react'
import { useState } from 'react' //for form each input we can states 
import Card from './shared/Card'
import Button from './shared/Button'



function FeedbackForm() {

//enterting validation in the form
const [btnDisabled,setBtnDisabled]=useState(true)
const [message,setMessage]=useState('')


    const [text,setText]=useState('')
    const handleTextChange=(e)=>{
        //valiation check here 
        if(text==''){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text!==''&&text.trim().length<=10){
            setMessage('text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className='input-group'>
                <input onChange={handleTextChange}  type='text' placeholder='write a review' value={text}/>
                <Button isDisabled={btnDisabled}  type='submit'>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm