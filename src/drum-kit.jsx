import React, { useState } from "react";

function DrumKit() {
	const [display, changeDisplay] = useState("");

	const handleClick = function (e) {
		changeDisplay(`${e.target.id}`);
	};

	return (
		<div className="App" id="drum-machine">
			<button
				className="drum-pad"
				id="placeholder"
				value="Q"
				onClick={handleClick}
			>
				Q
				<audio
					src="./heater-1.mp3"
					className="clip"
					id="Q"
					controls
					autoPlay
				/>
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="W"
				onClick={handleClick}
			>
				W
				<audio src="" className="clip" id="W" />
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="E"
				onClick={handleClick}
			>
				E
				<audio src="" className="clip" id="E" />
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="A"
				onClick={handleClick}
			>
				A
				<audio src="" className="clip" id="A" />
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="S"
				onClick={handleClick}
			>
				S
				<audio src="" className="clip" id="S" />
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="D"
				onClick={handleClick}
			>
				D
				<audio src="" className="clip" id="D" />
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="Z"
				onClick={handleClick}
			>
				Z
				<audio src="" className="clip" id="Z" />
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="X"
				onClick={handleClick}
			>
				X
				<audio src="" className="clip" id="X" />
			</button>
			<button
				className="drum-pad"
				id="placeholder"
				value="C"
				onClick={handleClick}
			>
				C
				<audio src="" className="clip" id="C" />
			</button>
			<div id="display">{display}</div>
		</div>
	);
}

export default DrumKit;
