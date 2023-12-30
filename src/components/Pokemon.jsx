const Pokemon = () => {
    const RandomPokemon = Math.floor(Math.random() * 151) + 1
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${RandomPokemon}.png`
    return (
        <div>
            <h1 className="Pokemon">
                Pokemon number # {RandomPokemon}
            </h1>
            <img src={url} alt="Pokemon"></img>
        </div>

    )
}

export default Pokemon 