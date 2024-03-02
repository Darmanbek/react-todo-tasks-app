import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
    Header,
    SectionTasks,
    Footer,
    MenuDrawer,
    ProfileDrawer,
    ModalTask
} from "./components";
import { useAppSelector } from "./store/hooks"
import type { RootState } from "./store"
import "./styles/app.css"

const App: React.FC = () => {
    const { mode } = useAppSelector((state: RootState) => state.mode)

    useEffect(() => {
        if (mode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [mode])

    return (
        <div className="app bg-light-bg dark:bg-dark-bg">
            <div className="layout">
                <MenuDrawer />
                <ModalTask />
                <div className="
                p-5 
                xl:mx-64 
                lg:mx-0 
                min-h-screen 
                transition-all 
                delay-200 
                flex 
                flex-col 
                gap-5
                ">
                    <Header />
                    <Routes>
                        <Route path="/" element={ <SectionTasks /> }/>
                        <Route path="/:categoryID" element={ <SectionTasks /> }/>
                    </Routes>
                    <Footer />
                </div>
                <ProfileDrawer />
            </div>
        </div>
    )
}

export default App