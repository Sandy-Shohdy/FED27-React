import {createContext, useState} from 'react';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);

    return (
        <CharacterContext.Provider value={{ characters, setCharacters }}>
            {children}
        </CharacterContext.Provider>
    )
}