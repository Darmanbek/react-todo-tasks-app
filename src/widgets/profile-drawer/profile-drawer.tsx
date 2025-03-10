import { MoonFilled, SunFilled, UserOutlined } from "@ant-design/icons"
import { Avatar, Button, Drawer, Flex, Progress, Space, Switch, Typography } from "antd"
import { useResponsive } from "antd-style"
import React, { useEffect } from "react"
import { setDrawer, toggleMode } from "src/shared/store/actions"
import { useGetTasksQuery } from "src/shared/store/endpoints"
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks"

const ProfileDrawer: React.FC = () => {
	const { xl } = useResponsive()
	const { right } = useAppSelector((state) => state.drawer)
	const { isDarkMode } = useAppSelector((state) => state.mode)
	const { data: tasks = [] } = useGetTasksQuery({})
	const dispatch = useAppDispatch()

	const toggleTheme = () => {
		dispatch(toggleMode())
	}

	const onClose = () => {
		dispatch(
			setDrawer({
				side: "right",
				open: false
			})
		)
	}

	useEffect(() => {
		if (xl) {
			dispatch(
				setDrawer({
					side: "right",
					open: true
				})
			)
		} else {
			dispatch(
				setDrawer({
					side: "right",
					open: false
				})
			)
		}
	}, [dispatch, xl])
	return (
		<Drawer
			mask={!xl}
			keyboard={!xl}
			width={256}
			placement={"right"}
			closable={false}
			onClose={onClose}
			open={!xl ? xl || right : right}
			key={"right"}
		>
			<Flex vertical={true} justify={"space-between"} style={{ width: "100%", height: "100%" }}>
				<Flex vertical={true} gap={24}>
					<Flex justify={"center"} align={"center"} gap={12}>
						<Typography.Title
							level={3}
							style={{ textAlign: "center", fontWeight: 700, fontSize: 16 }}
						>
							Привет, Пользователь!
						</Typography.Title>
						<div>
							<Avatar icon={<UserOutlined />} />
						</div>
					</Flex>
					<Flex align={"center"} justify={"space-between"} gap={12} style={{ paddingTop: 20 }}>
						<Typography.Title
							level={3}
							style={{ textAlign: "center", fontWeight: 600, fontSize: 14 }}
						>
							Темный режим
						</Typography.Title>
						<Switch
							checked={isDarkMode}
							checkedChildren={<MoonFilled />}
							unCheckedChildren={<SunFilled />}
							onChange={toggleTheme}
						/>
					</Flex>
					<Flex vertical={true} gap={8}>
						<Flex
							justify={"space-between"}
							align={"center"}
							style={{
								fontSize: 14
							}}
						>
							<Typography.Text>Все задачи</Typography.Text>
							<Typography.Text>
								{tasks?.filter((e) => e.completed)?.length}/{tasks.length}
							</Typography.Text>
						</Flex>
						<div className={"profile-drawer__top-status__progress"}>
							<Progress percent={100 / (tasks.length || 1)} showInfo={false} />
						</div>
					</Flex>
				</Flex>
				<Button type={"primary"}>
					<Space size={2} align={"center"}>
						{"Сделано с"} <img src={"/react.svg"} width={16} alt={"❤️"} /> {"автором"}
					</Space>
				</Button>
			</Flex>
		</Drawer>
	)
}

export { ProfileDrawer }
