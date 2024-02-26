import React from 'react'
import type { MenuProps } from 'antd';
import { BsUiRadiosGrid, BsClipboardCheckFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { TbNotesOff } from "react-icons/tb";

type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
    {
        key: "1",
        icon: React.createElement(BsUiRadiosGrid),
        label: "Все задачи",
    },
    {
        key: "2",
        icon: React.createElement(RiCalendarEventFill),
        label: "Сегодняшние задачи",
    },
    {
        key: "3",
        icon: React.createElement(MdOutlineNotificationImportant),
        label: "Важные задачи",
    },
    {
        key: "4",
        icon: React.createElement(BsClipboardCheckFill),
        label: "Выполненные задачи",
    },
    {
        key: "5",
        icon: React.createElement(TbNotesOff),
        label: "Незавершенные задачи",
    },
];
