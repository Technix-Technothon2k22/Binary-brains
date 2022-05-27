import React from 'react'
import {IoDocumentTextSharp} from "react-icons/io5"

import style from './Header.module.scss'

// import style from "../../styles/Footer.module.scss"
function Header() {
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={style.flex}>
            <h1>docbox</h1>
        </div>
        <div>
            <button className={style.btn}>Sigup</button>
            <button className={style.btn}>signIn</button>
        </div>

      </div>
    </div>
  )
}

export default Header