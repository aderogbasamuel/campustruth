export function FeaturesSection() {
    return (
      <section className="w-full py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
            Show more than just your name.
          </h2>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Skills",
                text: "List what you’re good at and link real proof of work."
              },
              {
                title: "Projects",
                text: "Showcase school work, side projects, or experiments."
              },
              {
                title: "Campus Life",
                text: "Clubs, leadership roles, volunteering, competitions."
              },
              {
                title: "Shareable Profile",
                text: "One clean link for applications, bios, and intros."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition"
              >
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  