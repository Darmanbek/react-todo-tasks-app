import { UserOutlined } from "@ant-design/icons"
import { Avatar, Flex, Select, Typography } from "antd"
import { useResponsive } from "antd-style"
import dayjs from "dayjs"
import type { FC } from "react"
import { langData } from "src/data/lang.data"
import { toggleDrawer } from "src/store/drawer/drawer.slice"
import { useAppDispatch } from "src/store/hooks"
import MenuButton from "./MenuButton/MenuButton"
import SearchInput from "./SearchInput/SearchInput"
import { TaskNotification } from "./TaskNotification/TaskNotification"

const Header: FC = () => {
	const { xl } = useResponsive()

	const dispatch = useAppDispatch()

	const handleDrawer = () => {
		dispatch(toggleDrawer("right"))
	}

	return (
		<header
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				gap: 12
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between"
				}}
				className={"flex justify-between items-center"}
			>
				{xl ? (
					<SearchInput
						style={{
							maxWidth: 300,
							display: "inline-flex"
						}}
					/>
				) : (
					<MenuButton />
				)}
				<div style={{ textAlign: "center" }}>
					{!xl && (
						<Typography.Title
							level={4}
							style={{
								fontWeight: 700,
								fontSize: 16
							}}
							className={"font-bold max-xl:text-xl max-lg:text-lg max-sm:text-sm xl:hidden"}
						>
							СПИСОК-ДЕЛ
						</Typography.Title>
					)}
					<Typography.Text style={{ fontSize: xl ? 18 : 16, textTransform: "capitalize" }}>
						{dayjs().format("YYYY, MMM DD")}
					</Typography.Text>
				</div>
				<Flex justify={"center"} align={"center"} gap={20}>
					<TaskNotification />

					<Select size={"large"} defaultValue={"RU"} options={langData} />
					{!xl && (
						<Avatar icon={<UserOutlined />} onClick={handleDrawer} style={{ cursor: "pointer" }} />
					)}
				</Flex>
			</div>
			{!xl && <SearchInput className={"hidden max-xl:inline-flex"} />}
		</header>
	)
}

export { Header }
