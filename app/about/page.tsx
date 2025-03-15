'use client';

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6 border-b-2 border-indigo-500 inline-block">About Me</h1>

      <p className="text-lg mb-6 leading-relaxed">
        Hi! I’m <strong>Lithierry da Silva Pereira</strong>, a 25-year-old Brazilian full-stack developer from Rio Grande, RS. I’m passionate about transforming ideas into efficient and scalable digital solutions.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I’m currently pursuing a degree in <strong>Systems Analysis and Development</strong> while diving deep into the Salesforce ecosystem — focusing on <strong>Apex</strong>, <strong>Lightning Web Components (LWC)</strong>, and process automation. On Trailhead, I’ve earned over 14,650 points, reflecting my commitment to continuous learning.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-400">🛠️ Technical Skills:</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li><strong>Front-end:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
          <li><strong>Back-end & Database:</strong> Supabase, RESTful APIs, Node.js</li>
          <li><strong>Salesforce:</strong> Apex, Flow Automation, LWC (in progress)</li>
          <li><strong>Tools & Practices:</strong> Git, Agile (SCRUM), API Integrations</li>
        </ul>
      </div>

      <p className="text-lg mb-6 leading-relaxed">
        I’m a curious and determined problem-solver who loves building, automating, and bringing ideas to life. While I’m currently looking for my first professional opportunity in tech, I already have hands-on experience through personal projects and I’m eager to grow, contribute, and keep evolving.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-400">🌍 Availability:</h2>
        <p className="text-lg leading-relaxed">
          Open to remote or freelance roles, with availability for international projects. I also plan to move to Ireland soon for a study and work experience.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-400">🌐 Languages:</h2>
        <p className="text-lg leading-relaxed">
          Native Portuguese speaker | English: Intermediate (reading), beginner in writing and listening — currently improving my communication through daily practice.
        </p>
      </div>

      <p className="text-lg leading-relaxed mt-6">
        If you’re looking for a developer with clean code, adaptability, and a growth mindset —{' '}
        <a
          href="https://wa.me/5553991799058?text=Ol%C3%A1,%20Lithierry!%20Vi%20seu%20portf%C3%B3lio%20e%20me%20interessei%20pelo%20seu%20trabalho."
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold underline hover:text-indigo-300 transition-colors"
        >
          let’s connect!
        </a>
      </p>
    </section>
  );
}
