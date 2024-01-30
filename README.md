# React Drum Kit

Project made for my [freeCodeCamp](https://www.freecodecamp.org/) Front End Development Libraries Certification to demonstrate my ability of working with multimedia files and KeyDown event handlers inside React.

Live App available **[HERE](https://szymon-kulak.github.io/drum-kit/)**

## Technologies Used

-   [React](https://react.dev/) for adding reactivity to the App
-   [Vite](https://vitejs.dev/) for building the React App
-   [TailwindCSS](https://tailwindcss.com/) for implementing CSS inside JavaScript
-   [GitHub Pages](https://pages.github.com/) for hosting the live App

## Documentation

Started off by importing the mp3 files as JavaScript variables:

```jsx
import heater1 from "./assets/heater-1.mp3";
import heater2 from "./assets/heater-2.mp3";
import heater3 from "./assets/heater-3.mp3";
import heater4 from "./assets/heater-4.mp3";
import clap from "./assets/clap.mp3";
import openHH from "./assets/open-hh.mp3";
import kickAndHat from "./assets/kick-n-hat.mp3";
import kick from "./assets/kick.mp3";
import closedHH from "./assets/closed-hh.mp3";
```

Created an array of objects called `soundLibrary` containing every sound, its corresponding key on the keyboard and its name to minimise the amount of code required later:

```jsx
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
	// etc.
];
```

Then created buttons for each sound sample by mapping over this array, applying TailwindCSS style classes in the process. Each button contains an audio element with its corresponding audio file.

```jsx
{
	soundLibrary.map((sound) => (
		<div
			key={sound.name}
			className="drum-pad flex h-20 w-20 cursor-pointer select-none content-center items-center justify-center border-2 border-zinc-950 bg-zinc-600 font-mono text-2xl font-bold text-orange-950 transition-all duration-300 ease-linear hover:bg-zinc-500"
			id={sound.name}
			onClick={() => {
				playSound(sound.text);
			}}
		>
			{sound.text}
			<audio src={sound.src} className="clip" id={sound.text} />
		</div>
	));
}
```

Created a Display element that shows the last sound played:

```jsx
<div
	id="display"
	className="font-Digital m-4 w-72 select-none overflow-hidden border-2 border-zinc-950 bg-zinc-800 p-4 text-xl text-orange-600 sm:w-48"
>
	{display}
</div>
```

Used the useState React hook to manage the Display's text:

```jsx
const [display, changeDisplay] = useState("Welcome");
```

Created the `playSound` function which plays a sound clip depending on the button pressed:

```jsx
const playSound = function (selector) {
	const audio = document.getElementById(selector);
	audio.play();
	changeDisplay(findSoundName(selector));
};
```

As well as the `findSoundName` function which finds which sound corresponds to the pressed button and returns its name. This simplifies updating the display when using the keyboard to play sounds later.

```jsx
const findSoundName = function (soundKey) {
	let obj = soundLibrary.find((sound) => sound.text === soundKey);
	return obj.name;
};
```

And, finally, to handle the keyboard, a simple event listener was used which calls the `playSound` function based on the key pressed.
