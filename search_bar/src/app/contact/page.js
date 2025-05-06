import Navbar from "../../components/Navbar";
export default function ContactPage() {
  return (
    <>
    <Navbar/>
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>
        <ul>
            <li>Phone: +923199318897</li>
            <li>Email: Shahnilsharma@duck.com</li>
        </ul>
      </p>
    </div>
    </>
  );
}

