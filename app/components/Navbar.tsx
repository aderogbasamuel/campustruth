import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="w-full max-w-5xl">
            <div className="bg-[#F3F3F3] rounded-full w-full px-4 sm:px-10 py-2 sm:py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image src={"/logo.svg"} alt="logo" width={50} height={50}/>
                    <p className="text-[#28443F] text-xl font-bold">CampusTruth</p>
                </div>
                <div className="gap-3 hidden sm:flex">
                    {["Home","Feature", "Benefits", "Faqs"].map((navlink,index)=>(
                        <a href={`#${navlink}`} key={index}>{navlink}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}
