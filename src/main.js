const themeSwitcher = document.querySelector(".theme-switcher");

themeSwitcher.addEventListener("click", (event) => {
  if (event.target.tagName !== "INPUT") {
    return;
  }

  const themeToActivate = event.target.id;
  changeTheme(themeToActivate);
});

function changeTheme(theme) {
  if (theme === "system") {
    localStorage.removeItem("barber-theme");
    document.body.removeAttribute("data-theme");
  } else {
    localStorage.setItem("barber-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }

  document.body.addEventListener(
    "transitionend",
    () => {
      document.body.classList.remove("theme-switch");
    },
    {}
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const activeTheme = localStorage.getItem("barber-theme");
  if (activeTheme) {
    document.getElementById(activeTheme).checked = true;
    changeTheme(activeTheme);
  }
});
