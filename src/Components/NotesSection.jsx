import React from 'react'
import style from '../styles/notes-section.module.css'
import Card from './Card'

const NotesSection = ({ label, notes, setNotes }) => {
  return (
    <main className={style.root}>
      <div className={style.wrapper}>
        <h3 className={style.header}>{label}</h3>
        <main className={style.noteslist}>
        {
          notes.length === 0 ? (
            <h4 className={style.empty}>Tidak ada catatan</h4>
          ) : (
            <>
              {
                notes?.map((note) => (
                  <Card key={note.id} action={setNotes} {...note} />
                ))
              }
            </>
          )
        }
        </main>
      </div>
    </main>
  )
}

export default NotesSection