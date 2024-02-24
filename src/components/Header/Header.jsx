import Image from "next/image"
import style from "./Header.module.scss"

const Header = () => {
  return (
    <header className={style.header}>
        <div className={`${style.header_container} container`}>
            <a className={style.header_logo} href="#">ITV</a>
            <nav >
              <ul className={style.header_navlist}>
                <li className={style.header_navlink}><a href="/movies" >movies</a></li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header