import { useEffect, useState } from "react";
import "./App.css";
import { ModualContainer } from "./components/ModualContainer";
import { ChatAndController } from "./components/ChatAndController";
import { AvatarModual } from "./components/AvatarModual";

function App() {
	const [showBot, setShowBot] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setShowBot(true);
		}, 500);
	});

	return (
		<>
			{showBot && (
				<ModualContainer>
					<ChatAndController />
					<AvatarModual />
				</ModualContainer>
			)}
		</>
	);
}

export default App;
