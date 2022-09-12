import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/main.css';

export default function Main() {
  return (
    <div className={styles.content}>
      <h1>Main</h1>
      <ul>
        <li><Link to={'/main/blog'}>Blog</Link></li>
        <li><Link to={'/main/vlog'}>Vlog</Link></li>
      </ul>

      <Outlet />
    </div>
  )
}