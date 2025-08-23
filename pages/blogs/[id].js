import { useRouter } from "next/router";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Temporary mock blog data (later replace with Firestore or Admin dashboard input)
  const blogData = {
    1: {
      title: "The Founder’s Blindspot: Why Your Content Isn’t Converting",
      date: "Aug 2025",
      content: `
        Most founders think visibility = growth. But showing up without sharpening 
        your voice is like shouting in a crowded room. In this article, we break 
        down the founder blindspot and how to turn attention into actual recall.
        
        🔹 The hidden traps in "posting for the sake of posting"
        🔹 Why founders confuse consistency with clarity
        🔹 The system to sharpen your POV until it sticks
      `,
    },
    2: {
      title: "Narrative Architecture: Turning Stories into Systems",
      date: "Jul 2025",
      content: `
        Good storytelling gets attention. Great storytelling builds memory. 
        Narrative Architecture is how we turn scattered stories into a repeatable 
        growth engine.
        
        ✅ Map your founder narrative into themes
        ✅ Design editorial pillars that compound
        ✅ Create scalable clarity with every post
      `,
    },
    3: {
      title: "The Craft of Conversion: From POV to Pipeline",
      date: "Jun 2025",
      content: `
        Your POV is your moat. It’s not just branding fluff—it’s a sales multiplier. 
        In this piece, we show how to transform thought leadership into pipeline.
        
        🔹 POV → Positioning → Pipeline
        🔹 Using narrative friction to build authority
        🔹 Crafting offers that sound irresistible
      `,
    },
  };

  const blog = blogData[id];

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <article className="container">
      <h1>{blog.title}</h1>
      <p><i>{blog.date}</i></p>
      <div className="content">
        {blog.content.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      <a href="/blogs" className="back-link">← Back to Blogs</a>

      <style jsx>{`
        .content p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .back-link {
          display: inline-block;
          margin-top: 2rem;
          color: #0070f3;
          text-decoration: none;
        }
      `}</style>
    </article>
  );
}
