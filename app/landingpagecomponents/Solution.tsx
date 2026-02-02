export function SolutionSection() {
    return (
      <section className="w-full py-24 px-6 bg-gradient-to-bl from-[#8CFF00]/70 to-[#C5FB85]">
        <div className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              One link that represents you.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              CampusID gives every student a clean public profile to showcase
              skills, projects, and campus involvement — without noise or pressure.
            </p>
            <div className="flex items-center mt-10">
                <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                <div className="w-full bg-white h-1"></div>
                <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
            </div>
          </div>
  
          <ul className="space-y-4 text-gray-700">

            {[
                "Public student profile you actually own",
                "Skills backed by real proof",
                "Clean project showcases",
                "Campus roles & activities",
                "A link you can share anywhere",

            ].map((solution,index)=>(
                <li className="border-[1.5px] border-[#28443F] flex gap-5 px-6 py-6 rounded-2xl bg-[#8CFF00]/30 text-lg" key={index}>
                <p className="font-medium">0{index+1}</p>
                <p>{solution}</p>
            </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  
