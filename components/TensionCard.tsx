/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hkVOatRqPfV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TensionCard({ title, description, dueDate, priority }) {
	// <Card
	// 	className=" max-w-sm w-[350px] bg-[#1E1E1E] text-white  "
	// 	onDoubleClick={(e) => {
	// 		console.log("Double Clicked");
	// 	}}
	// 	onClick={() => {}}>
	// 	<CardHeader className="flex  text-left   justify-between p-4 bg-[#2D2D2D] rounded-xl">
	// 		<CardTitle className="text-lg   font-bold">{title}</CardTitle>
	// 		<div className="flex items-center border  justify-center gap-2">
	// 			<TurtleIcon className="w-6 h-6 text-[#F2994A] text-center" />
	// 			<ShellIcon className="w-6 h-6 text-[#F2994A] text-center" />
	// 		</div>
	// 	</CardHeader>
	// 	<CardContent className="p-4 rounded-xl">
	// 		<CardDescription className="text-sm text-[#BDBDBD]">
	// 			{description}
	// 		</CardDescription>
	// 		<div className="flex items-center justify-between mt-4">
	// 			<div className="flex items-center gap-2">
	// 				<CalendarIcon className="w-5 h-5 text-[#F2994A]" />
	// 				<span className="text-sm text-[#BDBDBD]">Due: {dueDate}</span>
	// 			</div>
	// 			<div className="flex items-center gap-2">
	// 				<FlagIcon className="w-5 h-5 text-[#F2994A]" />
	// 				<span className="text-sm text-[#BDBDBD]">{priority}</span>
	// 			</div>
	// 		</div>
	// 	</CardContent>
	// 	{/* <CardFooter className="flex items-center justify-between p-4 bg-[#2D2D2D] rounded-b-lg">
	// 		<Button
	// 			variant="outline"
	// 			size="sm"
	// 			className="text-[#F2994A] hover:bg-[#F2994A] hover:text-[#1E1E1E]">
	// 			Mark as Complete
	// 		</Button>
	// 		<Button
	// 			variant="outline"
	// 			size="sm"
	// 			className="text-[#F2994A] hover:bg-[#F2994A] hover:text-[#1E1E1E]">
	// 			Assign to Team
	// 		</Button>
	// 	</CardFooter> */}
	// </Card>

	return (
		<Card
			className="max-w-sm w-[350px] bg-[#1E1E1E] text-white"
			onDoubleClick={(e) => {
				console.log("Double Clicked");
			}}
			onClick={() => {}}>
			<CardHeader className="flex text-left justify-between  pt-0  bg-[#2D2D2D] rounded-xl">
				<CardTitle className="text-lg font-bold">
					<div
						className="  bg-[#242424] px-3   hover:bg-[#392020]   rounded-md"
						onClick={() => {
							//change the state
						}}>
						<svg
							className=" ml-auto"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="M20 6 9 17l-5-5" />
						</svg>
					</div>

					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)} // Make sure to define setTitle function
						className="bg-transparent border-none outline-none text-white"
					/>
				</CardTitle>
				<div className="flex items-center border justify-center gap-2">
					<TurtleIcon className="w-6 h-6 text-[#F2994A] text-center" />
					<ShellIcon className="w-6 h-6 text-[#F2994A] text-center" />
				</div>
			</CardHeader>
			<CardContent className="p-4 rounded-xl">
				<CardDescription className="text-sm text-[#BDBDBD]">
					<input
						value={description}
						onChange={(e) => setDescription(e.target.value)} // Make sure to define setDescription function
						className="bg-transparent border-none outline-none text-[#BDBDBD]"
					/>
				</CardDescription>
				<div className="flex items-center justify-between mt-4">
					<div className="flex items-center gap-2">
						<CalendarIcon className="w-5 h-5 text-[#F2994A]" />
						<span className="text-sm text-[#BDBDBD]">
							Date:{" "}
							<input
								type="text"
								value={dueDate}
								onChange={(e) => setDueDate(e.target.value)} // Make sure to define setDueDate function
								className="bg-transparent border-none outline-none text-[#BDBDBD]"
							/>
						</span>
					</div>
					<div className="flex items-center gap-2">
						<FlagIcon className="w-5 h-5 text-[#F2994A]" />
						<span className="text-sm text-[#BDBDBD]">
							<input
								type="text"
								value={priority}
								onChange={(e) => setPriority(e.target.value)} // Make sure to define setPriority function
								className="bg-transparent border-none outline-none text-[#BDBDBD]"
							/>
						</span>
					</div>
				</div>
			</CardContent>
			{/* Uncomment and define buttons as needed */}
			{/* <CardFooter className="flex items-center justify-between p-4 bg-[#2D2D2D] rounded-b-lg">
			<Button
				variant="outline"
				size="sm"
				className="text-[#F2994A] hover:bg-[#F2994A] hover:text-[#1E1E1E]">
				Mark as Complete
			</Button>
			<Button
				variant="outline"
				size="sm"
				className="text-[#F2994A] hover:bg-[#F2994A] hover:text-[#1E1E1E]">
				Assign to Team
			</Button>
		</CardFooter> */}
		</Card>
	);
}

function CalendarIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<rect width="18" height="18" x="3" y="4" rx="2" />
			<path d="M3 10h18" />
		</svg>
	);
}

function FlagIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
			<line x1="4" x2="4" y1="22" y2="15" />
		</svg>
	);
}

function ShellIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
		</svg>
	);
}

function TurtleIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
			<path d="M4.82 7.9 8 10" />
			<path d="M15.18 7.9 12 10" />
			<path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
		</svg>
	);
}
