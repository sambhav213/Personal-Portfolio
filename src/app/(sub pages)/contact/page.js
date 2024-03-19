import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website&#39;s contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Reach out to me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello! Whether you have a project in mind, want to discuss potential partnerships, or simply wish to connect, I&#39;m here to listen. our feedback, questions, and ideas are always welcome, and I&#39;m excited to engage with you. Let&#39;s explore how we can work together to create meaningful connections and impactful projects. Looking forward to hearing from you soon!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
