import styles from './NavBar.module.css'
const NavBar = () => {
 return (
    <nav className={styles.NavBar}>
        <div className={styles.logo}>
            <img src="/logo.jpg"></img>
        </div>
        <div className={styles.links}>
            <img src="/contacto.png" className={styles.contacto}></img>
            <a className={styles.link}> Registro</a>
            <a className={styles.link}> Iniciar Sesion</a>
        </div>
    </nav>
 );
};
export default NavBar;