import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store';
import TaskItem from './TaskItem/TaskItem'
import { getTasks } from '../../store/tasks/tasksSlice';
import { useParams } from 'react-router-dom';

const SectionTasks: React.FC = () => {
    const { tasks } = useAppSelector((state: RootState) => state.tasks);
    const dispatch = useAppDispatch();
    const { categoryID } = useParams();
    

    useEffect(() => {
        const category = categoryID || ""
        dispatch(getTasks(category))
    }, [dispatch, categoryID])
    return (
        <section className="section-tasks">
            <div className="tasks-inner">
                <div className="tasks-inner__head py-4 text-light-text-v2 dark:text-dark-text-v2 text-2xl max-lg:text-xl font-medium">
                    <h2>Все задачи ({tasks.length} задача)</h2>
                </div>
                <div className="tasks-inner__block grid gap-5 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                    { tasks.length > 0 && tasks.map(task => (
                        <TaskItem 
                            key={task.id}
                            id={task.id}
                            completed={task.completed}
                            date={task.date}
                            description={task.description}
                            dir={task.dir}
                            important={task.important}
                            title={task.title}
                        />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionTasks