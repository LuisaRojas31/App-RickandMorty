import React, { useEffect, useState } from "react";
import Character from "../../components/Character";
import InputColor from "../../components/InputColor";
import { defaultColor } from "../../components/InputColor/constants";
import Navigation from "../../components/Nav";
import Spinner from "../../components/Spinner";
import { useApi } from "../../network/api/hooks/useApi";
import './styles.scss';

const RickAndMorty = () =>{
    const { action, loading, error, characters } = useApi();
    const [containerListColor, setContainerListColor] = useState(defaultColor);
    const [page, setPage] = useState(1);
    
    useEffect(()=>{
        action(`/character?page=${page}`);
    }, [page])

    useEffect(() => {
        if(error){
            alert(error);
        }
    }, [error])

    const handleColorChange = (color) => {
        const { hex } = color;
        setContainerListColor(hex);
    }

    return(
        <section className="characteres">
            <div className="characteres__header">
                <InputColor onChange={handleColorChange} color={containerListColor} />
                <Navigation 
                    onNextPage={() => setPage(page < characters.info.pages ? page + 1 : page)} 
                    onPreviousPage={() => setPage(page > 1 ? page - 1 : page)} 
                    page={page} />
            </div>
            {!loading && <Character characters={characters} backgroundColor={containerListColor} />}
            {loading && <Spinner />}
        </section>
    )
}

export default RickAndMorty;