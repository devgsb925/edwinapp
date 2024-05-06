import Link from "next/link";

const imageUrls = [
  'https://utfs.io/f/70d60a55-2b63-43aa-b193-91ea2a9a31ba-gd5sdn.png'
]

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      Hello Homepage
      <img src={imageUrls[0]} alt="image" />
    </main>
  );
}
