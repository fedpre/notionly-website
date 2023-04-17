import { Metadata } from 'next';
import App from '@/components/App';

export const metadata: Metadata = {
  title: 'Notionly | Home',
  description: 'Unleash the power of Notion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <App>
          { children }
        </App>
      </body>
    </html>
  );
}
