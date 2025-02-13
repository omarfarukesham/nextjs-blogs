import Image from 'next/image';
import profileImg from '@/assets/devOmar.png'; 
import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const metadata = {
  title: "About Me",
  description: "Learn more about Omar, a full-stack developer with 3+ years of experience in the JavaScript ecosystem.",
};

export default function AboutPage() {
  return (
    <main className="w-[90%] mx-auto min-h-screen py-16">
      <section className="flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-12">
          <Image src={profileImg} alt="Omar's Profile" className="object-cover" />
        </div>

        {/* About Section */}
        <div className="text-gray-800">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            I am a passionate <span className="font-semibold">software developer</span> with over <span className="font-semibold">3 years of experience</span> in the JavaScript ecosystem, specializing in full-stack development with <span className="font-semibold">Node.js, React.js, and Next.js</span>.  
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Throughout my career, I have had the privilege of working with clients from <span className="font-semibold">USA, Singapore, Bhutan, Sweden, Bangladesh, and Saudi Arabia</span>, delivering scalable and high-performance web applications for diverse industries.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My expertise includes building modern, responsive user interfaces, developing robust back-end systems, and collaborating with cross-functional teams to achieve project success in both freelance and remote job settings.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React.js, Next.js, Node.js, Express.js</li>
          <li>MongoDB, MySQL, PostgreSQL</li>
          <li>RESTful APIs, GraphQL</li>
          <li>Git, GitHub, Bitbucket, CI/CD pipelines</li>
          <li>Agile methodologies, Jira, Figma</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Philosophy</h2>
        <p className="text-lg leading-relaxed text-black">
          I believe in writing clean, maintainable code and staying up to date with the latest technologies. I am always eager to take on new challenges and work with teams that value growth, collaboration, and innovation.
        </p>
      </section>
        {/* Contact Section */}
        <section className="mt-16">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Me</h2>
  <p className="text-lg leading-relaxed text-black">
    I’m always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to reach out to me!
  </p>
  
  <div className="mt-6 space-y-4">
    <div className="flex items-center space-x-4">
      <FaEnvelope className="text-blue-500 text-2xl" />
      <p className="text-lg text-black">
        <span className="font-semibold">Email:</span> <a href="mailto:omar@example.com" className="text-blue-500 hover:underline">omar.lu86@gmail.com</a>
      </p>
    </div>

    <div className="flex items-center space-x-4">
      <FaLinkedin className="text-blue-600 text-2xl" />
      <p className="text-lg text-black">
        <span className="font-semibold">LinkedIn:</span> <Link href="https://linkedin.com/in/omar" className="text-blue-500 hover:underline" target="_blank">https://www.linkedin.com/in/omarfaruk7/</Link>
      </p>
    </div>

    <div className="flex items-center space-x-4">
      <FaGithub className="text-gray-800 text-2xl" />
      <p className="text-lg text-black">
        <span className="font-semibold">GitHub:</span> <Link href="https://github.com/omar" className="text-blue-500 hover:underline" target="_blank">https://github.com/omarfarukesham</Link>
      </p>
    </div>
  </div>
</section>
    </main>
  );
}
