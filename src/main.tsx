import ReactDOM from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as RouterProvider } from "react-router-dom"
import { AntdProvider } from "src/providers"
import { GlobalStyle } from "src/styles/global.style"
import App from "./App"
import { store } from "./store"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ReduxProvider store={store}>
		<RouterProvider>
			<AntdProvider>
				<GlobalStyle />
				<App />
			</AntdProvider>
		</RouterProvider>
	</ReduxProvider>
)
