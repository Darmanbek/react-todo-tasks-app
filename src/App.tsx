import { Layout } from "antd"
import { useResponsive, useThemeMode } from "antd-style"
import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Footer, Header, SectionTasks } from "src/components"
import { useAppDispatch } from "src/store/hooks"
import { setMode } from "src/store/mode/mode.slice"
import { MenuDrawer, ModalTask, ProfileDrawer } from "./components"

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
					<Route path={"/"} element={<SectionTasks />} />
					<Route path={"/:categoryId"} element={<SectionTasks />} />
				</Routes>
				<Footer />
			</div>
			<ProfileDrawer />
		</Layout>
	)
}

export default App
