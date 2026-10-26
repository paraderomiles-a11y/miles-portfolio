export default function Home() {
  return (
    <main className="min-h-screen bg-[#10110f] px-6 text-white sm:px-10 lg:px-20">
            <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 border-b border-white/10 py-6">
        <a href="#" className="text-xl font-bold tracking-tight">
          MP<span className="text-lime-400">.</span>
        </a>

        
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-300">
          <a href="#about" className="transition hover:text-lime-400">
            About
          </a>
          <a href="#interests" className="transition hover:text-lime-400">
            Interests
          </a>
          <a href="#education" className="transition hover:text-lime-400">
            Education
          </a>
          <a href="#skills" className="transition hover:text-lime-400">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-lime-400">
            Projects
          </a>
          <a href="#certificates" className="transition hover:text-lime-400">
            Certificates
          </a>
          <a href="#experience" className="transition hover:text-lime-400">
            Experience
          </a>
        </div>

  


        <a
          href="#contact"
          className="rounded-full border border-lime-400 px-5 py-2 text-sm font-medium text-lime-400 transition hover:bg-lime-400 hover:text-black"
        >
          Contact me ↗
        </a>
      </nav>
     
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-center py-20 text-center">

        <img
    src="/profile.png"
    alt="Miles Bulanda Paradero"
    className="mb-8 h-36 w-36 rounded-full border-2 border-lime-400 object-cover"
  />
        <p className="mb-6 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
          <span className="h-px w-8 bg-lime-400" />
          IT Student · Portfolio
        </p>

        <h1 className="max-w-4xl text-center text-5xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
          Hello, I&apos;m
          <br />
          Miles Paradero<span className="text-lime-400">.</span>
        </h1>
        <p className="text-sm text-gray-400 mt-3">
  Panabo City, Davao del Norte, Philippines
</p>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          A fourth-year Information Technology student at Davao del Norte
          State College, building my skills in web development and creating
          useful digital experiences.
        </p>
      
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="rounded-full bg-lime-400 px-7 py-3 font-semibold text-black transition hover:bg-lime-300"
          >
            Explore my portfolio ↓
          </a>

          <a
            href="https://github.com/paraderomiles-a11y"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-7 py-3 font-medium transition hover:border-lime-400"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
          About
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Learning, building, improving.
        </h2>
        <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
          To pursue an IT internship/OJT opportunity or an entry-level IT position where I can apply my academic knowledge, strengthen my technical and problem-solving skills, and gain practical experience in a professional environment. I aim to contribute to IT operations while continuously developing my abilities in technical support, computer systems, and networking.
        </p>
      </section>
      
      <section
        id="interests"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
         Career Interests
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Areas I&apos;m interested in.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">Web Development</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Building websites and user-friendly web experiences.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">Networking</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Learning about network configuration, connectivity, and infrastructure.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">Cybersecurity</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Exploring ways to protect systems, networks, and digital information.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-white">
              IT Support and Troubleshooting
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Diagnosing technical issues and helping maintain reliable computer systems.
            </p>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
          Education
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          My academic journey.
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-lime-400">
              2023 – Present
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Bachelor of Science in Information Technology
            </h3>
            <p className="mt-2 text-zinc-400">
              Davao del Norte State College
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Expected graduation: 2027
            </p>
            
            <p className="mt-3 text-sm font-medium text-lime-400">
              Academic Recognition: Dean&apos;s List — Multiple Semesters
            </p>

          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-lime-400">
              2021 – 2023
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Senior High School – ICT Strand
            </h3>
            <p className="mt-2 text-zinc-400">
              Panabo City National High School
            </p>
            <p className="mt-2 text-sm text-zinc-500">
            </p>
            
            <p className="mt-3 text-sm font-medium text-lime-400">
              Academic Recognition: With Honors
            </p>

          </div>
          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-lime-400">
              2017 – 2021
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Junior High School – Agriculture Strand
            </h3>
            <p className="mt-2 text-zinc-400">
              Sindaton National High School
            </p>
            <p className="mt-2 text-sm text-zinc-500">
            </p>
            
            <p className="mt-3 text-sm font-medium text-lime-400">
              Academic Recognition: With Honors
            </p>

          </div>
          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-lime-400">
              2012 – 2017
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Primary Education 
            </h3>
            <p className="mt-2 text-zinc-400">
              Sindaton Elementary School
            </p>
            <p className="mt-2 text-sm text-zinc-500">
            </p>
            
          </div>
        </div>
      </section>
           
      <section
        id="skills"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
          Technical Skills
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Tools and technologies I work with.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-lime-400">
              Programming & Web
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-lime-400">
              Tools & Version Control
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>Git</li>
              <li>Cisco Packet Tracer</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 p-5">
            <h3 className="font-semibold text-lime-400">
              IT & Networking
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>Computer hardware and troubleshooting</li>
              <li>Basic networking: IP addresses, routers, and switches</li>
              <li>Network configuration</li>
              <li>Windows and Linux operating systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
         Selected Projects
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Things I&apos;ve been building.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
          A collection of academic work and personal projects that demonstrate
          my growth as an Information Technology student.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-400/60">
            <p className="text-sm text-lime-400">PROJECT 01</p>
            <h3 className="mt-4 text-xl font-semibold">
              Personal CV Portfolio
            </h3>
            <p className="mt-3 leading-7 text-zinc-400">
              A personal website built to present my background, technical
              skills, coursework, and contact information.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
            <p className="mt-5 text-sm text-zinc-500">
              Completed
            </p>
          </article>

          <article className="rounded-2xl border border-dashed border-white/20 p-6">
            <p className="text-sm text-lime-400">PROJECT 02</p>
            <h3 className="mt-4 text-xl font-semibold">
              Suriin AI
            </h3>
            <p className="mt-3 leading-7 text-zinc-400">
              An Automated Multi-Layered Fraud Detection System.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "CSS", "HTML", "postgreSQL", "supabase", "manifest.json", "javascript", "flask"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
            <p className="mt-5 text-sm text-zinc-500">
              In progress
            </p>
          
          </article>
        </div>
      </section>


      
      <section
        id="certificates"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
          Certificates
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Learning and accomplishments.
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-lime-400">
              Completed December 1, 2025
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              CCNA: Switching, Routing, and Wireless Essentials
            </h3>
            <p className="mt-2 text-zinc-400">
              Davao del Norte State College
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Cisco Networking Academy program
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Instructor: Jonilyn Dabalos
            </p>
             <a
              href="/ccna-certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-lime-400 underline underline-offset-4 transition hover:text-lime-300"
            >
              View Certificate ↗
            </a>
          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-lime-400">
              Completed October 4, 2026
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Introduction to Cybersecurity
            </h3>
            <p className="mt-2 text-zinc-400">
              Networking Academy
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              Cisco Networking Academy program
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Awarded to Miles Paradero for successfully completing the course.
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Director: Lynn Bloomer
            </p>
            
            <a
              href="/introduction-to-cybersecurity.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-lime-400 underline underline-offset-4 transition hover:text-lime-300"
            >
              View Certificate ↗
            </a>

          </div>

          <div className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-lime-400">
              September 28–29, 2026
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              BSIT 413 Series Training: Artificial Intelligence for Innovation of Capstone Project
            </h3>

            <p className="mt-2 text-zinc-400">
              Davao del Norte State College
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Advanced Seminar Series for BSIT Fourth-Year Students
            </p>

            <a
              href="/ai-training.jpg"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-lime-400 underline underline-offset-4 hover:text-lime-300"
            >
              View Certificate ↗
            </a>
           
          </div>

        </div>
      </section>
      
      <section
        id="experience"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
          Experience
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          My work experience.
        </h2>

        <div className="mt-8 rounded-xl border border-white/10 p-6">
          
          <p className="text-sm text-lime-400">
            June – September 2024
          </p>


          <h3 className="mt-2 text-xl font-semibold">
            Cash-for-Work (CFW) Program Trainee
          </h3>

          <p className="mt-2 text-zinc-400">
            Campus Office
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-400">
            <li>Performed data encoding and clerical tasks.</li>
            <li>Assisted with routine office and administrative work.</li>
            <li>Helped organize and process office information and documents.</li>
          </ul>
        </div>
      </section>


      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-white/10 py-16"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
         Contact
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Let&apos;s connect.
        </h2>
        <a
          href="mailto:milesparadero@gmail.com"
          className="mt-6 inline-block text-lg text-lime-400 underline underline-offset-4"
        >
          milesparadero@gmail.com
        </a>
        <a
          href="tel:+639941894668"
          className="mt-3 block text-lg text-lime-400 underline underline-offset-4"
        >
          09941894668
       </a>
        <div className="mt-5">
          <a
            href="https://www.linkedin.com/in/miles-paradero-ab904a447/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition hover:text-lime-400"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl border-t border-white/10 py-6 text-sm text-zinc-500">
       © 2026 Miles Paradero. Built with Next.js.
      </footer>
    </main>
  );
}