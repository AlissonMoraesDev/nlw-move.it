import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/alissonmoraesdev.png" alt="Alisson Moraes"/>
            <div>
                <strong>Alisson Moraes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1    
                </p>
            </div>
        </div>
    );
}