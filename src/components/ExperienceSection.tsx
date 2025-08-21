import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Codebind Technologies",
      period: "Jan - Feb 2024",
      type: "Internship",
      description: "Gained hands-on experience in software development and AI technologies"
    },
    {
      company: "Tech Vaseegrah",
      period: "July - Aug 2024",
      type: "Internship",
      description: "Worked on cutting-edge tech projects and enhanced technical skills"
    },
    {
      company: "Edunet Foundation",
      period: "June - July 2024",
      type: "Internship",
      description: "Contributed to educational technology initiatives and learning platforms"
    },
    {
      company: "Codsoft",
      period: "Jan - Feb 2024",
      type: "Internship",
      description: "Developed practical coding skills and worked on real-world projects"
    }
  ];

  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical experience gained through internships at leading tech companies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg bg-card hover:shadow-xl hover:bg-card-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{exp.company}</CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-medium">{exp.type}</span>
                  <span className="text-text-subtle text-sm">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;