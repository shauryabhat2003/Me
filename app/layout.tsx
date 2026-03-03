import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Shaurya Bhatnagar | Portfolio',
    description: 'Portfolio of Shaurya Bhatnagar, Software Engineer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
