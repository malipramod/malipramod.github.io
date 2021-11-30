import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faMobileAlt, faLink, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import styles from './styles/profile.module.scss';

interface ProfilePros {
    email: string;
    mobile: string;
}
const Profile = ({ email, mobile }: ProfilePros) => {
    return (
        <div className={styles.profileCard}>
            <span className={styles.after}></span>
            <img className={styles.image} src="/admin.jpeg" alt="Profile image" width={100} height={100} />
            <div className={styles.info}>
                <h2>Pramod Mali</h2>
                <strong>Frontend Engineer</strong>
                <div className={styles.contact}>
                    <a className={`${styles.icons} ${styles.slidIn} ${styles.left}`} href="https://github.com/malipramod" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faCodeBranch} />
                    </a>
                    <a className={styles.icons} href={`mailto:${email}`} rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                    </a>
                    <a className={styles.icons} href={`tell:${mobile}`} rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faMobileAlt} />
                    </a>
                    <a className={`${styles.icons} ${styles.slidIn}  ${styles.right}`} href="https://www.linkedin.com/in/malipramod/" rel="noopener noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                </div>
            </div>
            <div className={styles.more} >Know more</div>
            <button className={styles.button}>Copy contact details</button>
            <span className={styles.before}></span>
        </div>
    )
}

export default Profile