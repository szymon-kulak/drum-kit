import { useState } from "react";
import DrumKit from "./drum-kit";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex h-screen w-screen content-center items-center justify-center bg-zinc-800">
			<DrumKit />
		</div>
	);
}

export default App;
