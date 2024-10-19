const projects = [
  {
    title: 'Real-Estate Website',
    description: 'A personal portfolio website to showcase my projects and skills, built with React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    liveLink: 'https://your-portfolio.com',  
    githubLink: 'https://github.com/your-username/portfolio',  
  },
  {
    title: 'Employee Management Website',
    description: 'An online platform for selling products with features like product filters, a shopping cart, and order management.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveLink: 'https://your-ecommerce.com',  
    githubLink: 'https://github.com/your-username/ecommerce-platform', 
  },
];

function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
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
