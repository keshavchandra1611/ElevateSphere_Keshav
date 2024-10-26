import gif1 from "../../assets/gif1.mp4";
import gif2 from "../../assets/gif2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center lg:mx-15">
        Fueling Global Innovation
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          with AI and Collective Intelligence!
        </span>
      </h1>

      <p className="mt-10 text-xl text-center text-neutral-500 max-w-4xl">
      An AI-powered platform enabling global collaboration, crowdsourcing, idea refinement, real-time feedback, and cross-industry innovation.
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          GET STARTED
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          LEARN MORE
        </a>
      </div>

      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={gif1} type="video/mp4" />
          Oops! Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={gif2} type="video/mp4" />
          Oop! Your browser does not support the video tag.
        </video>
      </div>

    </div>
  )
}

export default HeroSection