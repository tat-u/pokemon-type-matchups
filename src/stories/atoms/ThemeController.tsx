import { themes } from "@/models/themes";

/**
 * This component requires daisyUI to be installed in your project.
 *
 * SIDE EFFECT: LocalStorage
 */
export function ThemeController() {
  // WARN: なぜか daisyUI config で指定した prefix が反映されないため、一旦 "d-" prefix なしとする

  return (
    <div className="d-dropdown d-dropdown-end">
      <div tabIndex={0} role="button" className="d-btn m-1">
        <svg
          width="16px"
          height="16px"
          className="inline-block h-4 w-4 fill-current opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8m-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="d-dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        {Object.entries(themes).map(([key, theme]) => (
          <li key={key}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller w-full d-btn d-btn-sm d-btn-ghost justify-start"
              aria-label={theme.name}
              value={theme.id}
              onChange={(e) => {
                // NOTE: Accessing localStorage in here is actually safe, because onChange is called in the browser context
                localStorage.setItem("theme", e.target.value);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
