import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: RouteComponent,
	beforeLoad(ctx) {
		throw redirect({ to: '/login' });
	},
});

function RouteComponent() {
	return <div>Hello "/"!</div>;
}
