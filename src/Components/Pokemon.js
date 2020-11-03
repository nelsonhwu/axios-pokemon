import React from 'react';

const Pokemon = props => {
    const { pokemon } = props
    return (
        <div>
        {
            pokemon.map( name => 
                <li>{name}</li>
            )
        }
        </div>
    )
}

export default Pokemon;