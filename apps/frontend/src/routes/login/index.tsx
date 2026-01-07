import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from '@/routes/login/-components/LoginForm';

export const Route = createFileRoute('/login/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="max-w-md mx-auto mt-20">
			<LoginForm />
		</div>
	);
}
