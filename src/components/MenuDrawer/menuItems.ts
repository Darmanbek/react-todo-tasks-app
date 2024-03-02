import React from "react";
import type { MenuProps } from "antd";
import { BsUiRadiosGrid, BsClipboardCheckFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { TbNotesOff } from "react-icons/tb";
import { useNavigate } from "react-router-dom"; 


type MenuItem = Required<MenuProps>["items"][number];

export const menuItems = () => {

    const navigate = useNavigate();
    
    const items: MenuItem[] = [
        {
            key: "/",
            icon: React.createElement(BsUiRadiosGrid),
            label: "Все задачи",
            onClick: () => {navigate("/")}
        },
        {
            key: "/today",
            icon: React.createElement(RiCalendarEventFill),
            label: "Сегодняшние задачи",
            onClick: () => {navigate("/today")}
        },
        {
            key: "/important",
            icon: React.createElement(MdOutlineNotificationImportant),
            label: "Важные задачи",
            onClick: () => {navigate("/important")}
        },
        {
            key: "/completed",
            icon: React.createElement(BsClipboardCheckFill),
            label: "Выполненные задачи",
            onClick: () => {navigate("/completed")}
        },
        {
            key: "/uncompleted",
            icon: React.createElement(TbNotesOff),
            label: "Незавершенные задачи",
            onClick: () => {navigate("/uncompleted")}
        },
    ];

    return { items };
}

