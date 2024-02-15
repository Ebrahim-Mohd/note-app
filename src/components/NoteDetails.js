import { Link } from "react-router-dom";

const NoteDetails=({title,note,index})=>{
    const truncatedNote = note.substring(0, 20);
    return(
        <Link to={`/edit/${index}`} className="note-details link">
            <div>
                <h3 className='fs-secondary-heading'>{title}</h3>
                {truncatedNote.length<15 && <p>{truncatedNote}</p>}
                {truncatedNote.length>14 && <p>{truncatedNote}...</p>}
            </div>
            <p>Edit</p>
        </Link>
    )
}

export default NoteDetails;