// Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import App from "./App";

// Test
import reportWebVitals from "./test/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
