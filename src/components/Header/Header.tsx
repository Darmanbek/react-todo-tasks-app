import { Avatar, Badge, Popover, Select } from "antd"
import type { FC } from "react"
import { BsFillBellFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { useAppDispatch } from "src/hooks"
import { handleRightDrawer } from "src/store/drawer/drawer.slice"
import { langOptions } from "./lang.options"
import MenuButton from "./MenuButton/MenuButton"
import SearchInput from "./SearchInput/SearchInput"
import { TaskList } from "./TaskList/TaskList"

const Header: FC = () => {
	const dispatch = useAppDispatch()

	const handleDrawer = () => {
		dispatch(handleRightDrawer())
	}

	return (
		<header className={"flex flex-col justify-between gap-3"}>
			<div className={"flex justify-between items-center"}>
				<SearchInput className={"w-80 inline-flex max-xl:hidden"} />
				<MenuButton />
				<div className={"text-center"}>
					<h4
						className={
							"text-light-text dark:text-dark-text font-bold max-xl:text-xl max-lg:text-lg max-sm:text-sm xl:hidden"
						}
					>
						СПИСОК-ДЕЛ
					</h4>
					<p
						className={` text-center text-light-text dark:text-dark-text max-xl:text-xl max-lg:text-lg max-sm:text-sm`}
					>
						2024, Mar 18
					</p>
				</div>
				<div className={"flex justify-center items-center gap-5"}>
					<Popover
						content={<TaskList />}
						trigger={"click"}
						className={"cursor-pointer"}
						placement={"bottomRight"}
					>
						<Badge count={3} size={"small"}>
							<BsFillBellFill fontSize={25} className={"text-light-violet"} />
						</Badge>
					</Popover>

					<Select size={"large"} defaultValue={"RU"} options={langOptions} />
					<button onClick={handleDrawer} className={"xl:hidden"}>
						<Avatar icon={<FaUserAlt />} />
					</button>
				</div>
			</div>
			<SearchInput className={"hidden max-xl:inline-flex"} />
		</header>
	)
}

export default Header
