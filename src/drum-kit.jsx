import React, { useEffect, useState } from "react";
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

	const [display, changeDisplay] = useState("Welcome");

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
			className="App flex flex-col-reverse items-center justify-start border-4 border-zinc-950 bg-zinc-700 p-4 sm:flex-row sm:items-start"
			id="drum-machine"
		>
			<div className="m-4 grid grid-cols-3 gap-4">
				{soundLibrary.map((sound) => (
					<div
						key={sound.name}
						className="drum-pad flex h-20 w-20 cursor-pointer select-none content-center items-center justify-center border-2 border-zinc-950 bg-zinc-600 font-mono text-2xl font-bold text-orange-950 transition-all duration-300 ease-linear hover:bg-zinc-500"
						id={sound.name}
						onClick={() => {
							playSound(sound.text);
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
				className="font-Digital m-4 w-72 select-none overflow-hidden border-2 border-zinc-950 bg-zinc-800 p-4 text-xl text-orange-600 sm:w-48"
			>
				{display}
			</div>
		</div>
	);
}

export default DrumKit;
