import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./sortable_item";

export default function Container(props: any) {
	const { id, items } = props;

	const { setNodeRef } = useDroppable({
		id,
	});

	return (
		<SortableContext
			id={id}
			items={items}
			strategy={verticalListSortingStrategy}>
			<div
				ref={setNodeRef}
				className="   z-50 py-5  rounded-xl min-w-[350px] border-black border flex flex-col items-center space-y-3   h-[600px]">
				{items.map((id) => (
					<SortableItem key={id} id={id} />
				))}
			</div>
		</SortableContext>
	);
}
