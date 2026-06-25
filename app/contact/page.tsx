"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  description: yup.string().required("Please describe your project"),
  budget: yup.array().min(1, "Select at least one budget range").required(),
});

const budgetOptions = [
  "1,00,000 - 5,00,000",
  "5,00,000 - 10,00,000",
  "10,00,000 - 20,00,000",
  "20,00,000 - 50,00,000",
  "50,00,000 +",
];

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: {}) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-white py-16 my-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side: Form */}
        <div className="flex-1">
          <h2 className="text-3xl text-gray-600 font-bold mb-2">
            INFORMATION ABOUT YOUR PROJECT
          </h2>
          <p className="text-gray-600 mb-8">
            This helps us prepare for the meeting so we can have a productive
            discussion about your interior design work.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name*"
                  className="w-full border border-gray-400 text-gray-500 p-4 outline-none focus:border-black"
                />
                <p className="text-red-500 text-xs">{errors.name?.message}</p>
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Your Phone Number*"
                  className="w-full border border-gray-400 text-gray-500 p-4 outline-none focus:border-black"
                />
                <p className="text-red-500 text-xs">{errors.phone?.message}</p>
              </div>
            </div>

            <input
              {...register("email")}
              placeholder="Your Email Address*"
              className="w-full border border-gray-400 text-gray-500 p-4 outline-none focus:border-black"
            />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>

            <textarea
              {...register("address")}
              placeholder="Your Address*"
              rows={3}
              className="w-full border border-gray-400 text-gray-500 p-4 outline-none focus:border-black"
            />
            <p className="text-red-500 text-xs">{errors.address?.message}</p>

            <textarea
              {...register("description")}
              placeholder="Please Briefly Describe Your Project*"
              rows={4}
              className="w-full border border-gray-400 text-gray-500 p-4 outline-none focus:border-black"
            />
            <p className="text-red-500 text-xs">
              {errors.description?.message}
            </p>

            <div>
              <p className="font-semibold mb-3 text-gray-500">
                What is your estimated budget?*
              </p>
              <div className="grid grid-cols-1 gap-2 text-gray-500">
                {budgetOptions.map((budget) => (
                  <label key={budget} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={budget}
                      {...register("budget")}
                      className="w-4 h-4"
                    />{" "}
                    {budget}
                  </label>
                ))}
              </div>
              <p className="text-red-500 text-xs">{errors.budget?.message}</p>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-black text-white px-8 py-3 font-bold w-full hover:bg-[#D4AF37] transition-colors"
            >
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
          </form>
        </div>

        {/* Right Side: Details (Static) */}
        <div className="lg:w-[500px] bg-[#1a1a1a] text-white p-8">
          {/* ... তোমার আগের ডিজাইন কোড এখানে থাকবে ... */}
          <div className="lg:w-[400px] bg-[#1a1a1a] text-white p-8">
            <h3 className="text-yellow-600 text-sm tracking-widest mb-4">
              [ OUR CONTACT DETAILS ]
            </h3>
            <h2 className="text-3xl font-light mb-6">Let's Start a Project</h2>
            <p className="text-gray-400 mb-8">
              Contact us to set up an appointment so that we can embark on our
              design journey together. We are only a call away!
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-yellow-600 font-bold">OUR ADDRESS:</p>
                <p>
                  House 14, Road 6/a, Sector 5, Uttara, Dhaka-1230, Bangladesh
                </p>
              </div>
              <div>
                <p className="text-yellow-600 font-bold">OUR MAILBOX:</p>
                <p>info@zeroinchinteriorsltd.com</p>
              </div>
              <div>
                <p className="text-yellow-600 font-bold">OUR PHONE:</p>
                <p>01816-089804</p>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-8">
              <h4 className="text-xl font-bold mb-4">USA Office</h4>
              <p className="text-sm">Phone Number: +1 (817) 203 1514</p>
              <p className="text-sm">
                Address: 1506 Huntsman Ridge Ln, Arlington, Texas. USA
              </p>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-8">
              <h4 className="text-xl font-bold mb-4">UK Office</h4>
              <p className="text-sm">Phone number: +44 07448445738</p>
              <p className="text-sm">
                Address: Unit -B12, London, United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
