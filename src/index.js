import React from "react";
import { createRoot } from "react-dom/client";
import Users from "./components/users";

const App = () => {
  return <Users />;
};

createRoot(document.getElementById("root")).render(<App />);
