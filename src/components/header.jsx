import styles from '../styles/css/header.module.css';
import logo from '../assets/pokemon-logo.png';

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo}></img>
        </div>
    )
}