import { Layout } from "antd"
import { useResponsive, useThemeMode } from "antd-style"
import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { setMode } from "src/shared/store/actions"
import { useAppDispatch } from "src/shared/store/hooks"
import { Footer, Header, MenuDrawer, ModalTask, ProfileDrawer, Tasks } from "src/widgets"

const App: React.FC = () => {
	const { xl } = useResponsive()
	const dispatch = useAppDispatch()
	const { browserPrefers } = useThemeMode()

	useEffect(() => {
		if (browserPrefers === "dark") {
			dispatch(setMode(true))
		} else {
			dispatch(setMode(false))
		}
	}, [browserPrefers, dispatch])
	return (
		<Layout>
			<MenuDrawer />
			<ModalTask />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
					transition: "margin .3s",
					gap: 20,
					padding: 20,
					marginInline: xl ? 256 : 0
				}}
			>
				<Header />
				<Routes>
					<Route path={"/"} element={<Tasks />} />
					<Route path={"/:categoryId"} element={<Tasks />} />
				</Routes>
				<Footer />
			</div>
			<ProfileDrawer />
		</Layout>
	)
}

export { App }
