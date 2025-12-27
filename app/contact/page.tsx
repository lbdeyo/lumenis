import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumenis Partners | Contact",
};

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-start justify-start pt-2 pb-32 px-6 bg-white dark:bg-black">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            Contact Us
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            We&apos;d love to hear from you. Get in touch with us through any of
            the following methods.
          </p>
          <div className="flex flex-col gap-4 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-medium text-zinc-950 dark:text-zinc-50">
                Email:
              </span>{" "}
              contact@example.com
            </p>
            <p>
              <span className="font-medium text-zinc-950 dark:text-zinc-50">
                Phone:
              </span>{" "}
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
