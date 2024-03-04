import { ChatBubble } from "./ChatBubble";
import { Message } from "./ChatAndController";

type ChatContainerProps = {
	messages: Message[];
};

export function ChatContainer({ messages }: ChatContainerProps) {
	return (
		<div className="h-48 flex gap-2 z-10 flex-col overflow-y-auto overflow-x-hidden relative">
			{messages.map((message) => {
				console.log(message);

				return <ChatBubble variant={message.role} message={message.data} />;
			})}
			{/* <ChatBubble
				variant="assistant"
				message="Hi. My name is Andre. This is a test message. How are you doing? This is a long test message to make sure that all chat bubbles do what they are supposed to do."
			/>
			<ChatBubble variant="user" message="JEG ER USER" /> */}
		</div>
	);
}
