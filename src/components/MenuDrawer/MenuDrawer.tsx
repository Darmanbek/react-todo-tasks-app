import React, { useEffect, useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { menuItems } from "./menuItems";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { handleModal } from "../../store/modal/modalSlice";
import { RootState } from "../../store";
import { setDrawerMask, setLeftDrawer } from "../../store/drawer/drawerSlice";
import "./menuDrawer.css";

const MenuDrawer: React.FC = () => {
    const { drawerLeftOpen, drawerMask } = useAppSelector((state: RootState) => state.drawer)
    const { category } = useAppSelector((state: RootState) => state.tasks)
    const dispatch = useAppDispatch();
    const { items } = menuItems();
    
    const showDrawer = () => {
        dispatch(setLeftDrawer(true))
        dispatch(setDrawerMask(false))
    }

    const onClose = () => {
        dispatch(setDrawerMask(true))
        dispatch(setLeftDrawer(false))
    };

    const showModal = () => {
        dispatch(handleModal())
    }

    const handleDrawer = () => {
        const width = document.body.clientWidth
        if (width < 1280) {
            onClose();
        } else {
            showDrawer()
        }
    }

    window.addEventListener("resize", handleDrawer)
    
    useEffect(handleDrawer, [])
    return (
        <Drawer
            mask={drawerMask}
            width={256}
            placement="left"
            closable={false}
            onClose={onClose}
            open={drawerLeftOpen}
            key="left"
            className="menu-drawer"
        >
            <div className="menu-drawer-inner bg-light-nav dark:bg-dark-nav h-full w-full" >
                <div className="menu-drawer__title">
                    <h2 className="text-light-text dark:text-dark-text font-bold text-[24px]">СПИСОК-ДЕЛ</h2>
                    <Button type="primary" onClick={showModal} className="menu-drawer__button">Добавить новую задачу</Button>
                </div>
                <Menu
                    className="menu-drawer__menu bg-light-nav dark:bg-dark-nav"
                    defaultSelectedKeys={[category]}
                    mode="inline"
                    items={items}
                />
            </div>
        </Drawer>
    );
};

export default MenuDrawer;
