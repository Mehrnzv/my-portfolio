"use client";
import Image from "next/image";
import Link from "next/link";
import { GrGithub, GrLinkedin, GrInstagram } from "react-icons/gr";
import { MdMail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="grid md:grid-cols-2 py-24 gap-4" id="contact">
      <div>
        <h5 className="text-2xl font-bold my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="flex items-center gap-4">
          <Link
            title="mehrnzv@gmail.com"
            className="hover:text-purple-400"
            href="mailto:mehrnzv@gmail.com"
          >
            <MdMail size={30} />
          </Link>
          <Link
            className="hover:text-purple-400"
            href="https://github.com/Mehrnzv"
          >
            <GrGithub size={30} />
          </Link>
          <Link
            className="hover:text-purple-400"
            href="https://www.linkedin.com/in/mehrnzvaziri/"
          >
            <GrLinkedin size={25} />
          </Link>
          <Link
            className="hover:text-purple-400"
            href="https://www.instagram.com/mehrnzv"
          >
            <GrInstagram size={25} />
          </Link>
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <Image
          className="w-full"
          src="/images/contact.svg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ContactSection;
