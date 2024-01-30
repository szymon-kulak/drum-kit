import React, { useEffect, useRef, useState } from "react";
import heater1 from "./assets/heater-1.mp3";
import heater2 from "./assets/heater-2.mp3";
import heater3 from "./assets/heater-3.mp3";
import heater4 from "./assets/heater-4.mp3";
import clap from "./assets/clap.mp3";
import openHH from "./assets/open-hh.mp3";
import kickAndHat from "./assets/kick-n-hat.mp3";
import kick from "./assets/kick.mp3";
import closedHH from "./assets/closed-hh.mp3";

function DrumKit() {
	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			let keyPressed = e.key.toUpperCase();
			playSound(e.key.toUpperCase());
		});
	}, []);

	const soundLibrary = [
		{
			text: "Q",
			src: heater1,
			name: "Heater 1",
		},
		{
			text: "W",
			src: heater2,
			name: "Heater 2",
		},
		{
			text: "E",
			src: heater3,
			name: "Heater 3",
		},
		{
			text: "A",
			src: heater4,
			name: "Heater 4",
		},
		{
			text: "S",
			src: clap,
			name: "Clap",
		},
		{
			text: "D",
			src: openHH,
			name: "Open High Hat",
		},
		{
			text: "Z",
			src: kickAndHat,
			name: "Kick n' Hat",
		},
		{
			text: "X",
			src: kick,
			name: "Kick",
		},
		{
			text: "C",
			src: closedHH,
			name: "Closed High Hat",
		},
	];

	const [display, changeDisplay] = useState("");

	const playSound = function (selector) {
		const audio = document.getElementById(selector);
		audio.play();
		changeDisplay(findSoundName(selector));
	};

	const findSoundName = function (soundKey) {
		let obj = soundLibrary.find((sound) => sound.text === soundKey);
		return obj.name;
	};

	return (
		<div
			className="App flex flex-row items-start justify-start border-4 border-yellow-500 bg-zinc-400 p-4"
			id="drum-machine"
		>
			<div className="m-4 grid grid-cols-3 gap-1">
				{soundLibrary.map((sound) => (
					<div
						key={sound.name}
						className="drum-pad flex h-20 w-20 content-center items-center justify-center rounded-xl border  border-zinc-950 bg-zinc-700 font-mono text-2xl font-bold transition-all duration-300 ease-linear hover:bg-zinc-600"
						id={sound.name}
						onClick={() => {
							playSound(sound.text, sound.name);
						}}
					>
						{sound.text}
						<audio
							src={sound.src}
							className="clip"
							id={sound.text}
						/>
					</div>
				))}
			</div>
			<div
				id="display"
				className="m-4 w-40 border-2 border-zinc-950 bg-zinc-800 p-4"
			>
				{display}
			</div>
		</div>
	);
}

export default DrumKit;
