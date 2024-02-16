import React, { useState } from 'react';

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
                            value={note}>
                        </textarea>
                    </div>
                    {error && <p className='error'>{error}</p>}
                    <button className='save-button' onClick={handleClick}>Save</button>
                </div>
            </div>
        </section>
    );
};

export default Create;
