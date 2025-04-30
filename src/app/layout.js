export const metadata = {
  title: 'Mother’s Day Tribute Blog',
  description: 'A blog celebrating mothers everywhere with inspiring stories and tips.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}