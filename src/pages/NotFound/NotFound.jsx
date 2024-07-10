import styles from '../NotFound/NotFound.module.css';

function NotFound() {
    return <div className={styles.body}>
        <div className={styles.noise}></div>
        <div className={styles.overlay}></div>
        <div className={styles.terminal}>
            <h1 className={styles.error}>Error <span class={styles.errorcode}>404</span></h1>
            <p className={styles.output}>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            <p className={styles.output}>Please try to <a className={styles.return} href="/">return to the homepage</a>.</p>
            <p className={styles.output}>Good luck.</p>
        </div>
    </div>
}

export default NotFound