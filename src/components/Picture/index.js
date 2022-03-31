import styled from 'styled-components';

export const Picture = styled.img`
    margin: 5px;
    width: 150px;
    height: 150px;
    border-radius: 6px;
    :nth-child(2n) {
        opacity: 0.5;
    }
`;
