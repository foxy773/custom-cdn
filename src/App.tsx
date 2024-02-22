import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p> */}

			<div className="fixed grid grid-rows-1 grid-cols-6 w-96 h-[34rem] bottom-0 right-0 bg-black border-solid border-t border-l border-[#ffbb82] rounded-tl-md">
				<div className="p-2 col-span-4 flex flex-col justify-between w-full">
					<div className="h-48  flex gap-2 z-10 flex-col overflow-y-auto overflow-x-hidden relative p-1">
						<div className="bg-[#38393b] rounded-lg p-1 rounded-br-none">
							<p className="text-xs ">
								Hi. My name is Andre. This is a test message. How are
								you doing? This is a long test message to make sure that
								all chat bubbles do what they are supposed to do.
							</p>
						</div>
						<div className="bg-[#202123] rounded-lg rounded-bl-none p-1">
							<p className="text-xs">TEEEST Heu</p>
						</div>
						{/* <div className="bg-yellow-500 rounded-lg p-1">
							<p className="text-xs">TEEEST Heu</p>
						</div>
						<div className="bg-yellow-500 rounded-lg p-1">
							<p className="text-xs">TEEEST Heu</p>
						</div>
						<div className="bg-yellow-500 rounded-lg p-1">
							<p className="text-xs">TEEEST Heu</p>
						</div>
						<div className="bg-yellow-500 rounded-lg p-1">
							<p className="text-xs">TEEEST Heu</p>
						</div> */}
					</div>
					<div className="w-full max-w-full flex">
						<input
							className="rounded-full flex-grow min-w-0 px-5 text-xs"
							type="text"
							name=""
							id=""
						/>
						<button className="rounded-full w-8 h-8 ml-4 p-0 flex justify-center items-center">
							x
						</button>
					</div>
				</div>
				<div className="h-full w-full flex items-end col-span-2">
					<div className="h-[26rem] w-full bg-avatar bg-cover bg-no-repeat bg-bottom"></div>
				</div>
			</div>
		</>
	);
}

export default App;
