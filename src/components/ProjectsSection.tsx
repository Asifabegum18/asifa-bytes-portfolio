import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Career Guidance Chatbot",
      category: "AI Project",
      description: "Developed an intelligent chatbot system to provide personalized career guidance using AI technologies",
      technologies: ["AI", "Python", "NLP", "Machine Learning"]
    },
    {
      title: "Student Performance Analysis",
      category: "ML Project",
      description: "Built a machine learning model to analyze and predict student performance patterns",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Statistics"]
    },
    {
      title: "Employee Salary Prediction",
      category: "ML Project",
      description: "Created a predictive model for employee salary estimation based on various factors",
      technologies: ["Python", "ML", "Data Science", "Regression"]
    },
    {
      title: "Food Ordering Website",
      category: "Web Development",
      description: "Developed a full-stack food ordering platform with user-friendly interface",
      technologies: ["HTML", "CSS", "Bootstrap", "MySQL", "Full Stack"]
    },
    {
      title: "Travel Agency Website",
      category: "Web Development",
      description: "Built a comprehensive travel agency website with booking and management features",
      technologies: ["HTML", "CSS", "Bootstrap", "MySQL", "Web Design"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, Machine Learning, and Web Development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg bg-card hover:shadow-xl hover:bg-card-hover transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-xs text-primary border-primary">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-skill-bg text-foreground text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;