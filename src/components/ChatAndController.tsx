import { useState } from "react";
import { ChatContainer } from "./ChatContainer";
import { InputContainer } from "./InputContainer";
import axios from "axios";

export type Message = {
	data: string;
	role: "assistant" | "user";
};

export function ChatAndController() {
	const [messages, setMessages] = useState<Message[]>([]);

	const sendMessage = async (inputMessage: string) => {
		setMessages((prevMessages) => [
			...prevMessages,
			{ data: inputMessage, role: "user" },
		]);

		const { data: data } = await axios.post(
			"https://corsproxy.io/?https://eb5a-2a02-fe0-c13e-1e00-c8ce-2553-966c-4d17.ngrok-free.app/api/hellot",
			{
				prompt: inputMessage,
				bearer: "halla",
				token: "fdfdsf",
			}
		);
		console.log(data, "THIS IS DATA");

		setMessages((prevMessages) => [
			...prevMessages,
			{ data: data.data, role: "assistant" },
		]);
	};

	return (
		<div className="p-2 col-span-4 flex flex-col justify-between w-full">
			<ChatContainer messages={messages} />
			<InputContainer sendMessage={sendMessage} />
		</div>
	);
}
