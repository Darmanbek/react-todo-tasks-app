import { createGlobalStyle } from "antd-style"

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		scrollbar-color: ${(p) => p.theme.colorBorder} transparent;
	}

	body {
		background-color: ${(p) => p.theme.colorBgLayout};
		color: ${(p) => p.theme.colorText};
		font-family: "Montserrat,${(p) => p.theme.fontFamily};
		min-height: 100vh;
	}
`
