import { useEffect, useState } from 'react';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (isLoading) {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((dog) => {
          setImageUrl(dog.message);
          setIsLoading(false);
        })
    }
  }, [isLoading])

  function perroRandom() {
    setIsLoading(true);
  }

  if (isLoading) {
    return (
      <div>
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div>
      <img src={imageUrl} alt="Imagen de un perrito random" />
      <button onClick={perroRandom}>Nuevo doggo</button>
    </div>
  )
}
