import React, { useState } from 'react'
import style from '../styles/input-form.module.css'
import Input from './Input';

const InputForm = ( {updateNotes} ) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: content, archived: false, createdAt: timestamp },
    ]);
  };


  return (
    <main className={style.inputForm}>
      <div className={style.wrapper}>
        <h2 className={style.header}>Catatan Baru</h2>
        <form className={style.form} onSubmit={createNote}>
          <small className={style.small}>
            Sisa Karakter: <span className={style.counter}>{50 - title.length}</span>
          </small>
          <Input value={title} onChange={setTitle} type='text' placeholder='Judul Catatan ...' id='title' name='title' required className={style.input} />
          <Input value={content} onChange={setContent} type='textarea' placeholder='Tulis isi catatan ...' id='note' name='note' required className={style.textarea} />
          <button type='submit' id='submit_form' className={style.button} name='submit_form'>Tambah Catatan</button>
        </form>
      </div>
    </main>
  )
}

export default InputForm