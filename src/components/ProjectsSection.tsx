import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Mail, MessageSquare, Workflow } from "lucide-react";

const subProjects = [
  {
    title: "1. Assistente Inteligente para WhatsApp",
    icon: MessageSquare,
    description: "Fluxo completo de atendimento automatizado via WhatsApp, com tratamento inteligente de diferentes tipos de mensagens.",
    features: [
      "Recebimento de mensagens via webhook",
      "Identificação automática: Texto, Áudio (transcrição), Imagem (análise por IA)",
      "Roteamento inteligente de mensagens",
      "Respostas automáticas com agente de IA",
      "Memória de contexto para histórico da conversa",
      "Sistema de logs, métricas e backup",
      "Encaminhamento para atendimento humano",
      "Solicitação de feedback ao final",
    ],
    result: "Sistema de atendimento automatizado, escalável e com experiência semelhante a um suporte humano.",
  },
  {
    title: "2. Automação de Disparo de E-mails com IA",
    icon: Mail,
    description: "Fluxo para automatizar o envio de e-mails com geração de conteúdo inteligente, totalmente integrado à interface do site.",
    features: [
      "Disparo de e-mails diretamente pelo sistema web",
      "Entrada de dados via formulário no site",
      "Importação de lista de e-mails",
      "Exportação em CSV",
      "Dashboard com métricas em tempo real",
      "Geração de conteúdo com agente de IA",
      "Envio automático via Gmail",
      "Criação automática de eventos no Google Agenda",
    ],
    result: "Sistema funcional de disparo de e-mails integrado ao site, com geração automática de conteúdo e automação completa.",
  },
  {
    title: "3. Chatbot Inteligente Integrado ao Site",
    icon: Bot,
    description: "Chatbot com IA integrado diretamente ao site, capaz de responder usuários em tempo real.",
    features: [
      "Recebimento de mensagens via interface do site",
      "Processamento por agente de IA",
      "Memória de contexto para conversas contínuas",
      "Respostas automáticas em tempo real",
    ],
    result: "Chatbot inteligente para atendimento e suporte.",
  },
];

const techConcepts = [
  "Webhooks", "Agentes de IA", "Integrações via HTTP", "Processamento de áudio e imagem",
  "Memória de conversação", "Automação de e-mails", "Integração com Google Agenda",
  "Roteamento lógico de fluxos", "Integração de automações", "APIs", "Bifurcação condicional",
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projeto Principal &{" "}
            <span className="text-gradient">Prova Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Demonstração prática de habilidades em desenvolvimento full stack e automação com IA
          </p>
        </div>

        {/* Main Project Card */}
        <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              Destaque
            </Badge>
          </div>

          <CardHeader className="relative pb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Workflow className="w-7 h-7 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors">
              Plataforma de Automação com IA Integrada
            </CardTitle>
          </CardHeader>

          <CardContent className="relative">
            <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
              Desenvolvi uma plataforma de automação baseada em fluxos de IA, integrando atendimento via WhatsApp, 
              disparo inteligente de e-mails e um chatbot conversacional, tudo centralizado em um único sistema. 
              O projeto foi estruturado com webhooks, agentes de IA e integrações externas, permitindo automações 
              completas de comunicação, atendimento e testes diretamente pelo site.
            </CardDescription>

            <div className="flex flex-wrap gap-2 mb-6">
              {["N8N", "NestJS", "React", "PostgreSQL", "Redis", "Docker", "OpenAI", "Gemini", "WhatsApp API", "Gmail API"].map((tag, i) => (
                <Badge 
                  key={i}
                  variant="secondary"
                  className="bg-secondary/50 text-foreground/80 border border-border"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <a 
              href="https://github.com/luanjunqueira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="group/btn border-border hover:border-primary hover:bg-primary/10"
              >
                Ver Repositório
                <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Sub-projects */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {subProjects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative pb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </CardDescription>

                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground font-medium">
                    <span className="text-primary">Resultado:</span> {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Concepts */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">Tecnologias e Conceitos Aplicados</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {techConcepts.map((tech, i) => (
              <Badge 
                key={i}
                variant="secondary"
                className="bg-secondary/50 text-foreground/80 border border-border"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
