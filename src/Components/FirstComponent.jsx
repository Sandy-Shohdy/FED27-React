import { SecondComponent } from './SecondComponent';
import styles from './FirstComponent.module.css';

// FirstComponent is a parent component that takes the user object as a prop
// and passes age to the SecondComponent component
export function FirstComponent({ user }) {
  return (
    <>
      <h1 className={styles.title}>Hi {user.name}</h1>
      <SecondComponent age={user.age} />
    </>
  );
}
