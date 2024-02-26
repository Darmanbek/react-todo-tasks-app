import React, { useEffect } from 'react'
import {
    Header,
    SectionTasks,
    Footer,
    MenuDrawer,
    ProfileDrawer,
    ModalTask
} from './components'
import { useAppDispatch, useAppSelector } from './store/hooks'
import type { RootState } from './store'
import { getTasks } from './store/tasks/tasksSlice'
import './styles/app.css'

const App: React.FC = () => {
    const { mode } = useAppSelector((state: RootState) => state.mode)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (mode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [mode])

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])
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
                    <SectionTasks />
                    <Footer />
                </div>
                <ProfileDrawer />
            </div>
        </div>
    )
}

export default App