// Prefers color scheme
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
    document.body.className = 'dark';
    darkButton.checked = true;
    localStorage.setItem('themeMode', darkButton.value);
};

const setLightMode = () => {
    document.body.className = 'light';
    lightButton.checked = true;
    localStorage.setItem('themeMode', lightButton.value);
};

const getThemeModeFromLocalStorage = () => {
    return localStorage.getItem('themeMode');
};

const getThemeModeFromPreferences = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? 'dark'
        : 'light';
};

const changeTheme = (e) => {
    const themeMode = e.target.value;

    if (themeMode === 'light') {
        setLightMode();
    } else {
        setDarkMode();
    }
}

const toggleButtons = document.getElementsByName('theme');

toggleButtons.forEach((button) => {
    button.addEventListener('change', changeTheme);
});


const loadAndUpdateTheme = () => {
    const theme = getThemeModeFromLocalStorage() || getThemeModeFromPreferences();

    theme === 'dark' ? setDarkMode() : setLightMode();
};

loadAndUpdateTheme();
