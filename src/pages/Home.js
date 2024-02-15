import NoteDetails from "../components/NoteDetails"

const Home = ({collect}) => {
    console.log("Collect in Home:", collect);
    return (
        <div className="container home">
            {collect.length>0 ? (
                collect.map((note, index)=>(
                <NoteDetails key={index} title={note.title} note={note.note} index={index}/>)))
                :
                (<p>No notes saved</p>)}
        </div>
    )
}

export default Home