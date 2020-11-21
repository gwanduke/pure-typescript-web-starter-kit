import "./index.css";

function startApp() {
  const root = document.getElementById("root");
  root.textContent = "Hello!";
}

startApp();

// webpack-dev-server: Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
