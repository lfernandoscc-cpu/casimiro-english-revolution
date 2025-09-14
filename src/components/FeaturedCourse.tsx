import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Users, Award } from "lucide-react";

const FeaturedCourse = () => {
  const courseFeatures = [
    {
      icon: Star,
      text: "Curso mais popular da Academy"
    },
    {
      icon: Clock,
      text: "Flexibilidade total de horários"
    },
    {
      icon: Users,
      text: "Aulas particulares personalizadas"
    },
    {
      icon: Award,
      text: "Certificação ao final do curso"
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Curso em Destaque
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece sua jornada de aprendizado de inglês hoje com nosso curso mais popular.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-academy hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold">English Revolution</CardTitle>
              <p className="text-lg opacity-90">
                Transforme suas habilidades em inglês
              </p>
            </CardHeader>

            <CardContent className="p-8">
              <div className="space-y-8">
                <p className="text-lg text-center text-muted-foreground">
                  Transforme suas habilidades em inglês com nosso programa abrangente projetado 
                  para todos os níveis. Do iniciante ao avançado, domine o inglês com aulas 
                  personalizadas e orientação especializada.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {courseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-foreground font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-6">
                  <Button variant="academy" size="lg" className="text-lg px-12 py-6">
                    INICIAR JORNADA AGORA
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;