import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center">
      <h1>Welcome to Viriditas</h1>
      <Image
        src="/assets/logo/logo.png"
        alt="Viriditas Logo"
        width={200}
        height={200}
      />
    </div>
  );
}
