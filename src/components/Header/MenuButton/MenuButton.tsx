import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import type { RootState } from "../../../store";
import "./menuButton.scss";
import { handleLeftDrawer } from "../../../store/drawer/drawerSlice";

const MenuButton: React.FC = () => {
    const { drawerLeftOpen } = useAppSelector((state: RootState) => state.drawer);
    const dispatch = useAppDispatch()


    const handleMenu = () => {
        dispatch(handleLeftDrawer())
    }

    return (
        <button onClick={handleMenu} className="menu-button hidden max-xl:block">
            <span className={`${drawerLeftOpen ? "active" : ""}`}></span>
        </button>
    );
};

export default MenuButton;
