import Navbar from "../../components/Navbar";
const supremeLeader=[
    {
     name: "Shahnil",
     image: "/shahnil.jpg"
  }
]
const teamMembers = [
  
  {
    ...supremeLeader[0],
    role: "CEO",
    bio: "Shahnil is the visionary leader driving our company forward with passion and dedication."
  },
  {
    ...supremeLeader[0],
    role: "CTO",
    bio: "Shahnil leads our technology team, ensuring we use the best tools and practices."
  },
  {
    ...supremeLeader[0],
    role: "Marketing Head",
    bio: "Shahnil crafts our brand message and connects us with our customers."
  }
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="text-black m-4 h-auto rounded-2xl bg-white md:shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold m-4 p-auto text-center mb-6">About Us</h1>
        <p className="max-w-4xl mx-auto text-center mb-6">
          Welcome to our company! We are dedicated to providing the best products and services to our customers. Our team is passionate about quality, innovation, and customer satisfaction. We believe in building lasting relationships with our clients and continuously improving to meet their needs.
        </p>

        <h2 className="text-2xl font-semibold text-center mb-6">Meet the Team</h2>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center mb-6 md:mb-0">
              <img
                src={member.image}
                alt={member.image}
                className="w-28 h-28 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-green-600 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
