import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman } from 'react-icons/si'; 
function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={40} color="#e34c26" />, level: 'Advanced' },
    { name: 'CSS', icon: <FaCss3Alt size={40} color="#264de4" />, level: 'Advanced' },
    { name: 'JavaScript', icon: <FaJs size={40} color="#f7df1e" />, level: 'Advanced' },
    { name: 'ReactJS', icon: <FaReact size={40} color="#61DBFB" />, level: 'Intermediate' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38b2ac" />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <SiMongodb size={40} color="#4DB33D" />, level: 'Basic' },
    { name: 'Express.js', icon: <SiExpress size={40} color="gray" />, level: 'Basic' },
    { name: 'Node.js', icon: <FaNodeJs size={40} color="#68A063" />, level: 'Basic' },
    { name: 'Postman', icon: <SiPostman size={40} color="#FF6C37" />, level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                {skill.icon}
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="text-gray-600 mt-2">Level: {skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
