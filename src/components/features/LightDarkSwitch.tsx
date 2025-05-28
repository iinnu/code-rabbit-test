import { useTheme } from 'hooks/useTheme';

import { AUTO_MODE, DARK_MODE, LIGHT_MODE, THEME_MODES } from 'constants/theme';

const MODE_ICON = {
  [AUTO_MODE]: <AutoIcon />,
  [DARK_MODE]: <MoonIcon />,
  [LIGHT_MODE]: <SunIcon />,
};

/**
 * Renders a theme switcher UI that allows users to toggle between light, dark, and system (auto) theme modes.
 *
 * Displays a button showing the current theme mode icon. Clicking the button cycles through available theme modes. Hovering over the button reveals a floating menu for direct selection of a specific mode.
 *
 * @remark The floating menu is shown or hidden based on mouse events and is controlled via direct DOM manipulation.
 */
function LightDarkSwitch() {
  const { mode, setMode } = useTheme();

  const showFloatMenu = () => {
    const floatMenu = document.getElementById('theme-float-menu');
    floatMenu?.classList.remove('hidden');
  };

  const hideFloatMenu = () => {
    const floatMenu = document.getElementById('theme-float-menu');
    floatMenu?.classList.add('hidden');
  };

  const toggleTheme = () => {
    const length = THEME_MODES.length;
    let i = 0;
    for (; i < length; i++) {
      if (THEME_MODES[i] === mode) {
        break;
      }
    }

    setMode(THEME_MODES[(i + 1) % length]);
  };

  return (
    <div role="menu" onMouseLeave={hideFloatMenu}>
      <button
        type="button"
        onClick={toggleTheme}
        className="btn-plain relative scale-animation active:scale-90 rounded-lg h-11 w-11"
        onMouseEnter={showFloatMenu}
      >
        {MODE_ICON[mode]}
      </button>

      <div
        id="theme-float-menu"
        role="menu"
        className="hidden absolute transition float-panel-closed top-16 bg-[var(--float-panel-bg)] p-2 rounded-lg"
      >
        <button
          type="button"
          role="menuitem"
          className="btn-plain scale-animation p-2 rounded-lg gap-2 w-full justify-start"
          class:current-theme-btn={mode === LIGHT_MODE}
          onClick={() => setMode(LIGHT_MODE)}
        >
          <SunIcon />
          <span>Light</span>
        </button>

        <button
          type="button"
          role="menuitem"
          className="btn-plain scale-animation p-2 rounded-lg gap-2 w-full justify-start"
          class:current-theme-btn={mode === DARK_MODE}
          onClick={() => setMode(DARK_MODE)}
        >
          <MoonIcon />
          <span>Dark</span>
        </button>

        <button
          type="button"
          role="menuitem"
          className="btn-plain scale-animation p-2 rounded-lg gap-2 w-full justify-start"
          class:current-theme-btn={mode === AUTO_MODE}
          onClick={() => setMode(AUTO_MODE)}
        >
          <AutoIcon />
          <span>System</span>
        </button>
      </div>
    </div>
  );
}

export default LightDarkSwitch;

function AutoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 17V7Q9.925 7 8.463 8.463T7 12t1.463 3.538T12 17m0 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
      ></path>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"
      ></path>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
      ></path>
    </svg>
  );
}
