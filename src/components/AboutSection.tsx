import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated AI & Data Science student with a passion for innovation and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I am a highly motivated student specializing in Artificial Intelligence and Data Science 
              with an excellent academic record of 9.27 CGPA. My journey in technology spans across 
              various domains including AI, Machine Learning, and Full Stack Development.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Through multiple internships and hands-on projects, I have gained practical experience 
              in developing AI solutions, web applications, and data-driven systems. I am fluent in 
              English and Tamil, enabling me to collaborate effectively in diverse environments.
            </p>
          </div>
          
          <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CGPA</span>
                  <span className="font-semibold text-primary">9.27</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus Areas</span>
                  <span className="font-semibold text-foreground">AI, ML, Full Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-semibold text-foreground">English, Tamil</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Internships</span>
                  <span className="font-semibold text-foreground">4+ Companies</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;