import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = ({ collect, setCollect }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (!title.trim() || !note.trim()) {
            setError('Title and note cannot be empty');
            return;
        }

        const newNote = { title, note };

        setCollect([...collect, newNote]);
        localStorage.setItem('notes', JSON.stringify([...collect, newNote]));

        setTitle('');
        setNote('');
        setError('');
        window.location.href = '/';
    };

    return (
        <section className='padding-block-600'>
            <div className='container'>
                <div className='create-note'>
                    <input
                        type="text"
                        placeholder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <div className='note-section'>
                        <textarea
                            placeholder='Note'
                            onChange={(e) => setNote(e.target.value)}
                            value={note}>
                        </textarea>
                    </div>
                    {error && <p className='error'>{error}</p>}
                    <div className='back-save-btns'>
                            <Link to="/" className='link'><button className='back-btn'>Back</button></Link>
                            <button className='save-button' onClick={handleClick}>Save Changes</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Create;
