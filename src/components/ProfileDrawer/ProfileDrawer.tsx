import React, { useEffect, useState } from "react";
import { Button, Drawer, Progress, Switch } from "antd";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store";
import { handleMode } from "../../store/mode/modeSlice";
import { setDrawerMask, setRightDrawer } from "../../store/drawer/drawerSlice";

const ProfileDrawer: React.FC = () => {
    const { mode } = useAppSelector((state: RootState) => state.mode)
    const { drawerRightOpen, drawerMask } = useAppSelector((state: RootState) => state.drawer)
    const dispatch = useAppDispatch()

    const switchChange = () => {
        dispatch(handleMode());
    }

    const showDrawer = () => {
        dispatch(setRightDrawer(true))
        dispatch(setDrawerMask(false))
    }
    
    const onClose = () => {
        dispatch(setRightDrawer(false))
        dispatch(setDrawerMask(true))
    };
    
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
        placement="right"
        closable={false}
        onClose={onClose}
        open={drawerRightOpen}
        key="right"
        className="profile-drawer"
        >
            <div className="profile-drawer-inner bg-light-nav dark:bg-dark-nav w-64 h-full p-[25px] flex flex-col justify-between">
                <div className="profile-drawer__top flex flex-col gap-8">
                    <div className="profile-drawer__top-user flex justify-center items-center gap-3">
                        <h3 className="text-light-text-v2 dark:text-dark-text-v2 text-center font-bold">Привет, Пользователь!</h3>
                        <ProfileIcon />
                    </div>
                    <div className="profile-drawer__top-mode flex items-center justify-between gap-3 pt-5">
                        <h3 className="text-light-text-v2 dark:text-dark-text-v2 text-center font-bold">Темный режим</h3>
                        <Switch
                            className=""
                            checkedChildren={<span><BsFillMoonStarsFill /></span>}
                            unCheckedChildren={<span><BsFillSunFill /></span>}
                            onChange={switchChange}
                        />
                    </div>
                    <div className="profile-drawer__top-status flex flex-col gap-4">
                        <div className="profile-drawer__top-status__title flex items-center justify-between text-light-text-v2 dark:text-dark-text-v2 text-base">
                            <span>Все задачи</span>
                            <span>1/3</span>
                        </div>
                        <div className="profile-drawer__top-status__progress">
                            <Progress percent={33} showInfo={false} strokeColor={"#5b21b6"} trailColor={mode ? "#1d293e" : "#e2e8f0"}/>
                        </div>
                    </div>
                </div>
                <Button type="primary" className="profile-drawer__bottom bg-light-violet text-white">
                    Сделано с ❤️ автором
                </Button>
            </div>
        </Drawer>
    );
};

export default ProfileDrawer;
