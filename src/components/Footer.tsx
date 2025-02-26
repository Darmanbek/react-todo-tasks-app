import { theme, Typography } from "antd"
import type { FC } from "react"

const Footer: FC = () => {
	const { token } = theme.useToken()
	return (
		<footer
			style={{
				position: "sticky",
				bottom: 0,
				right: 0,
				left: 0,
				top: "100%",
				textAlign: "center",
				background: token.colorBgContainer,
				padding: "12px 0",
				borderRadius: 8
			}}
			className={
				"bg-footer sticky bottom-0 right-0 left-0 top-full text-center font-semibold py-3 rounded-lg text-light-text"
			}
		>
			<Typography.Title level={3} style={{ fontSize: 18, fontWeight: 700 }}>
				СПИСОК-ДЕЛ
			</Typography.Title>
		</footer>
	)
}

export { Footer }
