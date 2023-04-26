import React from 'react'
import { showFormattedDate } from '../utils';
import style from '../styles/card.module.css';
import Button from './Button';

const Card = ({id, title, createdAt, body, archived, action }) => {

  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <article id={id} className={style.card}>
      <div className={style.content}>
        <h4 className={style.header}>{title}</h4>
        <smal className={style.date}>{showFormattedDate(createdAt)}</smal>
        <p className={style.text}>
          {body}
        </p>
      </div>
      <div className={style.footer}>
        <Button eventHandler={() => toggleArchive(id)} label={archived ? "Aktifkan" : "Arsipkan"} />
        <Button eventHandler={() => deleteNote(id)} label='Hapus' />
      </div>
    </article>
  )
}

export default Card