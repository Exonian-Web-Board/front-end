import Image from "next/image";

export default function RowPreviewWithImage() {
	return (
		<div className="w-full flex items-center py-3 border-neutral-300 border-b gap-4">
			<div className="w-2/5">
				<Image
					src={"/Small.png"}
					width="0"
					height="0"
					sizes="25vw"
					className="w-full h-auto"
					alt={"Logo of The Exonian"}
				/>
			</div>
			<div className="flex flex-col flex-wrap">
				<div className="w-full pr-3">
					<h3 className="font-bold font-sans bg-gradient-to-r from-[#B40A0A] to-[#f71e1e] inline-block text-transparent bg-clip-text">
						Life
					</h3>
					<h1 className="font-serif font-medium text-xl">
						Why Monkeys are Clearly More Monkey Than They Appear
					</h1>
				</div>
				<div className="py-2">
					<p className="text-xs text-[#4E4E4E]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. At erat pellentesque adipiscing commodo
						elit at. Accumsan in nisl nisi scelerisque eu ultrices
						vitae auctor eu.
					</p>
				</div>
				<div className="font-sans">
					<p className="text-xs text-[#6C6C6C]">By: Byran Huang</p>
					<p className="text-xs text-[#6C6C6C]">10/12/23</p>
				</div>
			</div>
		</div>
	);
}
