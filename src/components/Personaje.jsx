import React from 'react'

export const Personaje = (props) => {


    console.log(props)

    /*Desestructurar las propiedades */
    const {characters}= props
    console.log(characters)

  return (
    <div className='characters'>
        <h2>Personajes</h2>

        <span className='back-home'>Volver al home</span>
        
        <div className='container-characters'>
           {characters.map((character, index) => (
            <div className='character-container' key={index}>
                <div>
                    <img src={character.image} alt={character.name} />
                </div>

                <div>

                    <h3>{character.name}</h3>
                    <h6>
                        {character.status ===  'Alive' ? (
                            <>
                            <span className='alive'/> Vivo
                            </>
                        ): (
                            <>
                            <span className='dead'/> Muerto
                            </>
                        )}
                    </h6>
                    <p>
                        <span className='text-grey'>Epidos</span>
                        <span>{character.episode.length}</span>
                    </p>
                    <p>
                        <span className='text-grey'>Especie</span>
                        <span>{character.especies}</span>
                    </p>
                </div>
                

            </div>
           ))}
        </div>
    </div>
  )
}
