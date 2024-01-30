import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DrumKit from "./drum-kit";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<DrumKit />
		</div>
	);
}

export default App;
