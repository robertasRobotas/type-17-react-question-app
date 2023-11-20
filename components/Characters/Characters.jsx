import { useState } from "react";
import styles from "./characters.module.css";
import Character from "../Character/Character";
const Characters = ({ characters }) => {
  return (
    <>
      {characters && (
        <div className={styles.wrapper}>
          {characters.map((character) => {
            return (
              // key turi but id
              <div key={character.id}>
                <Character imgUrl={character.image} name={character.name} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Characters;
