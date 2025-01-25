import { createContext, useContext, useState } from 'react';

export const AppStateContext = createContext({});

export function AppProvider({ children }) {
    const value = useState({})

    return (
        <AppStateContext value={value} >
            {children}
        </AppStateContext>
    )
}

export function useAppState() {
    const context = useContext(AppStateContext);

    if (!context) {
        throw new Error("UseAppState must be used with the AppProvider")
    }
    return context

}