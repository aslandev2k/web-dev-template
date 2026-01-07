import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="block w-dvw h-dvh relative overflow-x-hidden bg-blue-50">
			<Outlet />
		</div>
	);
}
