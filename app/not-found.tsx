import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>What happened!?</h2>
      <p>
        This page cannot be found. Please try again or{" "}
        <Link href="/">go home.</Link>
      </p>
    </div>
  );
}
