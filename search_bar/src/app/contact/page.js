import Navbar from "../../components/Navbar";
export default function ContactPage() {
  return (
    <>
    <Navbar/>
    <div className=" text-black m-4 h-screen rounded-2xl bg-white md:shadow-md p-4 items-start  mb-2  top-0 z-50">
      <h1 className="text-3xl font-bold m-4 p-auto text-center ">Contact Us</h1>
      <div className="md:grid md:grid-cols-2 md:overflow-hidden">
      <ul className=" m-4 p-4 shadow-2xl flex  justify-center  ">
        <li className="w-6 h-6 m-6"><img src="/insta.png"></img></li>
        <li className=" m-6 justify-baseline ">@instakiID</li>
      </ul>

      <ul className=" m-4 p-4 shadow-2xl flex  justify-center  ">
        <li className="w-6 h-6 m-6"><img src="/fb.jpg"></img></li>
        <li className=" m-6 justify-baseline ">@facebookakiID</li>
      </ul>
      
      <ul className=" m-4 p-4 shadow-2xl flex  justify-center  ">
        <li className="w-6 h-6 m-6"><img src="/linkedin.png"></img></li>
        <li className=" m-6 justify-baseline ">@LinkedinID</li>
      </ul>
      
      <ul className=" m-4 p-4 shadow-2xl flex  justify-center  ">
        <li className="w-8 h-6 m-6 "><img src="/x.png"></img></li>
        <li className=" m-6 justify-baseline">@XkiID</li>
      </ul>
      </div>
      
    </div>
    </>
  );
}

