import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [hideSideBar, setHideBar] = useState(false);

    return (
        <SidebarContext.Provider value={{ hideSideBar, setHideBar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    return useContext(SidebarContext);
};
