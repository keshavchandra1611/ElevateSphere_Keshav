import { Card } from "flowbite-react";

const ProductDetails = () => {
  return (
    <div className="flex flex-wrap justify-center mx-20 mt-20 gap-x-10 gap-y-10">
      <Card className="border-none bg-dark max-w-sm h-52 text-center hover:animate-bounce">
      <h1 className="text-5xl font-bold tracking-tight text-white">
        COLLECT
      </h1>
      <p className="font-normal dark:text-gray-200">
      Gather essential data, insights, and resources that serve as the foundation for launching and shaping your project.
      </p>
    </Card>
    <Card className="bg-dark border-none max-w-sm h-52 text-center hover:animate-bounce ">
      <h1 className="text-5xl font-bold tracking-tight text-white">
        COLLABORATE
      </h1>
      <p className="font-normal dark:text-gray-200">
      Bring together diverse minds, ideas, and perspectives to create innovative solutions through seamless teamwork and open communication.
      </p>
    </Card>
    <Card className="bg-dark border-none max-w-sm h-52 text-center hover:animate-bounce">
      <h1 className="text-5xl font-bold tracking-tight text-white">
        ELEVATE
      </h1>
      <p className="font-normal dark:text-gray-200">
      Refine, enhance, and improve concepts and ideas, taking them to the next level of creativity and innovation.
      </p>
    </Card>
    <Card className="bg-dark border-none max-w-sm h-52 text-center hover:animate-bounce">
      <h1 className="text-5xl font-bold tracking-tight text-white">
        MANAGE
      </h1>
      <p className="font-normal dark:text-gray-200">
      Efficiently organize tasks, resources, and team efforts to maintain focus, productivity, and progress throughout the project.
      </p>
    </Card>
    <Card className="bg-dark border-none max-w-sm h-52 text-center hover:animate-bounce">
      <h1 className="text-5xl font-bold tracking-tight text-white">
        MEASURE
      </h1>
      <p className="font-normal dark:text-gray-200">
      Track performance, analyze outcomes, and assess data to ensure success and foster continuous growth and improvement.
      </p>
    </Card>
    </div>
  )
}

export default ProductDetails