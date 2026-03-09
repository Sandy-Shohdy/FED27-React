import {createContext, useEffect, useState} from "react";

export const ThemesContext = createContext();

export const ThemesProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") === 'darkTheme' ? 'darkTheme' : 'lightTheme');

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemesContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemesContext.Provider>
    )
}

// defining the context
// import {createContext, useState} from "react";
//
// export const NAMEContext = createContext();
//
// export const NAMEProvider = ({ children }) => {
//     const [VALUE, SETVALUE] = useState(INTIIAL_STATE);
//
//     return (
//         <NAMEContext.Provider value={{ VALUE, SETVALUE }}>
//             {children}
//         </NAMEContext.Provider>
//     )
// }
//
// import where you want to use the context
// const { VALUE, SETVALUE } = useContext(NAMEContext)
//
// wrap the context around the components that needs access to the context
// <NAMEProvider>
// children components
// </NAMEProvider>
