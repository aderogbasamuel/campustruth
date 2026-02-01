export function WaitlistSection() {
    return (
      <section className="w-full py-24 px-6 bg-[#F7FAF9]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Claim your CampusID early.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-10">
            Early users get priority access, early features,
            and a say in how CampusID evolves.
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
  
          <p className="text-xs text-gray-500 mt-4">
            No spam. Just early access.
          </p>
        </div>
      </section>
    )
  }
  