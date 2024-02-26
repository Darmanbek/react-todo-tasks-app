import React, { ReactNode } from 'react'
import { Badge, Popover, Select } from 'antd'
import { BsFillBellFill } from 'react-icons/bs';
import TaskList from './TaskList/TaskList';
import { langOptions } from './langOptions';
import MenuButton from './MenuButton/MenuButton';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import SearchInput from './SearchInput/SearchInput';
import { useAppDispatch } from '../../store/hooks';
import './header.css';
import { handleRightDrawer } from '../../store/drawer/drawerSlice';

const Header: React.FC = () => {
    const dispatch = useAppDispatch()

    const handleDrawer = () => {
        dispatch(handleRightDrawer())
    }

    return (
        <header className="header">
            <div className="header-inner">
                <SearchInput styles="w-80 inline-flex max-xl:hidden" />
                <MenuButton />
                <div className="text-center">
                    <h4 className="
                    text-light-text 
                    dark:text-dark-text 
                    font-bold 
                    max-xl:text-xl 
                    max-lg:text-lg 
                    max-sm:text-sm 
                    xl:hidden
                    ">СПИСОК-ДЕЛ</h4>
                    <p className="
                    text-center 
                    text-light-text 
                    dark:text-dark-text 
                    max-xl:text-xl 
                    max-lg:text-lg 
                    max-sm:text-sm
                    ">2024, Mar 18</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <Popover content={TaskList} trigger="click" className="cursor-pointer" placement="bottomRight">
                        <Badge count={3} size='small'>
                            <BsFillBellFill fontSize={25} className="text-light-violet"/>
                        </Badge>
                    </Popover>
                    
                    <Select
                    size="large"
                    defaultValue="RU"
                    options={langOptions}
                    />
                    <button onClick={handleDrawer} className="xl:hidden">
                        <ProfileIcon />
                    </button>
                </div>
            </div>
            <SearchInput styles="hidden max-xl:inline-flex"/> 
        </header>
    )
}

export default Header