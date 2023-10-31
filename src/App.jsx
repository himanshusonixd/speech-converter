import { useState } from 'react'
import './App.css'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

function App() {
  

  const[textTocopy, setTextCopy]=useState();
  const [isCopied, setCopied] = useClipboard(textTocopy);
  //  speech recongnization part 
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  
  function startHandler(){
    SpeechRecognition.startListening({ continuous: true ,language:'en-IN'})
    
  }
  function stopHandler(){
    SpeechRecognition.stopListening()
    
  }
  
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  let ValueInside="click on start listening"
  if(transcript){
    ValueInside=transcript
  }
  

 



  // copy clipboard part 
 

  return (
    <>
    <div className='container'>
    <h1>Speech to text converter</h1>

    <div  className="speechArea" onClick={()=>setTextCopy(transcript)}>
      {/* {transcript} */}
      {ValueInside}
      
    </div>
    <div className='BtnArea'>
    
      <button className='button-36' onClick={startHandler}>Start listening </button>
      <button  className='button-36' onClick={stopHandler}>Stop listening </button>
      <button  className='button-36' onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
    </div>





    </div>
   
    </>
  )
}

export default App
