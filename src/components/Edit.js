import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const Edit = ({ collect, setCollect }) => {
    const { id } = useParams(); 

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const selectedNote = collect[parseInt(id, 10)]; 
        if (selectedNote) {
            setTitle(selectedNote.title);
            setNote(selectedNote.note);
        }
    }, [collect, id]);

    const handleEdit = () => {
        if (!title.trim() || !note.trim()){
            setError('Title and note cannot be empty')
            return;
        }
        const index = parseInt(id, 10);
        if (index >= 0 && index < collect.length) {
            const updatedCollect = [...collect];
            updatedCollect[index] = { title, note };
            setCollect(updatedCollect);
            localStorage.setItem('notes', JSON.stringify(updatedCollect));
            setError('')
            window.location.href = '/';

        } else {
            console.error('Invalid id for editing.');
        }
    };

    return (
        <section className='padding-block-600'>
            <div className='container'>
                <div className='create-note'>
                        <input
                            placeholder='Title'
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <div className='note-section'>
                            <textarea
                                placeholder='Note'
                                onChange={(e) => setNote(e.target.value)}
                                value={note}
                            ></textarea>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <div className='back-save-btns'>
                            <Link to="/" className='link'><button className='back-btn'>Back</button></Link>
                            <button className='save-button' onClick={handleEdit}>Save Changes</button>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Edit;
