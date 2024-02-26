import React from "react";

/* type Props = React.ComponentPropsWithoutRef<"div"> & {}; */

export function ModualContainer(
	Props: React.ComponentPropsWithoutRef<"div"> & {
		/* variant?: "normal" | "blured"; */
	}
) {
	return (
		<div
			{...Props}
			className="fixed grid grid-rows-1 grid-cols-6 w-96 h-[34rem] bottom-0 right-0 bg-black border-solid border-t border-l border-[#ffbb82] rounded-tl-md"
		></div>
	);
}
