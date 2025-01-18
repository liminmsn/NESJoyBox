import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { storage } from "./lib/loadFile";

const container = document.getElementById("root");
const root = createRoot(container!);
storage.init().finally(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
