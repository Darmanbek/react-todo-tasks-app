import React from 'react'
import { IoMdCalendar } from 'react-icons/io';
import { GoStarFill } from "react-icons/go";
import { BiSolidTrashAlt, BiDotsVerticalRounded  } from "react-icons/bi";
import { MdEdit } from 'react-icons/md';
import { ITaskState } from '../../../model/task';
import './taskItem.scss'

const TaskItem: React.FC<ITaskState> = ({ title, description, date, dir, important, completed }) => {
    
    const icon_styles = "cursor-pointer text-light-text dark:text-dark-text"
    return (
        <div className="task-item bg-light-nav dark:bg-dark-nav">
            <div className="task-item__catalog">{dir}</div>
            <div className="flex flex-col gap-[10px] h-full pb-[10px] border-b-[1px] border-dashed border-light-text">
                <h4 className="text-light-text-v2 dark:text-dark-text-v2 font-[600]">{title}</h4>
                <p className="text-light-text dark:text-dark-text">{description}</p>
                <div className="flex items-center gap-[10px] text-light-text dark:text-dark-text mt-[20px]">
                    <IoMdCalendar />
                    <span>{date}</span>
                </div>
            </div>
            <div className="flex items-center justify-between mx-[-10px]">
                <button className={`
                task-item__check
                ${completed ? "checked" : ""}
                `}>
                    <span className="">{completed ? "Выполненный" : "Невыполненный"}</span>
                </button>
                <span className="flex items-center gap-[5px]">
                    <GoStarFill fontSize={24} className={`${icon_styles} ${important ? "text-light-menu-bg-selected-text" : ""}`}/>
                    <BiSolidTrashAlt fontSize={24} className={icon_styles}/>
                    <MdEdit fontSize={24} className={icon_styles}/>
                </span>
            </div>
        </div>
    )
}

export default TaskItem