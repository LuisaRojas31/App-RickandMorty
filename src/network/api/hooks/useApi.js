import { useState } from 'react';
import { useFetch } from 'use-http';
import { baseUrl } from '../../../config/constants';

export const useApi = () => {
    const { get, response, loading, error } = useFetch(baseUrl);
    const [characters, setCharacters] = useState(null);

    const doGet = async (route) => {
        const initialCharacter = await get(route);
        if (response.ok) setCharacters(initialCharacter)
    }

    return {
        action: doGet,
        loading,
        error,
        characters
    }
}