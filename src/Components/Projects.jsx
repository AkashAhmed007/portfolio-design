const projects = [
  {
    title: 'Real-Estate Website',
    description: 'This project is a dynamic and responsive Real Estate Platform designed to help users buy, sell, or rent properties with ease.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript','Firebase'],
    liveLink: 'https://darling-vacherin-0487e1.netlify.app/',  
    githubLink: 'https://github.com/AkashAhmed007/Real-State',  
  },
  {
    title: 'Shoe Website',
    description: 'A Nike Shoe E-commerce Website offering a sleek and interactive platform for browsing and purchasing the latest Nike footwear.',
    technologies: ['React','Tailwind'],
    liveLink: 'https://majestic-kashata-ca9913.netlify.app/',  
    githubLink: 'https://github.com/AkashAhmed007/Shoe-Project', 
  },
  {
    title: 'Book Vibe Website',
    description: 'Book Vibe provides book summaries, reviews, and ratings, helping readers find their next perfect read.',
    technologies: ['React','Tailwind'],
    liveLink: 'https://eloquent-griffin-c087a0.netlify.app/',  
    githubLink: 'https://github.com/AkashAhmed007/Book-Vibe', 
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 border-b border-b-green-500 pb-2">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 m-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
