import Link from 'next/link';
import styles from './NavBar.module.css'
const NavBar = () => {
 return (
    <nav className={styles.NavBar}>
        <div className={styles.logo}>
            <img src="/logo.jpg"></img>
        </div>

        <div>
            <h1 className="text-green">USUARIO</h1>
        </div>
        <div className={styles.links}>
            <img src="/contacto.png" className={styles.contacto}></img>
        </div>
    </nav>
 );
};
export default NavBar;