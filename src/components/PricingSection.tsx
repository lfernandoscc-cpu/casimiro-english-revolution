import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Pacote Esmeralda",
      price: "R$197,75",
      period: "/mês",
      lessons: "4 aulas privadas por mês",
      badge: "POPULAR",
      badgeVariant: "secondary" as const,
      features: [
        "4 aulas particulares mensais",
        "Material didático incluído",
        "Suporte via WhatsApp",
        "Acompanhamento personalizado"
      ]
    },
    {
      name: "Pacote Rubi",
      price: "R$278,65",
      period: "/mês",
      lessons: "6 aulas privadas por mês",
      badge: "RECOMMENDED",
      badgeVariant: "default" as const,
      features: [
        "6 aulas particulares mensais",
        "Material didático premium",
        "Suporte prioritário",
        "Relatórios de progresso",
        "Aulas extras de conversação"
      ]
    },
    {
      name: "Pacote Diamante VIP",
      price: "R$385,80",
      period: "/mês",
      lessons: "Aulas ilimitadas",
      badge: "EXCLUSIVE",
      badgeVariant: "destructive" as const,
      features: [
        "Aulas particulares ilimitadas",
        "Material exclusivo VIP",
        "Suporte 24/7",
        "Mentoria individual",
        "Certificação internacional",
        "Acesso a eventos exclusivos"
      ]
    }
  ];

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tutoring Packages & Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect learning package for your English journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-academy bg-gradient-card">
              {pkg.badge && (
                <Badge 
                  variant={pkg.badgeVariant} 
                  className="absolute -top-3 left-6 px-3 py-1"
                >
                  {pkg.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {pkg.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{pkg.lessons}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="academy" className="w-full" size="lg">
                  Escolher Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;