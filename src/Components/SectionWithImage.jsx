import styles from './SectionWithImage.module.css';

// SectionWithImage is a component that takes the title, text, imageSrc, and imagePosition as props
// and displays the image and text in the appropriate position
export function SectionWithImage({ title, text, imageSrc, imagePosition }) {
  return (
    <div>
      <h1>{title}</h1>
      {/* This is an alternative solution to using the ternary below */}
      <div
        className={
          imagePosition === 'left'
            ? `${styles.imageLeft}`
            : `${styles.imageRight}`
        }
      >
        <img src={imageSrc} alt={title} />
        <p>{text}</p>

        {/* Alternative solution to the above code */}
        {imagePosition === 'left' ? (
          <>
            <img src={imageSrc} alt={title} />
            <p>{text}</p>
          </>
        ) : (
          <>
            <p>{text}</p>
            <img src={imageSrc} alt={title} />
          </>
        )}
      </div>
    </div>
  );
}
