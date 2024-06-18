"use client";
import React, { useState } from "react";
import {
	DndContext,
	DragOverlay,
	closestCorners,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Container from "./container";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const wrapperStyle = {
	display: "flex",
	flexDirection: "row",
};

const defaultAnnouncements = {
	onDragStart(id) {
		console.log(`Picked up draggable item ${id}.`);
	},
	onDragOver(id, overId) {
		if (overId) {
			console.log(
				`Draggable item ${id} was moved over droppable area ${overId}.`,
			);
			return;
		}

		console.log(`Draggable item ${id} is no longer over a droppable area.`);
	},
	onDragEnd(id, overId) {
		if (overId) {
			console.log(
				`Draggable item ${id} was dropped over droppable area ${overId}`,
			);
			return;
		}

		console.log(`Draggable item ${id} was dropped.`);
	},
	onDragCancel(id) {
		console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
	},
};

export default function App() {
	const [items, setItems] = useState({
		root: ["1", "2", "3"],
		container1: [],
		container2: [],
		container3: [],
	});
	const [activeId, setActiveId] = useState();

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	return (
		<div>
			<header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Link href="#" className="text-lg font-semibold" prefetch={false}>
						Jira Template
					</Link>
					<nav className="hidden md:flex gap-4 text-sm">
						<Link href="#" className="hover:underline" prefetch={false}>
							Kanban Board
						</Link>
						<Link href="#" className="hover:underline" prefetch={false}>
							Calendar
						</Link>
						<Link href="#" className="hover:underline" prefetch={false}>
							Burndown
						</Link>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<Button
						variant="outline"
						className=" bg-transparent"
						size="sm"
						onClick={() => {
							setItems((prev) => {
								const a = Object.keys(prev).length; // Use Object.keys to get the length of keys in the object
								return { ...prev, [`root${a}`]: [] };
							});

							console.log(items);
						}}>
						+ Add Task
					</Button>
					<Avatar>
						<AvatarImage src="/placeholder-user.jpg" />
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
				</div>
			</header>

			<DndContext
				announcements={defaultAnnouncements}
				sensors={sensors}
				collisionDetection={closestCorners}
				onDragStart={handleDragStart}
				onDragOver={handleDragOver}
				onDragEnd={handleDragEnd}>
				<div className=" flex  flex-wrap gap-10 py-10 ">
					{Object.keys(items).map((key) => {
						return <Container key={key} id={key} items={items[key]} />;
					})}
				</div>
			</DndContext>
		</div>
	);

	function findContainer(id) {
		if (id in items) {
			return id;
		}

		return Object.keys(items).find((key) => items[key].includes(id));
	}

	function handleDragStart(event) {
		const { active } = event;
		const { id } = active;

		setActiveId(id);
	}

	function handleDragOver(event) {
		const { active, over, draggingRect } = event;
		const { id } = active;
		const { id: overId } = over;

		// Find the containers
		const activeContainer = findContainer(id);
		const overContainer = findContainer(overId);

		if (
			!activeContainer ||
			!overContainer ||
			activeContainer === overContainer
		) {
			return;
		}

		setItems((prev) => {
			const activeItems = prev[activeContainer];
			const overItems = prev[overContainer];

			// Find the indexes for the items
			const activeIndex = activeItems.indexOf(id);
			const overIndex = overItems.indexOf(overId);

			let newIndex;
			if (overId in prev) {
				// We're at the root droppable of a container
				newIndex = overItems.length + 1;
			} else {
				const isBelowLastItem =
					draggingRect?.offsetTop &&
					over &&
					overIndex === overItems.length - 1 &&
					draggingRect?.offsetTop > over?.rect.offsetTop + over.rect.height;

				const modifier = isBelowLastItem ? 1 : 0;

				newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
			}

			return {
				...prev,
				[activeContainer]: [
					...prev[activeContainer].filter((item) => item !== active.id),
				],
				[overContainer]: [
					...prev[overContainer].slice(0, newIndex),
					items[activeContainer][activeIndex],
					...prev[overContainer].slice(newIndex, prev[overContainer].length),
				],
			};
		});
	}

	function handleDragEnd(event) {
		const { active, over } = event;
		const { id } = active;
		const { id: overId } = over;

		console.log(event);

		const activeContainer = findContainer(id);
		const overContainer = findContainer(overId);

		if (
			!activeContainer ||
			!overContainer ||
			activeContainer !== overContainer
		) {
			return;
		}

		const activeIndex = items[activeContainer].indexOf(active.id);
		const overIndex = items[overContainer].indexOf(overId);

		if (activeIndex !== overIndex) {
			setItems((items) => ({
				...items,
				[overContainer]: arrayMove(
					items[overContainer],
					activeIndex,
					overIndex,
				),
			}));
		}

		setActiveId(null);
	}
}
