import { createContext, FC, useMemo, useState } from "react";
import { ColorMode } from "../models/colormode.context";
import IColorModeContext from "../models/colormode.context";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const defaultThemeColor: IColorModeContext = {}

export const ColorModeContext = createContext(defaultThemeColor);

export const ColorModeContextProvider: FC = ({ children }) => {
    const [mode, setMode] = useState<ColorMode>(ColorMode.light);

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode,
            },
        }),
        [mode],
    );
    const toggleColorMode = () => {
        console.log(mode);
        setMode((prevMode) => (prevMode === ColorMode.light ? ColorMode.dark : ColorMode.light));
    }

    return (
        <ColorModeContext.Provider value={{ toggleColorMode }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
