import React from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"


function App(){
    const [feedback,setFeedback]=useState(FeedbackData)
    const deleteFeedback=(id)=>{   //here b/c in app js we have the main component as feedback 
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }
  return (
    <>
    <Header/>
    <div className="container">
        <FeedbackStats feedback={feedback }/> {/*feedback is a state so whenever it changes it will automatically updated to statscomponents*/}
        <FeedbackList feedback={feedback} 
        handleDelete={deleteFeedback}  //passing handledelete and catching in the feedbacklist
        />

    </div>
    </>
  )
}

export default App