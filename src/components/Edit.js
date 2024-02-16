import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
                        <label>Title:</label>
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <div className='note-section'>
                            <label>Note:</label>
                            <textarea
                                onChange={(e) => setNote(e.target.value)}
                                value={note}
                            ></textarea>
                        </div>
                        {error && <p className='error'>{error}</p>}
                        <button className='save-button' onClick={handleEdit}>Save Changes</button>
                </div>
            </div>
        </section>
    );
};

export default Edit;
