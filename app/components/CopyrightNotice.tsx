import Link from "next/link";

export default function CopyrightNotice({ className }: { className?: string }) {
  return (
    <div
      className={`content-container mx-auto flex justify-between items-center py-8 text-lg ${className}`}
    >
      <div>Copyright 2023</div>
      <div>
        <Link
          href="https://github.com/ivano-uglik"
          target="_blank"
          className="hover:text-gray-500 transition-all py-8"
        >
          Ivano did it!
        </Link>
      </div>
    </div>
  );
}
