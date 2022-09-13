export default function Pokemon({ data }) {

  console.log("data",data)
  return (
    <div className='pokemonCard'>
      <h2>{data.name}</h2>
      {/* <img src={data.sprites.front_default} alt="" /> */}
    </div>
  )
}