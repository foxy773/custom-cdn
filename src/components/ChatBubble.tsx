import clsx from "clsx";

type ChatBubbleProps = {
	variant: "assistant" | "user";
	message: string;
};

export function ChatBubble({ variant, message }: ChatBubbleProps) {
	const messageVariations: string =
		(variant ?? "assistant") === "assistant"
			? "rounded-br-none bg-[#202123]"
			: "rounded-bl-none bg-[#38393b]";

	return (
		<div className={clsx("bg-[#202123] rounded-lg p-1", messageVariations)}>
			<p className="text-xs">{message}</p>
		</div>
	);
}
