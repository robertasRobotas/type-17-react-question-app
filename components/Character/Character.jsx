import styles from "./character.module.css";

const Character = ({ imgUrl, name }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{name}</h1>
      <img src={imgUrl} />
    </div>
  );
};

export default Character;
