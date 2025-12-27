import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumenis Partners | About",
};

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start justify-start pt-2 pb-32 px-6 bg-white dark:bg-black">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            About Us
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to our website. We are dedicated to providing quality services
            and building meaningful connections with our community.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Our mission is to deliver excellence in everything we do, fostering
            innovation and creating value for our clients and partners.
          </p>
        </div>
      </main>
    </div>
  );
}

