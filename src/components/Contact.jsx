
import { SectionWrapper } from '../hoc';

function Contact() {
  return (
    <section id="contact" className="py-14 px-2 bg-[#18181b]">
      <div className="max-w-md mx-auto">
        <h2 className="font-black text-white text-[32px] sm:text-[40px] mb-10 text-center font-poppins uppercase tracking-tight">Contact</h2>
        <form action="https://formspree.io/f/meolwkrn" method="POST" className="flex flex-col gap-8 bg-[#23272f] p-8 rounded-2xl shadow-xl border border-[#23272f]">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-white text-lg font-bold mb-1">Your Name</label>
            <input id="name" type="text" name="name" required className="p-4 rounded-md bg-[#26272b] text-white text-lg border border-[#444] focus:border-blue-500 outline-none transition placeholder:text-white placeholder:tracking-wide" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-white text-lg font-bold mb-1">Email Address</label>
            <input id="email" type="email" name="email" required className="p-4 rounded-md bg-[#26272b] text-white text-lg border border-[#444] focus:border-blue-500 outline-none transition placeholder:text-white placeholder:tracking-wide" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-white text-lg font-bold mb-1">Message</label>
            <textarea id="message" name="message" required className="p-4 rounded-md bg-[#26272b] text-white text-lg border border-[#444] focus:border-blue-500 outline-none transition placeholder:text-white placeholder:tracking-wide resize-none" placeholder="Enter your message" rows="5" />
          </div>
          <button type="submit" className="mt-4 bg-blue-600 text-white py-3 px-8 rounded-md font-bold hover:bg-blue-700 shadow-md transition text-lg">Send</button>
        </form>
      </div>
    </section>
  );
}

export default SectionWrapper(Contact, 'contact');
