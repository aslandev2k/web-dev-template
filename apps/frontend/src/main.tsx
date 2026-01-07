import { createRouter, RouterProvider } from '@tanstack/react-router';
import { createRoot } from 'react-dom/client';
import '@/css/tailwind.css';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
	routeTree,
	// defaultPreload: "intent",
	// defaultPendingComponent: SuspenseLoader,
	// defaultErrorComponent: ErrorComponent,
	// defaultGcTime: 0,
	// defaultPendingMs: 0,
	// defaultPreloadStaleTime: 0,
});

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
