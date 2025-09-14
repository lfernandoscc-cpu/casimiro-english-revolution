import { Card, CardContent } from "@/components/ui/card";

const FernandoSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-background/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Fernando Casimiro
                  </h2>
                  <div className="text-academy-purple-light text-lg font-semibold">
                    Founder
                  </div>
                </div>

                <div className="space-y-6 text-white/90 text-lg">
                  <p>
                    Com experiência em educação linguística, Fernando Casimiro revolucionou a 
                    metodologia de ensino de inglês criando um sistema que se adapta aos padrões 
                    cognitivos de cada aluno.
                  </p>
                  <p>
                    Sua visão para a Casimiro Academy é tornar a educação em inglês personalizada 
                    e de alta qualidade acessível a todos, independentemente do nível inicial.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-academy-purple-light">
                      Metodologia Inovadora
                    </div>
                    <div className="text-white/80">
                      Abordagem revolucionária de ensino
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-academy-purple-light">
                      Instrutor Especialista
                    </div>
                    <div className="text-white/80">
                      Anos de experiência em ensino
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-academy-purple-light">
                      Resultados Comprovados
                    </div>
                    <div className="text-white/80">
                      Resultados mensuráveis de aprendizado
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FernandoSection;