import React from 'react';
import './styles.scss';

const Navigation = ({page, onPreviousPage, onNextPage}) => {
    return(
        <nav className="navigation">
            <a onClick={onPreviousPage}><span>Anterior</span></a>
            <span>{page}</span>
            <a onClick={onNextPage}><span>Siguiente</span></a>
        </nav>
    )
}

export default Navigation;