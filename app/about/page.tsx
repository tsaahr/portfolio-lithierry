'use client';

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6 border-b-2 border-indigo-500 inline-block">About Me</h1>

      <p className="text-lg mb-6 leading-relaxed">
        I’m <strong>Lithierry da Silva Pereira</strong>, a passionate developer with experience in <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Supabase</strong>. I specialize in building high-performance, scalable web applications with clean and modern code.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        Currently, I’m focused on becoming a <strong>Salesforce Developer</strong>, diving deep into <strong>Apex</strong>, <strong>Lightning Web Components (LWC)</strong>, and platform administration. My journey bridges strong front-end foundations with the power of enterprise-grade Salesforce solutions.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I’m actively improving my skills in object-oriented programming and process automation, applying them through real-world projects and consistent practice.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-indigo-400">🛠️ Technical Skills:</h2>
        <ul className="list-disc list-inside space-y-1 text-lg">
          <li><strong>Front-end:</strong> Next.js, React, TypeScript, Tailwind CSS</li>
          <li><strong>Back-end & Database:</strong> Supabase, RESTful APIs, Node.js</li>
          <li><strong>Salesforce:</strong> Apex, LWC (in progress), Flow Automation</li>
          <li><strong>Tools & Methodologies:</strong> Git, SCRUM, API Integrations</li>
        </ul>
      </div>

      <p className="text-lg leading-relaxed">
        I’m currently at an intermediate level in Apex and Salesforce development, learning fast and building hands-on experience every day. I’m also committed to becoming more disciplined and productive in my workflow.
      </p>

      <p className="text-lg leading-relaxed mt-6">
        If you’re looking for a developer who combines clean code, adaptability, and a growth mindset — <span className="text-indigo-400 font-semibold">let’s connect!</span>
      </p>
    </section>
  );
}
