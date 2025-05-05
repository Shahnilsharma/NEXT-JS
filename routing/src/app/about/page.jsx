// app/about/[id]/page.jsx

export default function AboutPage({ params }) {
    return (
      <div>
        <h1>About ID: {params.id}</h1>
      </div>
    );
  }
  