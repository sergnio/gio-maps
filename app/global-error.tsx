"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>What in tarnation!</h2>
        <p>Something went awry.</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
