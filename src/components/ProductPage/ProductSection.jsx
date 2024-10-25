import { Button } from "flowbite-react";
import { Brain } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { ArrowsUpFromLine } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { Scale } from 'lucide-react';


const ProductSection = () => {
  return (
    <Button.Group className="flex flex-col space-y-5 items-center mt-20 mx-20">
      <Button className="w-80 border-none bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3">
        <Brain />
        COLLECT
      </Button>
      <Button className="w-80 border-none bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3">
        <Handshake />
        COLLABORATE
      </Button>
      <Button className="w-80 border-none bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3">
        <ArrowsUpFromLine />
        ELEVATE
      </Button>
      <Button className="w-80 border-none bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3">
        <Rocket />
        MANAGE
      </Button>
      <Button className="w-80 border-none bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3">
        <Scale />
        MEASURE
      </Button>
    </Button.Group>
  )
}

export default ProductSection