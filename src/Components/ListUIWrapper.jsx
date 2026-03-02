import styles from './ListUIWrapper.module.css'

export const ListUIWrapper = ({children}) => {

    return (
        <ul className={styles.listUIWrapper}>
            {children}
        </ul>
    )
}