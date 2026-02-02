import Image from "next/image"
import Navbar from "../components/Navbar"
import { ProfilePreviewSection } from "./ProfilePreview"
export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center p-6 w-full hero-section section banner">
             <div className="banner-overlay">
         <span className="blob blob-gradient-1"></span>
         <span className="blob blob-gradient-2"></span>
         <span className="blob blob-gradient-3"></span>
         <span className="blob blob-gradient-4"></span>
      </div>
            <Navbar />
            <section className="items-center justify-center py-12 text-left max-w-5xl grid sm:grid-cols-2 banner-content">
                <div className="flex flex-col py-0 sm:py-12 sm:px-0">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-4 max-w-4xl">
                        Your student identity, finally in one place.

                    </h1>
                    <p className="text-sm sm:text-lg mb-8">
                        CampusID helps students showcase their skills, projects, and campus life with a clean public profile.
                        No noise. No pressure. Just proof of who you are and what you can do.

                    </p>

                    <form className="flex gap-2 border border-[#28443F] rounded-full p-1 w-full max-w-[400px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className=" ps-4 py-2 bg-transparent outline-none w-full"
                        />
                        <button className="bg-[#28443F] w-fit    text-white text-sm px-4 py-2 rounded-full flex-shrink-0 text-nowrap">
                            Join Waitlist
                        </button>
                    </form>
                    <p className="pt-4 text-black">1,200+ students joined in the first week.</p>
                </div>
                <div className="relative w-full h-full mt-10 sm:mt-0">
                    {/* <Image src={"/hero.svg"} width={500} height={600} priority alt="hero image" className="w-full object-cover h-fit" /> */}
                    <ProfilePreviewSection/>
                </div>
            </section>
        </div>
    )
}