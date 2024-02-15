import { useState } from "react"

const Create=({collect, setCollect})=>{
    const [note, setNote] = useState('')
    const [title, setTitle] = useState('')
    const handleClick=(title,note)=>{
        setCollect([...collect, { title, note }]);
    }
    return(
        <div>
            <label>Title:</label>
            <input 
            type="text" 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}/>
            <textarea 
            onChange={(e)=> setNote(e.target.value)} 
            value={note}></textarea>
            <button onClick={()=>handleClick(title,note)}>Save</button>
        </div>
    )
}

export default Create