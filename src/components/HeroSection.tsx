import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-person.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Revolução
              <br />
              no <span className="text-transparent bg-gradient-primary bg-clip-text">Aprendizado</span>
              <br />
              de Inglês
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Aprendizado personalizado, tutoria privada adaptada ao seu ritmo único de aprendizado.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="academy" size="lg" className="text-lg px-8 py-6">
              MATRICULE-SE AGORA
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-academy-dark">
              SAIBA MAIS
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-75" />
          <img 
            src={heroImage} 
            alt="Estudante de inglês em ambiente futurístico" 
            className="relative z-10 rounded-2xl shadow-glow max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;