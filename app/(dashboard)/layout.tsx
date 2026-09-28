import Sidebar from "@/components/For-You/Sidebar/Sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Sidebar />
			<main className="ml-50">{children}</main>
		</>
	);
}
