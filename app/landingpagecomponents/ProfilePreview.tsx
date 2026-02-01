export function ProfilePreviewSection() {
    return (
      <section className="w-full py-6 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center">
            <div className="bg-white shadow-xl rounded-3xl w-80 p-6 border-gray-300 border">
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden">

                <img src="/avatar.jpg" alt="avatar" />
                </div>
              </div>
  
              {/* Name & School */}
              <h3 className="text-xl font-semibold mb-1">Samuel Aderogba</h3>
              <p className="text-gray-500 text-sm mb-4">University of Lagos • Computer Engineering</p>
  
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Figma", "Python"].map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#28443F] text-white text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
  
              {/* Projects */}
              <div className="space-y-2">
                {[
                  { title: "Campus Dashboard", tool: "React" },
                  { title: "Portfolio Website", tool: "Next.js" }
                ].map((proj, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-2 text-left">
                    <p className="font-medium text-sm">{proj.title}</p>
                    <p className="text-gray-500 text-xs">{proj.tool}</p>
                  </div>
                ))}
              </div>
  
              {/* Shareable link */}
              <button className="mt-6 bg-[#28443F] text-white px-4 py-2 rounded-full text-sm w-full">
                Share your CampusID
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  