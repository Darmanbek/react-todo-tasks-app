import { Avatar, Button, Drawer, Flex, Progress, Switch, Typography } from "antd"
import React, { useCallback, useEffect } from "react"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "src/hooks"
import { setDrawerMask, setRightDrawer } from "src/store/drawer/drawer.slice"
import { handleMode } from "src/store/mode/mode.slice"

const ProfileDrawer: React.FC = () => {
	// const { mode } = useAppSelector((state) => state.mode)
	const { drawerRightOpen, drawerMask } = useAppSelector((state) => state.drawer)
	const dispatch = useAppDispatch()

	const switchChange = () => {
		dispatch(handleMode())
	}

	const showDrawer = useCallback(() => {
		dispatch(setRightDrawer(true))
		dispatch(setDrawerMask(false))
	}, [dispatch])

	const onClose = useCallback(() => {
		dispatch(setRightDrawer(false))
		dispatch(setDrawerMask(true))
	}, [dispatch])

	const handleDrawer = () => {
		const width = document.body.clientWidth
		if (width < 1280) {
			onClose()
		} else {
			showDrawer()
		}
	}

	window.addEventListener("resize", handleDrawer)

	useEffect(handleDrawer, [onClose, showDrawer])
	return (
		<Drawer
			mask={drawerMask}
			width={256}
			placement={"right"}
			closable={false}
			onClose={onClose}
			open={drawerRightOpen}
			key={"right"}
		>
			<Flex vertical={true} justify={"space-between"} style={{ width: "100%", height: "100%" }}>
				<Flex vertical={true} gap={8}>
					<Flex justify={"center"} align={"center"} gap={12}>
						<Typography.Title
							level={3}
							style={{ textAlign: "center", fontWeight: 700, fontSize: 16 }}
						>
							Привет, Пользователь!
						</Typography.Title>
						<Avatar icon={<FaUserAlt />} />
					</Flex>
					<Flex align={"center"} justify={"space-between"} gap={12} style={{ paddingTop: 20 }}>
						<Typography.Title
							level={3}
							style={{ textAlign: "center", fontWeight: 600, fontSize: 14 }}
						>
							Темный режим
						</Typography.Title>
						<Switch
							className={""}
							checkedChildren={<BsFillMoonStarsFill />}
							unCheckedChildren={<BsFillSunFill />}
							onChange={switchChange}
						/>
					</Flex>
					<Flex vertical={true} gap={16}>
						<Flex
							justify={"space-between"}
							align={"center"}
							style={{
								fontSize: 14
							}}
						>
							<span>Все задачи</span>
							<span>1/3</span>
						</Flex>
						<div className={"profile-drawer__top-status__progress"}>
							<Progress percent={33} showInfo={false} />
						</div>
					</Flex>
				</Flex>
				<Button type={"primary"}>Сделано с ❤️ автором</Button>
			</Flex>
		</Drawer>
	)
}

export default ProfileDrawer
