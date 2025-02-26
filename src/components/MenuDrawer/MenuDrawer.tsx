import { Button, Drawer, Flex, Menu, Typography } from "antd"
import { useResponsive } from "antd-style"
import React from "react"
import { useAppDispatch, useAppSelector } from "src/hooks"
import { setLeftDrawer } from "src/store/drawer/drawer.slice"
import { handleModal } from "src/store/modal/modal.slice"
import { useMenuItems } from "./useMenuItems"

const MenuDrawer: React.FC = () => {
	const { xl } = useResponsive()

	const { mode } = useAppSelector((state) => state.mode)
	const { drawerLeftOpen } = useAppSelector((state) => state.drawer)
	const { category } = useAppSelector((state) => state.tasks)
	const dispatch = useAppDispatch()
	const items = useMenuItems()

	// const showDrawer = useCallback(() => {
	// 	dispatch(setLeftDrawer(true))
	// 	dispatch(setDrawerMask(false))
	// }, [dispatch])

	const onClose = () => {
		dispatch(setLeftDrawer(false))
	}

	const showModal = () => {
		dispatch(handleModal())
	}

	return (
		<Drawer
			mask={!xl}
			width={256}
			placement={"left"}
			closable={false}
			onClose={onClose}
			open={!xl ? xl || drawerLeftOpen : drawerLeftOpen}
			styles={{
				body: {
					padding: 0
				}
			}}
		>
			<div
				style={{
					height: "100%",
					width: "100%"
				}}
			>
				<Flex
					vertical={true}
					gap={30}
					style={{
						padding: "24px 12px",
						textAlign: "center"
					}}
				>
					<Typography.Title level={3}>СПИСОК-ДЕЛ</Typography.Title>
					<Button type={"primary"} onClick={showModal}>
						Добавить новую задачу
					</Button>
				</Flex>
				<Menu
					style={{
						backgroundColor: "transparent"
					}}
					theme={mode ? "dark" : "light"}
					defaultSelectedKeys={[category]}
					mode={"inline"}
					items={items}
				/>
			</div>
		</Drawer>
	)
}

export { MenuDrawer }
