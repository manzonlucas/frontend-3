import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import styles from "../styles/detail.module.css"

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams(); //objeto

  useEffect(() => {
    getCharacterById(id).then((response) => {
      setCharacter(response.data)
    })
  }, [id])


  return (
    <>
      <h2 className={styles.name}>{character.name}</h2>
      <div className={styles.dataContainer}>
        <div>
          <h2 className={styles.data}>Status: {character.status}</h2>
          <h2 className={styles.data}>Species: {character.species}</h2>
          <h2 className={styles.data}>Type: {character.type}</h2>
          <h2 className={styles.data}>Gender: {character.gender}</h2>
        </div>
        <img className={styles.image} src={character.image} alt="" />
      </div>
    </>
  )
}

export default CharacterDetail;