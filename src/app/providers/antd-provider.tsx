import { ConfigProvider, theme } from "antd"
import localeRU from "antd/locale/ru_RU"
import dayjs from "dayjs"
import "dayjs/locale/ru"
import { type FC, type PropsWithChildren } from "react"
import { useAppSelector } from "src/shared/store/hooks"

dayjs.locale("ru")

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { isDarkMode } = useAppSelector((state) => state.mode)

	return (
		<ConfigProvider
			locale={localeRU}
			theme={{
				algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: {
					colorBgBase: isDarkMode ? "#0f172a" : undefined
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
