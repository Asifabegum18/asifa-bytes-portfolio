import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Joy of Computing using Python",
      provider: "NPTEL",
      category: "Programming"
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      category: "Cloud Technology"
    },
    {
      title: "Python Programming",
      provider: "Udemy",
      category: "Programming"
    },
    {
      title: "Python Certification",
      provider: "Simplilearn",
      category: "Programming"
    },
    {
      title: "AI Certification",
      provider: "Google",
      category: "Artificial Intelligence"
    },
    {
      title: "AI & ML Certification",
      provider: "IBM SkillsBuild",
      category: "AI/ML"
    },
    {
      title: "Data Science Certification",
      provider: "Guvi",
      category: "Data Science"
    }
  ];

  const activities = [
    "Paper Presentations",
    "Coding Battles",
    "Hackathons",
    "Technical Conferences",
    "Workshops & Seminars"
  ];

  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Activities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and active participation in the tech community
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-md bg-card hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                    <p className="text-primary font-medium">{cert.provider}</p>
                  </CardHeader>
                  <CardContent>
                    <Badge 
                      variant="secondary"
                      className="bg-skill-bg text-foreground"
                    >
                      {cert.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Activities</h3>
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 rounded-lg bg-skill-bg/50 hover:bg-accent/50 transition-colors duration-200"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;