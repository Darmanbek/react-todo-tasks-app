import { Button, Drawer, Flex, Menu, Typography } from "antd"
import { useResponsive } from "antd-style"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "src/hooks"
import { setDrawer, toggleModal } from "src/store"
import { useMenuItems } from "./useMenuItems"

const MenuDrawer: React.FC = () => {
	const { xl } = useResponsive()

	const { isDarkMode } = useAppSelector((state) => state.mode)
	const { left } = useAppSelector((state) => state.drawer)
	const { category } = useAppSelector((state) => state.tasks)
	const dispatch = useAppDispatch()
	const items = useMenuItems()

	// const showDrawer = useCallback(() => {
	// 	dispatch(setLeftDrawer(true))
	// 	dispatch(setDrawerMask(false))
	// }, [dispatch])

	const onClose = () => {
		dispatch(
			setDrawer({
				side: "left",
				open: false
			})
		)
	}

	const showModal = () => {
		dispatch(toggleModal())
	}

	useEffect(() => {
		if (xl) {
			dispatch(
				setDrawer({
					side: "left",
					open: true
				})
			)
		} else {
			dispatch(
				setDrawer({
					side: "left",
					open: false
				})
			)
		}
	}, [dispatch, xl])
	return (
		<Drawer
			mask={!xl}
			width={256}
			placement={"left"}
			closable={false}
			onClose={onClose}
			open={!xl ? xl || left : left}
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
					theme={isDarkMode ? "dark" : "light"}
					defaultSelectedKeys={[category]}
					mode={"inline"}
					items={items}
				/>
			</div>
		</Drawer>
	)
}

export { MenuDrawer }
