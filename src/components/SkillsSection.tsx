import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skills = {
    "Programming Languages": ["Python", "C", "HTML", "CSS", "Bootstrap", "MySQL"],
    "AI/ML Technologies": ["Machine Learning", "Data Science", "AI Development", "Data Analysis"],
    "Web Development": ["Full Stack Development", "Frontend", "Backend", "Database Design"],
    "Tools & Platforms": ["Cloud Computing", "Git", "Data Visualization", "Statistical Analysis"]
  };

  return (
    <section className="py-20 px-6 bg-gradient-3 relative">
      <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-soft mb-4">Skills & Technologies</h2>
          <p className="text-lg text-accent-soft max-w-2xl mx-auto">
            A comprehensive toolkit for AI, ML, and Full Stack Development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-secondary-soft">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-skill-bg text-cool hover:bg-accent transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;