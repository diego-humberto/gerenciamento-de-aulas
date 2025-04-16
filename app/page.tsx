import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Sistema de Gerenciamento de Aulas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          Plataforma completa para gerenciamento e acesso a cursos online. 
          Aprenda no seu ritmo, acompanhe seu progresso e alcance seus objetivos.
        </p>
        <div className="flex gap-4">
          <Link href="/login">
            <Button size="lg">
              Começar Agora
            </Button>
          </Link>
          <Link href="/courses">
            <Button variant="outline" size="lg">
              Explorar Cursos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}