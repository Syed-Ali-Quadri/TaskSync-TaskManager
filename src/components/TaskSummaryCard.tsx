import { Card, CardContent } from "@/components/ui/card";

export function TaskSummaryCard({ title, count, icon, color }) {
	return (
		<Card className="border-0 shadow-sm">
			<CardContent className="p-6">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium text-muted-foreground mb-1">
							{title}
						</p>
						<h3 className="text-3xl font-bold">
							{count}
						</h3>
					</div>
					<div className={`p-3 rounded-full ${color} bg-opacity-15`}>
						<div className={`${color.replace("bg-", "text-")}`}>
							{icon}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
