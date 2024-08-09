export default function Layout({
  children,
  pageA,
  pageB,
}: {
  children: React.ReactNode;
  pageA: React.ReactNode;
  pageB: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-4">
      {children}
      <div className="flex bg-gray-400 w-full gap-2 p-2">
        {pageA}
        {pageB}
      </div>
    </main>
  );
}
