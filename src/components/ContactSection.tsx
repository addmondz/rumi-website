"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { trackEvent } from "@/lib/gtag";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  message: z.string(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const text = encodeURIComponent(
      `Hi, I would like to request a free quote.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nProperty Type: ${data.enquiryType}\n\nProject Details:\n${data.message}`
    );
    trackEvent("form_submit", { form: "contact", property_type: data.enquiryType });
    window.open(`https://wa.me/60142068662?text=${text}`, "_blank");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f5fefa 50%, #e6fcf5 100%)",
      }}
    >
      {/* Decorative gradient orb */}
      <div className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-accent-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-accent-300/10 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 tracking-tight">
              Book a Demo Today
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how Rumi Solution can help your property. Reach out and
              we&apos;ll get back to you via WhatsApp.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <AnimateOnScroll className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100/80 ring-1 ring-gray-100">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-accent-50 text-accent-700 font-medium">
                  Thank you for your enquiry! We&apos;ll be in touch shortly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900"
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900"
                      placeholder="+60 12-345 6789"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Property Type
                    </label>
                    <select
                      id="enquiryType"
                      {...register("enquiryType")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 bg-white"
                    >
                      <option value="">Select type...</option>
                      <option value="Condominium">Condominium</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Estate">Estate</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.enquiryType && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.enquiryType.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all text-navy-900 resize-none"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-xl hover:shadow-accent-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll className="lg:col-span-2" delay={0.2}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100/80 ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:hello@rumisolution.com" onClick={() => trackEvent("contact_click", { method: "email" })} className="text-navy-900 font-medium hover:text-accent-600 transition-colors">
                        hello@rumisolution.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <a href="https://wa.me/60142068662?text=Hey%2C%20I%20am%20interested%20in%20your%20service" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("contact_click", { method: "whatsapp", location: "contact_details" })} className="text-navy-900 font-medium hover:text-accent-600 transition-colors">
                        014-206 8662
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100/80 ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">
                  Working Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Everyday</span>
                    <span className="text-navy-900 font-medium">
                      9:00 AM — 10:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl p-6 text-white shadow-lg shadow-accent-500/20">
                <h3 className="text-lg font-semibold mb-2">Need urgent help?</h3>
                <p className="text-accent-100 text-sm mb-4">
                  Reach us directly on WhatsApp for quick support.
                </p>
                <a
                  href="https://wa.me/60142068662?text=Hey%2C%20I%20am%20interested%20in%20your%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("contact_click", { method: "whatsapp", location: "urgent_help" })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-accent-700 font-semibold text-sm hover:bg-accent-50 transition-colors"
                >
                  WhatsApp Us
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
