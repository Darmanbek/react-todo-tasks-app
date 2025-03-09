import { UserOutlined } from "@ant-design/icons"
import { Avatar, Flex, Select, Typography } from "antd"
import { useResponsive } from "antd-style"
import dayjs from "dayjs"
import type { FC } from "react"
import { langData } from "src/shared/data/lang.data"
import { toggleDrawer } from "src/shared/store/actions"
import { useAppDispatch } from "src/shared/store/hooks"
import { MenuButton, NotificationBell, SearchInput } from "./ui"

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
						>
							СПИСОК-ДЕЛ
						</Typography.Title>
					)}
					<Typography.Text style={{ fontSize: xl ? 18 : 16, textTransform: "capitalize" }}>
						{dayjs().format("YYYY, MMM DD")}
					</Typography.Text>
				</div>
				<Flex justify={"center"} align={"center"} gap={20}>
					<NotificationBell />
					<Select size={"large"} defaultValue={"RU"} options={langData} />
					{!xl && (
						<Avatar icon={<UserOutlined />} onClick={handleDrawer} style={{ cursor: "pointer" }} />
					)}
				</Flex>
			</div>
			{!xl && <SearchInput />}
		</header>
	)
}

export { Header }
