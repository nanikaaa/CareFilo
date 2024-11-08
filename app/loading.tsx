import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex-center size-full h-screen gap-3 text-white">
      <Image
        src="/assets/icons/.svg"
        alt=""
        width={40}
        height={3240}
        className="animate-spin"
      />
      Loading...
    </div>
  );
}
