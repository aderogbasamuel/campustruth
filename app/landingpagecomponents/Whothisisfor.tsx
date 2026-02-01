export function WhoThisIsForSection() {
    return (
      <section className="w-full py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
            Built for every kind of student
          </h2>
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-gray-700">
            {[
              "Designers showcasing their work",
              "Developers sharing projects",
              "Writers, researchers, and creatives",
              "Student leaders and volunteers",
              "Anyone building something during school"
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  