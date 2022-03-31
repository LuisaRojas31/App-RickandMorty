import React from "react";
import { Containerlist } from "../ContainerList";
import { Picture } from "../Picture";

const Character = ({characters, backgroundColor}) => {

    return(
        <Containerlist color={backgroundColor}>
            {characters?.results.map(character => (
                <Picture key={character.id} src={character.image} />
            ))}
        </Containerlist>
    )
}

export default Character;