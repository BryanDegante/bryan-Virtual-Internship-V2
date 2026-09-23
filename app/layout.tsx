import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/redux/Provider';

export const metadata: Metadata = {
	title: 'Summarist',
	description: 'Summarist',
};

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
