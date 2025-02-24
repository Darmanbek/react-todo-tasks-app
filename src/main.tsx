import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { AntdProvider } from "src/providers"
import App from "./App"
import { store } from "./store"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Router>
			<AntdProvider>
				<App />
			</AntdProvider>
		</Router>
	</Provider>
)
