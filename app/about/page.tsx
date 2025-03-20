'use client';

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6 border-b-2 border-indigo-500 inline-block">
        About Me
      </h1>

      <p className="text-lg mb-6 leading-relaxed">
        From a young age, I’ve always been curious about how things work. That curiosity has
        followed me throughout life and eventually led me to discover my place in technology.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I started learning programming on my own — experimenting, breaking things, and rebuilding.
        Even though I haven't worked professionally yet, I’ve already participated in real projects,
        like developing a full e-commerce platform and collaborating on websites for others. For me,
        each line of code is a way to bring ideas to life and solve real problems creatively.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I’m driven by purpose and see tech as a tool to positively impact lives. I love the freedom
        of creating from scratch, learning something new every day, and constantly evolving.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I’m currently studying <strong>Systems Analysis and Development</strong> and diving deeper
        into web development with <strong>React/Next.js</strong>, while also exploring the
        Salesforce ecosystem. I balance my routine between studies, work, personal projects, and
        preparing for an exchange experience in Ireland — where I hope to grow both personally and
        professionally.
      </p>

      <p className="text-lg mb-6 leading-relaxed">
        I'm actively looking for my first opportunity in tech — ready to learn, collaborate, and
        deliver with responsibility. I believe that more than just mastering tools, what truly
        matters is the will to grow, the ability to communicate, and the openness to build things
        together.
      </p>

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
