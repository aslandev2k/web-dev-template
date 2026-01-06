import { Button } from '@shadcn-ui/button';

export function App() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="font-medium bg-red-50 text-destructive/20 border border-destructive animate-in slide-in-from-top">
				Hello World
			</div>
			<Button>Hello</Button>
			<svg aria-hidden="true" className={'h-6 w-5 flex-none fill-destructive'} data-slot="icon" viewBox="0 0 20 20">
				<path
					clipRule="evenodd"
					d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
					fillRule="evenodd"
				/>
			</svg>
		</div>
	);
}

export default App;
