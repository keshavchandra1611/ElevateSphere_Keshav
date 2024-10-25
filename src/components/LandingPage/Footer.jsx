import { resourcesLinks, platformLinks, communityLinks } from  "../../content/data"
import { Button, Label, TextInput } from "flowbite-react";
import { Alert } from "flowbite-react";

const Footer = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key","/* API_KEY */");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
                <span className="font-medium">MAIL SENT SUCESSFULLY!</span> We will try to resolve your query as soon as possible. Thanks!
            </Alert>
        }
    }

  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 mx-10">
      <div className="grid grid-cols-3 lg:grid-cols-4">

        <div>
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">RESOURCES</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">PLATFORM</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">COMMUNITY</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex max-w-md flex-col gap-4 lg:-ml-20 md:block">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">CONTACT US</h3>
       
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="small" value="FULL NAME" className="text-neutral-500" />
                </div>
                <TextInput id="small" type="text" sizing="sm" name="name" required/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="base" value="EMAIL ADDRESS" className="text-neutral-500" />
                </div>
                <TextInput id="base" type="text" sizing="md" name="email" required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="large" value="YOUR MESSAGE" className="text-neutral-500"/>
                </div>
                <TextInput id="large" type="text" sizing="lg" name="message" required />
            </div>
            <Button type="submit" onClick={onSubmit} className="border-0 mt-3 bg-gradient-to-r from-orange-500 to-orange-800">SEND MESSAGE</Button>
        </div>

      </div>
    </footer>
  )
}

export default Footer