import NoteDetails from "../components/NoteDetails"

const Home = ({collect}) => {
    console.log("Collect in Home:", collect);
    return (
        <div>
            <h3>Home</h3>
            {collect.length>0 ? (
                collect.map((note, index)=>(
                <NoteDetails key={index} title={note.title} note={note.note}/>)))
                :
                (<p>No notes saved</p>)}
        </div>
    )
}

export default Home