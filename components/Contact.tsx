"use client";

import Image from "next/image";
import rightArrow from "../public/assets/right-arrow-white.png";
import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult("Sending...");
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form submitted successfully!");
      form.reset();
      console.log(result);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] bg-[url('/footer-bg-color.png')] dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg !font-ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl !font-ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 !font-ovo"
      >
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="bg-white dark:bg-darkHover/30 dark:border-white/90 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white dark:bg-darkHover/30 dark:border-white/90 flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="bg-white dark:bg-darkHover/30 dark:border-white/90 w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6"
          rows={6}
          name="message"
          placeholder="Enter your message"
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now
          <Image src={rightArrow} alt="arrow" className="w-4" />
        </motion.button>
        <p className="mt-4 text-center">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
