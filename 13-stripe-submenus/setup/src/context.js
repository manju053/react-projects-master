import React, { useState, useContext, Children } from 'react'
import sublinks from './data'

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation ]= useState({});
    const [page, setPage] = useState({page: '', links: []});
    const openSidebar = () => {
        setisSidebarOpen(true);
    };

    const closeSidebar = () => {
        setisSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen, isSubmenuOpen, openSidebar, openSubmenu, closeSidebar, closeSubmenu, location, page
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
