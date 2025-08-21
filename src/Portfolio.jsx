import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.img
          src="/Image/profile.jpg"
          alt="Profile"
          className="rounded-full w-40 h-40 border-4 border-purple-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I’m <span className="text-purple-400">Ken</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          ASP.NET & ReactJS Developer — I build secure, scalable, and
          high-performing web applications with clean, maintainable code.
        </motion.p>

 
        <motion.div
          className="flex gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="mailto:your@email.com">
            <Mail className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <FileText className="w-6 h-6 hover:text-purple-400 transition" />
          </a>
        </motion.div>
      </section>

   
      <section className="px-6 py-16 bg-gray-900/50">
        <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {["ASP.NET", "C#", "SQL Server", "ReactJS", "Tailwind", "REST APIs", "SSRS", "ADO.NET"].map(
            (skill, i) => (
              <motion.div
                key={skill}
                className="bg-gray-800 rounded-2xl p-6 shadow hover:shadow-purple-500/40 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((proj) => (
            <motion.div
              key={proj}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500/40 transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={`https://via.placeholder.com/600x300?text=Project+${proj}`}
                alt={`Project ${proj}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Project {proj}</h3>
                <p className="text-gray-400 mt-2">
                  {/* A short description of the project goes here. Highlight the tech used and the problem solved. */}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-900/50 text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">
          Open to freelance opportunities, full-time/part-time roles, or collaborations. Let’s build something amazing!
        </p>
        <a
          href="mailto:your@email.com"
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl shadow-lg font-semibold transition"
        >
          Contact Me
        </a>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ken | Built with React + Tailwind
      </footer>
    </div>
  );
}
