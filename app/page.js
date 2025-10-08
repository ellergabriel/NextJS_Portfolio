'use client'
import React, { useState } from 'react';
import { Github, ExternalLink, Mail, Linkedin, ChevronDown, Filter, Calendar, Tag } from 'lucide-react';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Android Password Manager",
      category: "academic",
      tags: ["Mobile Development", "Android", "Java/Kotlin"],
      description: "Developed a password manager for Android devices with a small academic team.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      githubLink: "https://github.com/ellergabriel/Android-Password-Manager",
      date: "2022"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "freelance",
      tags: ["React", "Node.js", "MongoDB"],
      description: "Full-stack e-commerce platform with payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      githubLink: "#",
      date: "2024"
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const skills = [
    "JavaScript", "Python", "React", "Next.js", "Node.js", "TensorFlow",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <ChevronDown className={`w-5 h-5 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">About</a>
              <a href="#projects" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Projects</a>
              <a href="#skills" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Skills</a>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              YN
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Full-Stack Developer & Researcher
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code and research. 
            I bridge the gap between academic theory and practical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View My Work
            </a>
            <a href="#contact" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a dedicated developer and researcher with a passion for solving complex problems 
                through innovative technology solutions. My work spans both academic research and 
                practical freelance projects, giving me a unique perspective on how theoretical 
                concepts can be applied to real-world challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With experience in machine learning, web development, and user experience design, 
                I enjoy working on projects that push the boundaries of what's possible while 
                maintaining a focus on usability and impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-600">
                <li>🎓 Computer Science Graduate</li>
                <li>💼 3+ Years Freelance Experience</li>
                <li>📚 Published Research Papers</li>
                <li>🌍 Remote Work Experience</li>
                <li>🚀 Always Learning New Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Filter className="w-4 h-4" />
              All Projects
            </button>
            <button
              onClick={() => setSelectedFilter('academic')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === 'academic'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Academic
            </button>
            <button
              onClick={() => setSelectedFilter('freelance')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === 'freelance'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Freelance
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'academic' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {project.category === 'academic' ? 'Academic' : 'Freelance'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Calendar className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{project.date}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-bold text-xl text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.demoLink}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-lg text-gray-700 font-medium hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-gray-300 mb-8 text-lg">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              className="flex items-center justify-center gap-3 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/yourusername"
              className="flex items-center justify-center gap-3 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          
          <p className="text-gray-400">
            © 2024 Your Name. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
