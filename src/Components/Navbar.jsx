import React from 'react'
import style from '../styles/navbar.module.css'
import Input from './Input'

const Navbar = ({search, updateQuery}) => {
  return (
    <nav className={style.navbar}>
      <div className={style.wrapper}>
        <h3 className={style.brand}>Apriana Notes</h3>

        <Input  value={search} onChange={updateQuery} type='search' id='search_note' name='search_note' placeholder='Temukan Catatan ...' className={style.input} />
      </div>
    </nav>
  )
}

export default Navbar