import profileImage from "./image.jpeg";
const profile = {
  name: "Mohammed Ayan",
  shortName: "Ayan",
  role: "AI & Data Science Student",
  location: "India",
  intro:
    "I enjoy exploring technology, solving problems, and building useful digital experiences.",
  about:
    "I'm a student passionate about technology and continuous learning. I enjoy turning ideas into projects and improving my skills one step at a time.",
  email: "your.email@example.com",
  github: "https://github.com/YOUR-USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR-USERNAME/",
  profileImage: "/profile.jpg",
};

const skills = [
  { category: "Programming", items: ["Python", "JavaScript", "C"] },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "Next.js", "Tailwind CSS"],
  },
  { category: "AI & Data", items: ["Python for Data", "NumPy", "Pandas"] },
  { category: "Tools", items: ["VS Code", "Git", "GitHub", "Figma", "WordPress"] },
];

const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    description:
      "A personal website to showcase my skills, projects, and learning journey.",
    tags: ["HTML", "Tailwind CSS"],
    image: "",
    github: "https://github.com/YOUR-USERNAME/YOUR-REPO",
    demo: "",
    type: "WEB DEVELOPMENT",
  },
  {
    number: "02",
    title: "Amazon Prime Video Clone",
    description:
      "I make a Amazon Prime Video clone usinG HTML & CSS.",
    tags: ["HTML", "CSS"],
    image: "",
    github: "https://github.com/YOUR-USERNAME/YOUR-REPO",
    demo: "",
    type: "Frontend",
  },
  {
    number: "03",
    title: "Spa Website",
    description:
      "I make a forntend of a Spa website using only HTML & CSS.",
    tags: ["HTML", "CSS",],
    image: "",
    github: "https://github.com/YOUR-USERNAME/YOUR-REPO",
    demo: "",
    type: "Frontend",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#B85F43]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#202124] sm:text-4xl">
        {title}
        {/* <span className="text-[#D97757]">.</span> */}
      </h2>
      <p className="mt-4 leading-7 text-[#6B625A]">{description}</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#E3D9CD] bg-[#FCFAF7] transition-all duration-300 hover:-translate-y-1 hover:border-[#D97757]/60 hover:shadow-xl hover:shadow-[#76513D]/10">
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#E8DED1]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#F1E7DB] to-[#E2D0BD] p-6">
            <span className="font-serif text-6xl text-[#D97757]/80">
              {project.number}
            </span>
            <span className="mt-3 text-xs font-semibold tracking-[0.2em] text-[#795D4B]">
              PROJECT PREVIEW
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-[#F8F5F0]/90 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#795D4B] backdrop-blur-md">
          {project.type}
        </span>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-[#202124]">
            {project.title}
          </h3>
          <span className="font-serif text-sm text-[#B5A18E]">
            {project.number}
          </span>
        </div>

        <p className="min-h-16 text-sm leading-6 text-[#6B625A]">
          {project.description}
        </p>

        <div className="my-5 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={`rounded-md border px-3 py-1.5 text-xs font-medium ${
                index % 2 === 0
                  ? "border-[#E5C8B9] bg-[#F5E7DE] text-[#79513F]"
                  : "border-[#DCCFC1] bg-[#F8F5F0] text-[#5E554E]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-[#E8DED1] pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#202124] transition-colors hover:text-[#B85F43]"
            >
              GitHub 
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#B85F43] transition-colors hover:text-[#8F432D]"
            >
              Live Demo 
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#F8F5F0] text-[#202124]">
      <header className="sticky top-0 z-50 border-b border-[#E3D9CD]/80 bg-[#F8F5F0]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-xl font-bold tracking-tight">
            {profile.name.split(" ")[0]}
            <span className="text-[#D97757]">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[#6B625A] md:flex">
            <a className="transition-colors hover:text-[#B85F43]" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-[#B85F43]" href="#skills">
              Skills
            </a>
            <a className="transition-colors hover:text-[#B85F43]" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-[#B85F43]" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-lg bg-[#202124] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#B85F43]"
          >
            Let's Talk 
          </a>
        </nav>

        <div className="flex justify-center gap-6 border-t border-[#E3D9CD]/60 px-3 py-3 text-xs text-[#6B625A] md:hidden">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.3fr_0.7fr]"
      >
        <div>
          {/* <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCCFC1] bg-white/50 px-4 py-2 text-xs font-medium text-[#795D4B]">
            <span className="h-2 w-2 rounded-full bg-[#D97757]" />
            {profile.role} · {profile.location}
          </div> */}

          {/* <p className="mb-4 text-sm font-medium tracking-wide text-[#B85F43]">
            HELLO, WORLD. I'M
          </p> */}

          <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
            {/* <span className="text-[#D97757]">.</span> */}
            <br />
            <span className="font-normal italic text-[#8A7D70]">
              Building with purpose
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#6B625A] sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-[#202124] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#B85F43]"
            >
              Explore My Work 
            </a>

            <a
              href="https://github.com/MohammedAyanDev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#D6C9BB] px-6 py-3.5 text-sm font-semibold text-[#202124] transition-colors hover:border-[#D97757] hover:text-[#B85F43]"
            >
              GitHub Profile
            </a>
          </div>

          {/* <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8A7D70]">
            <span>Curious mind</span>
            <span>·</span>
            <span>Continuous learner</span>
            <span>·</span>
            <span>Problem solver</span>
          </div> */}
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="relative rounded-[2rem] border border-[#DCCFC1] bg-[#E8DED1] p-3 shadow-xl shadow-[#76513D]/5">
            <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#E8DED1] via-[#F0E4D8] to-[#D8B9A5]">
              {profile.profileImage ? (
                <img
                  src={profileImage.src}
                  alt="Coder workspace image"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-serif text-8xl text-[#B85F43]">
                  {profile.shortName}
                </span>
              )}
            </div>

            {/* <div className="absolute -bottom-4 -left-5 max-w-[230px] rounded-xl border border-white/70 bg-[#FCFAF7]/85 p-4 shadow-lg backdrop-blur-xl">
              <p className="text-xs text-[#8A7D70]">CURRENT FOCUS</p>
              <p className="mt-1 font-semibold text-[#202124]">
                Learning. Building. Growing.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="h-px bg-[#E3D9CD]" />
      </div>

      <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="A LITTLE ABOUT ME"
          title="The person behind the projects"
          description="A bit about what I enjoy, what I'm learning, and what motivates me."
        />

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E3D9CD] bg-white/50 p-7 transition-colors hover:border-[#D97757]/50">
            <span className="font-serif text-3xl text-[#D97757]">01</span>
            <h3 className="mt-5 text-lg font-semibold">Who I Am</h3>
            <p className="mt-3 text-sm leading-7 text-[#6B625A]">
              {profile.about}
            </p>
          </div>

          <div className="rounded-2xl border border-[#E3D9CD] bg-[#EFE5DA]/60 p-7 transition-colors hover:border-[#D97757]/50">
            <span className="font-serif text-3xl text-[#D97757]">02</span>
            <h3 className="mt-5 text-lg font-semibold">What I Build</h3>
            <p className="mt-3 text-sm leading-7 text-[#6B625A]">
              Websites, experiments, and small tools that help me turn ideas into practical solutions.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E3D9CD] bg-white/50 p-7 transition-colors hover:border-[#D97757]/50">
            <span className="font-serif text-3xl text-[#D97757]">03</span>
            <h3 className="mt-5 text-lg font-semibold">My Goal</h3>
            <p className="mt-3 text-sm leading-7 text-[#6B625A]">
              Keep learning, build meaningful projects, and grow into a developer who solves real problems.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-[#E3D9CD] bg-[#F0E9E0]/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="TOOLS OF MY TRADE"
            title="Skills & technologies"
            description="Technologies I use or am currently learning. This list grows as I build more projects."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="rounded-2xl border border-[#E3D9CD] bg-[#FCFAF7] p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-serif text-2xl text-[#D97757]">
                    0{index + 1}
                  </span>
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        itemIndex % 2 === 0
                          ? "border-[#E5C8B9] bg-[#F5E7DE] text-[#79513F]"
                          : "border-[#DCCFC1] bg-[#F8F5F0] text-[#5E554E]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects I'm proud of"
          description="A collection of things I've built, explored, and learned from along the way."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

        {/* <div className="mt-10">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-[#D97757] pb-1 text-sm font-semibold text-[#79513F] transition-colors hover:text-[#B85F43]"
          >
            Explore more on GitHub 
          </a>
        </div> */}
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#202124] px-6 py-14 text-[#F8F5F0] sm:px-12 sm:py-16">
          <p className="mb-4 text-xs font-bold tracking-[0.22em] text-[#E9A68D]">
            HAVE AN IDEA?
          </p>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
                Let's build something meaningful
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#C5BDB5]">
                I'm always interested in learning, exchanging ideas, and exploring useful projects.
              </p>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-3 rounded-lg bg-[#D97757] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#B85F43]"
            >
              Get in touch 
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-[#D1C7BE]">
            <a
              href="https://github.com/MohammedAyanDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E9A68D]"
            >
              GitHub 
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-ayan-sayed-5bb775425?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E9A68D]"
            >
              LinkedIn 
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[#E9A68D]"
            >
              Email 
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E3D9CD] px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[#8A7D70] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a href="#home" className="transition-colors hover:text-[#B85F43]">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}