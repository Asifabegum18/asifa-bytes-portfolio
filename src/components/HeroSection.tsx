import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Asifa Begum M
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              AI & Data Science Student
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about Artificial Intelligence, Machine Learning, and Full Stack Development with a CGPA of 9.27
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            <img 
              src={heroPortrait} 
              alt="Asifa Begum M - AI & Data Science Student"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-card shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;