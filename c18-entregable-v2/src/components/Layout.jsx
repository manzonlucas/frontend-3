import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header id='mainHeader'>
        <h1>DH Sport Store</h1>
      </header>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/tienda'}>Tienda</Link>
      </nav>
      <Outlet />
    </>
  )
}