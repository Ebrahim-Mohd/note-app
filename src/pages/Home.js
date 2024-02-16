import NoteDetails from "../components/NoteDetails"
import Navbar from '../components/Navbar'

const Home = ({collect, setCollect}) => {
    const handleDelete = (deletedNote) => {
        
        const updatedCollect = collect.filter(
            (note) => !(note.title === deletedNote.title && note.note === deletedNote.note)
        );

        setCollect(updatedCollect);
    };
    return (
        <div>
            <Navbar/>
            <div className="container home">
                {collect.length>0 ? (
                    collect.map((note, index)=>(
                    <NoteDetails key={index} title={note.title} note={note.note} index={index} onDelete={handleDelete}/>)))
                    :
                    (<p className="no-saved">No notes saved</p>)}
            </div>
        </div>
    )
}

export default Home