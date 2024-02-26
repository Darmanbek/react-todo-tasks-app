/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {

            },
            colors: {
                "light-modal-text": "#6D5580",
                "light-bg": "#e2e8f0",
                "light-text": "#475569",
                "light-text-v2": "#475569",
                "light-violet": "#5b21b6",
                "light-nav": "#f1f5f9",
                
                "light-uncheck-bg": "#fde68a",
                "light-uncheck-text": "#92400e",
                "light-check-bg": "#a7f3d0",
                "light-check-text": "#065f46",
                
                "light-menu-text": "#477880", // rgba(71, 120, 128, 0.88)
                "light-menu-bg-selected": "#EDE9FE",
                "light-menu-bg-selected-text": "#f43f5e",
                
                
                
                
                "dark-bg": "#0f172a",
                "dark-text": "#94a3b8",
                "dark-text-v2": "#fff",
                "dark-violet": "#5b21b6",
                "dark-nav": "#141e33",
                    
                "dark-switch-bg": "#1c2436",
                
                "dark-menu-text": "#8497ac", // rgba(132, 151, 172, 0.88)
                "dark-menu-bg-selected": "#1A253A",
                "dark-menu-text-selected-text": "#e2e8f0",
            }
        },
    },
    plugins: [],
};
