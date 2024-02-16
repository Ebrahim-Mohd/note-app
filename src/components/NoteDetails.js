import { Link } from "react-router-dom";

const NoteDetails=({title,note,index,onDelete})=>{
    const truncatedNote = note.substring(0, 20);
    const truncatedTitle = title.substring(0,9);
    const handleDelete = () => {
        onDelete({ title, note });
    };
    return(
        <div className="note-details">
            <div className="note-link">
                <Link to={`/edit/${index}`} className="link">
                    {truncatedTitle.length<9 && <h3 className='fs-secondary-heading'>{truncatedTitle}</h3>}
                    {truncatedTitle.length>8 && <h3 className='fs-secondary-heading'>{truncatedTitle}...</h3>}
                    {truncatedNote.length<20 && <p>{truncatedNote}</p>}
                    {truncatedNote.length>19 && <p>{truncatedNote}...</p>}
                </Link>
            </div>
            <div className='edit-delete'>
                <Link to={`/edit/${index}`} className="link"><button className="btn">Edit</button></Link>
                <button onClick={handleDelete} className="btn">Delete</button>
            </div>
        </div>
    )
}

export default NoteDetails;