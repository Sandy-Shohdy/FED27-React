import styles from './Button.module.css';

// if you define multiple components in the same file, define them as siblings to each other, in the top level.
export const ButtonChildComponent = () => {
    return <span>Button Child Component</span>;
}

export const Button = () => {
    // dont define a component inside another component
    return <button className={styles.button}>Click</button>;
}