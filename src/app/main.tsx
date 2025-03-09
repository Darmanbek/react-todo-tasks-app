import ReactDOM from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as RouterProvider } from "react-router-dom"
import { store } from "src/shared/store"
import { App } from "./app"
import { AntdProvider } from "./providers"
import { GlobalStyle } from "./styles/global.style"
import "src/app/styles/index.css"

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
