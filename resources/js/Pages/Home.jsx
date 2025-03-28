import { Link } from "@inertiajs/react";
import { FaShieldAlt, FaCheckCircle, FaGlobe, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import ExperiencesSlider from "@/Components/ExperiencesSlider";

export default function Home() {
  return (
    <div className="bg-white text-[#3A3A3A]">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white max-w-[90%] md:max-w-[80%] mx-auto">
        <div className="flex flex-1 justify-center md:justify-start">
          <Link href="/">
            <img src="/images/logo.png" width="80" alt="logo" />
          </Link>
        </div>

        <Link
          className="hidden md:flex items-center justify-center gap-2 text-sm border border-[#ED1D24] shadow bg-[#ED1D24] hover:bg-[#ED1D24] text-white font-medium rounded-full px-6 py-4 transition-all hover:scale-105 w-auto"
          href="/submit"
        >
          What has been your experience?
        </Link>
      </header>

      {/* Main Section */}
      <section className="relative flex flex-col md:flex-row items-center gap-6 max-w-[80%] mx-auto pb-0 pt-4">
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-3 h-3 md:w-4 md:h-4 bg-[#ED1D24] rounded-full animate-glow" />
          <div className="absolute top-20 left-[40%] w-3 h-3 md:w-4 md:h-4 bg-[#166E38] rounded-full animate-glow delay-1000" />
          <div className="absolute bottom-10 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-black rounded-full animate-glow delay-2000" />
          <div className="absolute bottom-20 right-10 w-3 h-3 md:w-4 md:h-4 bg-[#ED1D24] rounded-full animate-glow delay-1500" />
          <div className="absolute top-5 right-5 w-3 h-3 md:w-4 md:h-4 bg-[#166E38] rounded-full animate-glow delay-500" />
        </div>
        <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left">
          <h2 className="text-gray-600 text-md md:text-lg mb-1">#SiasaYaID</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            Your ID Process Experience
          </h1>
          <p className="text-gray-700 max-w-xl mx-auto md:mx-0">
            An ID isn’t just an official document—it’s your key to security, opportunities, and freedom.
          </p>

          <div className="mt-6 flex flex-col md:flex-row md:flex-wrap gap-2">
            <Link className="inline-flex items-center justify-center text-sm bg-[#ED1D24] text-white px-4 py-3 rounded-full" href="/submit">
              What did you like? 👍🏾
            </Link>
            <Link className="inline-flex items-center justify-center text-sm bg-black text-white px-4 py-3 rounded-full" href="/submit">
              What didn’t you like? 👎🏾
            </Link>
            <Link className="inline-flex items-center justify-center text-sm bg-white border border-[#166E38] text-[#166E38] px-4 py-3 rounded-full" href="/experiences">
              Hear from others 📢
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex justify-center">
          <img src="/images/kenya.png" width="200" alt="Information" />
        </div>
      </section>

      {/* Experience Slider */}
      <ExperiencesSlider />

      {/* Footer */}
      <footer className="p-8 text-center bg-gray-50 w-full mx-auto">
        Siasa Place &copy; 2025
      </footer>
    </div>
  );
}
