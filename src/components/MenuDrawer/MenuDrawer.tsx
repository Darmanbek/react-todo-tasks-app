import { Button, Drawer, Flex, Menu, Typography } from "antd"
import React, { useCallback } from "react"
import { useAppDispatch, useAppSelector } from "src/hooks"
import { setDrawerMask, setLeftDrawer } from "src/store/drawer/drawer.slice"
import { handleModal } from "src/store/modal/modal.slice"
import { useMenuItems } from "./useMenuItems"

const MenuDrawer: React.FC = () => {
	// const { xl } = useResponsive()

	const { drawerLeftOpen, drawerMask } = useAppSelector((state) => state.drawer)
	const { category } = useAppSelector((state) => state.tasks)
	const dispatch = useAppDispatch()
	const { items } = useMenuItems()

	// const showDrawer = useCallback(() => {
	// 	dispatch(setLeftDrawer(true))
	// 	dispatch(setDrawerMask(false))
	// }, [dispatch])

	const onClose = useCallback(() => {
		dispatch(setDrawerMask(true))
		dispatch(setLeftDrawer(false))
	}, [dispatch])

	const showModal = () => {
		dispatch(handleModal())
	}

	// const handleDrawer = () => {
	// 	const width = document.body.clientWidth
	// 	if (width < 1280) {
	// 		onClose()
	// 	} else {
	// 		showDrawer()
	// 	}
	// }
	//
	// window.addEventListener("resize", handleDrawer)
	//
	// useEffect(handleDrawer, [onClose, showDrawer])
	return (
		<Drawer
			mask={drawerMask}
			width={256}
			placement={"left"}
			closable={false}
			onClose={onClose}
			open={drawerLeftOpen}
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
					gap={8}
					style={{
						padding: "32px 12px",
						textAlign: "center"
					}}
				>
					<Typography.Title level={3}>СПИСОК-ДЕЛ</Typography.Title>
					<Button type={"primary"} onClick={showModal}>
						Добавить новую задачу
					</Button>
				</Flex>
				<Menu defaultSelectedKeys={[category]} mode={"inline"} items={items} />
			</div>
		</Drawer>
	)
}

export { MenuDrawer }
