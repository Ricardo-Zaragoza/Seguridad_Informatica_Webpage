import Link from 'next/link';
import styles from './NavBar.module.css'
const NavBar = () => {
 return (
    <nav className={styles.NavBar}>
        <div className={styles.logo}>
            <img src="/logo.jpg"></img>
        </div>
        <div className={styles.links}>
            <img src="/contacto.png" className={styles.contacto}></img>
            <Link href='/signup' className={styles.link}>
                Registro        
            </Link>
            <Link href='/login' className={styles.link}>
                Iniciar Sesion            
            </Link>
        </div>
    </nav>
 );
};
export default NavBar;