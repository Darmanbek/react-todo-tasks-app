import { ConfigProvider } from "antd"
import type { FC, PropsWithChildren } from "react"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ConfigProvider
			typography={{
				style: {
					marginBottom: 0
				}
			}}
		>
			{children}
		</ConfigProvider>
	)
}

export { AntdProvider }
