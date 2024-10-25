import {features} from "../../content/data.jsx";

const FeaturesSection = () => {
  return(
    <div className="relative mt-20">
      
      <div className="text-center">
        <span className="text-orange-500 h-6 text-xl font-large px-2 py-1 uppercase">
          FEATURES AND FUNCTIONALITY
        </span>
        <h5 className="text-2xl sm:text-5xl lg:text-5xl mt-7 lg:mt-15 tracking-wide">
          Designed to Save{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Time and Maximize Impact!
          </span>
        </h5>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20 lg:mx-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default FeaturesSection