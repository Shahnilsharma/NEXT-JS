export default function Contact({ params }) {
    if (params.id === "shahnil") {
      return <h1>Employee: Shahnil</h1>;
    } else if (params.id === "hassan") {
      return <h1>Employee: Hassan</h1>;
    } else {
      return <h1>Employee Not Found</h1>; // handle unknown IDs
    }
  }
  