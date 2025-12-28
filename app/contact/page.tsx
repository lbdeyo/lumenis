"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", phone: "", comment: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-start pt-5 pb-32 px-6 bg-white dark:bg-black">
        <div className="flex flex-col items-start gap-8 text-left w-full">
          <h1 className="text-5xl font-semibold leading-10 tracking-tight">
            Contact
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-2xl"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-lg text-zinc-950 dark:text-zinc-50"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-lg text-zinc-950 dark:text-zinc-50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-lg text-zinc-950 dark:text-zinc-50"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="comment"
                className="text-lg text-zinc-950 dark:text-zinc-50"
              >
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                rows={6}
                className="px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-500 resize-vertical"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`px-4 py-3 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 px-8 py-3 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 rounded-lg font-semibold transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
