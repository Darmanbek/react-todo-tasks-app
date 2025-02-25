import { ConfigProvider, theme } from "antd"
import { type FC, type PropsWithChildren } from "react"
import { useAppSelector } from "src/hooks"

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { mode } = useAppSelector((state) => state.mode)

	return (
		<ConfigProvider
			theme={{
				algorithm: mode ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: {
					colorBgBase: mode ? "#0f172a" : undefined
				}
			}}
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
