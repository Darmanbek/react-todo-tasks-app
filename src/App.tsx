import { Layout } from "antd"
import { useResponsive } from "antd-style"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { Footer, Header, MenuDrawer, ModalTask, ProfileDrawer, SectionTasks } from "./components"

const App: React.FC = () => {
	const { lg } = useResponsive()

	return (
		<Layout>
			<MenuDrawer />
			<ModalTask />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
					transition: "all .3s",
					padding: 20,
					marginInline: lg ? 256 : 0
				}}
			>
				<Header />
				<Routes>
					<Route path={"/"} element={<SectionTasks />} />
					<Route path={"/:categoryID"} element={<SectionTasks />} />
				</Routes>
				<Footer />
			</div>
			<ProfileDrawer />
		</Layout>
	)
}

export default App
