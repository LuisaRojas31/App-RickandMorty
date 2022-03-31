import styled from 'styled-components';

export const Containerlist = styled.div`
    background-color: ${({ color }) => color ?? '#111'};
    margin: 0 30px 0 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: strech;
    justify-content: center;
    border-radius: 6px;
    box-sizing: border-box;
`;