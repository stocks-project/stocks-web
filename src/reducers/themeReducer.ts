import Themes from '../libs/theme/themes';


let theme = Themes.lightTheme;

const CHANGE_THEME_ACTION = "CHANGE_THEME_ACTION";

const setThemeAction = (type: string) => (newTheme: any) => ({
    type,
    newTheme
});

export const setTheme = setThemeAction(CHANGE_THEME_ACTION);

const themeReducer = (action: any) => {
    if (action !== undefined) {
        switch (action.type) {
            case CHANGE_THEME_ACTION:
                return action.newTheme;
            default:
                return theme;
        }
    } 
    
    return theme;
}

export default themeReducer;