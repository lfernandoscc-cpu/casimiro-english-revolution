import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Award, Zap } from "lucide-react";
import laptopImage from "@/assets/laptop-brand.jpg";
import studentImage from "@/assets/student-learning.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Metodologia Inovadora",
      description: "Abordagem revolucionária de ensino adaptada ao seu estilo de aprendizado."
    },
    {
      icon: Users,
      title: "Instrutor Especialista",
      description: "Anos de experiência em ensino personalizado de inglês."
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Resultados mensuráveis de aprendizado com nossa metodologia exclusiva."
    },
    {
      icon: Zap,
      title: "Aprendizado Acelerado",
      description: "Tecnologia de ponta combinada com atenção personalizada."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Nossa Abordagem Revolucionária */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossa Abordagem Revolucionária
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Na Casimiro Academy, acreditamos que cada aluno é único. Nossos cursos de inglês 
                são cuidadosamente projetados para se adaptar ao seu estilo individual de aprendizado.
              </p>
              <p>
                Com nossa metodologia inovadora, você experimentará uma jornada transformadora na 
                aquisição da linguagem que vai além dos métodos tradicionais.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <img 
              src={laptopImage} 
              alt="Laptop com branding da Casimiro Academy" 
              className="relative z-10 rounded-2xl shadow-soft max-w-full h-auto"
            />
          </div>
        </div>

        {/* Experimente o Aprendizado Como Nunca Antes */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Experimente o Aprendizado
              <br />
              <span className="text-transparent bg-gradient-primary bg-clip-text">Como Nunca Antes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa plataforma combina tecnologia de ponta com atenção personalizada para criar 
              o ambiente de aprendizado perfeito para sua jornada no inglês. Junte-se a milhares 
              de alunos que já transformaram suas habilidades linguísticas com nossa abordagem inovadora.
            </p>
          </div>
          
          <div className="relative lg:order-first">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <img 
              src={studentImage} 
              alt="Student learning online with MacBook" 
              className="relative z-10 rounded-2xl shadow-soft max-w-full h-auto"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-academy transition-all duration-300 bg-gradient-card border-2 border-border hover:border-primary/50">
              <CardContent className="space-y-4 p-0">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nosso Sistema de Aprendizado */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 border-2 border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nosso Sistema de Aprendizado
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Escolha o método de aprendizado que melhor se adapta ao seu estilo de vida e objetivos. 
              Todas as nossas opções são projetadas para maximizar seu potencial de aprendizado em inglês.
            </p>
            
            <div className="bg-background rounded-2xl p-8 border-2 border-primary/20 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="text-sm font-bold text-primary uppercase tracking-wider">PERSONALIZADO</div>
                <h3 className="text-2xl font-bold text-foreground">Aulas Particulares</h3>
                <p className="text-muted-foreground">
                  Sessões individuais com nossos instrutores especialistas, personalizadas para 
                  suas necessidades e objetivos específicos.
                </p>
                <div className="pt-4">
                  <a 
                    href="https://wa.me/5581995119017" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    CONTATAR NO WHATSAPP
                    <span className="text-sm">(81) 99511-9017</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;