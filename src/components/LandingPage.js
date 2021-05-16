import React, {useState} from "react";
import Axios from 'axios';
import OutPut from "./OutPut";

function LandingPage() {
  const url ="http://localhost:8080/codingasessment/frequencyandsimilarwords"
  const [invalidForm, setInvalidForm] = useState(true);
  const [showOutPut, setShowOutPut] = useState(false);
  const [result, setResult] = useState({
    word:"",
    notebookText:"",
  });
  const [data, setData] = useState({
    word: "",
    notebookText: "",
  })
  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    if(newdata.word && newdata.notebookText){
      setInvalidForm(false) ;
    }
    else {
      setInvalidForm(true) ;
    }
  }
  function onsubmit(e) {
   e.preventDefault();
   Axios.post(url,data)
    .then(res=>{
      console.log(res.data.response)
      setResult(res.data.response)
      setShowOutPut(true)
    })
  }
  return(
    <div>
      <form onSubmit={(event => onsubmit(event))}>
        <label>Enter the word </label>
        <input onChange={(e)=>handle(e)} id="word" value={data.word} type="text"/><br/><br/>
        <label> Enter the NoteBook Text </label>
        <textarea onChange={(e)=>handle(e)} id = "notebookText" value={data.notebookText} type="textarea"/><br/><br/>
        <button disabled={invalidForm}>Submit</button>
      </form>
      {showOutPut ? <OutPut result={result}></OutPut>: null}
    </div>
  );

}
export default LandingPage