import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Little Soldiers Family DayCare Logo"
      width={200}
      height={200}
      className={className}
    />
  );
}
