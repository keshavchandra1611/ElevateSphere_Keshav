import { people } from "../../content/data"

const OurTeam = () => {
  return (
    <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            MEET OUR TEAM
          </h1>
          <p className="mt-6 text-lg font-semibold text-neutral-300">
          We're an enthusiastic team of innovators committed to our craft and driven to achieve meaningful outcomes.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-orange-400">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OurTeam