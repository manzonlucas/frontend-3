import styles from "../styles/header.module.css"
import { Link, Outlet } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header className={styles.header}>Rick and Morty characters</header>
    </>
  )
}
export default Header;