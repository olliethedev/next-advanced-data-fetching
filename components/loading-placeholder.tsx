interface LoadingPlaceholderProps {
  message: string;
}
export function LoadingPlaceholder({ message }: LoadingPlaceholderProps) {
  return (
    <div className="grow text-center min-h-40 flex items-center justify-center bg-yellow-950">
      {message}
    </div>
  );
}
