'use client'
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, ChevronDown, Filter, Calendar, Tag } from 'lucide-react';



const Portfolio = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
    document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Project storage
  const projects = [
    {
      id: 1,
      title: "Android Password Manager",
      category: "academic",
      tags: ["Mobile", "Android", "Java/Kotlin"],
      description: "Developed a password manager for Android devices with a small academic team.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      githubLink: "https://github.com/ellergabriel/Android-Password-Manager",
      date: "2022"
    },
    {
      id: 2,
      title: "Towers of Hanoi Solver",
      category: "academic",
      tags: ["C++", "A* Search", "AI"],
      description: "Primitive AI that uses the A* search algo to solve the 3 Towers of Hanoi in optimal time.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      githubLink: "https://github.com/ellergabriel/TowersOfHanoi",
      date: "2022"
    },
    {
      id: 3,
      title: "Mathnasium SES Rewards Display",
      category: "freelance",
      tags: ["Python", "Selenium", "sqlite"],
      description: "Digital rewards display created for the students of Mathansium of South Escondido.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      githubLink: "https://github.com/ellergabriel/MathnasiumSES-Rewards",
      date: "2024"
    },
    {
      id: 4,
      title: "Mathnasium SES TextResponder",
      category: "freelance",
      tags: ["Python", "Selenium", "LLM API"],
      description: "Python application that leverages Selenium webscraping and Mistral LLM to simplify workflow for" + 
                   " management at Mathnasium of South Escondido.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      githubLink: "https://github.com/ellergabriel/TextResponder",
      date: "2024"
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const skills = [
    "Java", "Python", "C++", "Selenium", "AI","Android", "React", "Next.js", "Node.js",
    "SQL", "AWS", "Git", "UI/UX Design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gabriel Eller
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
      <section className="relative py-20 px-4">
        <div className = "inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/*profile image*/}
            <img src = "profile.jpg" className="object-top w-100 h-100 mx-auto mb-6 rounded-full"></img>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Graduate Student and Math Educator
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating scaleable software solutions while teaching young minds. 
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
      <section id="about" className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-white-600">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white-600 leading-relaxed mb-6">
                I'm a dedicated developer with a passion for software development and math education. 
                My work is a mix of academic projects completed at both Cal State San Marcos and Cal State Fullerton, 
                and freelance work for Mathnasium of South Escondido. 
              </p>
              <p className="text-white-600 leading-relaxed">
                With experience in full stack development, UX design, and AI driven development,
                I enjoy working on projects that push the boundaries of what's possible while 
                maintaining a focus on usability and impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-600">
                <li>🎓 Software Engineering Graduate Student</li>
                <li>💼 3+ Years Freelance Experience</li>
                <li>🌍 Remote Work Experience</li>
                <li>🚀 Always Learning New Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-white-600">Featured Projects</h3>
          
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
              <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group flex flex-col">
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between h-5">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'academic' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {project.category === 'academic' ? 'Academic' : 'Freelance'}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-sm font-medium">{project.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
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
                  
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
      <section id="skills" className="py-20 bg-black/40">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-white-600">Skills & Technologies</h3>
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
          <h3 className="text-3xl font-bold mb-6">Contact</h3>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:ellergabriel13@gmail.com"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/gabriel-eller-2ba31721b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg transition-colors font-medium"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/ellergabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          
          <p className="text-gray-400">
            © 2025 Gabriel Eller. Built with Next.js and Tailwind CSS, assisted by Claude.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
