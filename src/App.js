import React from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid' //so to generate a new id call uuidv4 as a function 


function App(){
    const [feedback,setFeedback]=useState(FeedbackData)

    //adding new feedback
    const addFeedback=(newFeedback)=>{  
      newFeedback.id=uuidv4()  //adding id for each additional feedback
      setFeedback([newFeedback,...feedback]) //to make a copy . to get all the current feedbackalready there using spread operator... in addition putting new feedback. here all the current feedback and new one are on this array
      console.log(newFeedback) 
    }
    const deleteFeedback=(id)=>{   //here b/c in app js we have the main component as feedback 
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }
  return (
    <>
    <Header/>
    <div className="container">
        <FeedbackForm handleAdd={addFeedback} /> {/* adding feedback  handleadd pass in as prop in feedbackfrom*/}
        <FeedbackStats feedback={feedback }/> {/*feedback is a state so whenever it changes it will automatically updated to statscomponents*/}
        <FeedbackList feedback={feedback} 
        handleDelete={deleteFeedback}  //passing handledelete and catching in the feedbacklist
        />

    </div>
    </>
  )
}

export default App