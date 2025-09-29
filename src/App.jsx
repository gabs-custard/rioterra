import React, { useState, useEffect, useRef } from 'react';
import { animate, motion, useInView } from 'framer-motion'; // eslint-disable-line no-unused-vars
import {
  Leaf,
  TrendingUp,
  Award,
  Users,
  BrainCircuit,
  ShieldCheck,
  Recycle,
  Play,
  Download,
  MessageCircle,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';
import './App.css';
import Hero from './components/Hero';
import Practices from './components/Practices';
import ContactSection from './components/Contact';
import SectionTitle from './components/SectionTitle';
import Card from './components/Card';

// Importar assets
import pecuariaLogo from './assets/pecuaria_logo.svg';
import heroImage from './assets/banner_pecumais4.webp';
import publiImage from './assets/banner_pecumais.png';
import aboutHeroImage from './assets/pecuaria_sustentavel_tech.png';
import rubricaImagem from './assets/rubricaprojeto.jpeg';
import porqueImage from './assets/porquebg.png';
import whatsappIcon from './assets/whatsapp.png';
import assistantAvatar from './assets/leaf-assistant.png';

const AnimatedCounter = ({ value, duration = 2.4, prefix = '', suffix = '', locale = 'pt-BR' }) => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      }
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={counterRef} className="text-5xl font-black text-[#0A4738]">
      {`${prefix}${displayValue.toLocaleString(locale)}${suffix}`}
    </span>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('pt');

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleChatbotClick = () => {
    // Redirecionar para WhatsApp
    window.open('https://wa.me/5569992481087', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const content = {
    pt: {
      nav: {
        home: 'Início',
        why: 'Por que?',
        about: 'Sobre',
        practices: 'Práticas',
        videos: 'Vídeos',
        publications: 'Publicações',
        chatbot: 'Chatbot',
        contact: 'Contato'
      },
      hero: {
        title: 'Pecuária Sustentável na Amazônia',
        subtitle: 'Transformando a pecuária amazônica através da inovação, tecnologia e práticas sustentáveis. Unindo produtividade, conservação ambiental e desenvolvimento social.',
        cta: 'Conheça o Projeto',
        cta2: 'Fale Conosco'
      },
      why: {
        title: 'Por que Pecuária Sustentável?',
        subtitle: 'A pecuária é fundamental para a economia da Amazônia, mas precisa evoluir para modelos mais sustentáveis e produtivos.',
        items: [
          {
            icon: TrendingUp,
            title: 'Maior Produtividade',
            description: 'A intensificação sustentável aumenta a produção por hectare, reduzindo a pressão sobre novas áreas.'
          },
          {
            icon: Leaf,
            title: 'Menor Impacto Ambiental',
            description: 'Práticas sustentáveis reduzem emissões de carbono e preservam a biodiversidade amazônica.'
          },
          {
            icon: Award,
            title: 'Maior Rentabilidade',
            description: 'Produtores sustentáveis têm acesso a mercados premium e incentivos financeiros.'
          }
        ]
      },
      about: {
        title: 'Sobre o Projeto Pecuária+',
        subtitle: 'Uma iniciativa da Rioterra para promover a pecuária sustentável na Amazônia através de inovação, assistência técnica e tecnologia.',
        hero: {
          alt: 'Produtor rural utilizando tecnologia no campo amazônico',
          caption: 'Tecnologia e tradição caminhando juntas na Amazônia'
        },
        objectives: [
          {
            icon: Users,
            title: 'Capacitar produtores rurais',
            description: 'Formação contínua em gestão, manejo sustentável e uso de dados.'
          },
          {
            icon: BrainCircuit,
            title: 'Implementar tecnologias de IA',
            description: 'Soluções inteligentes para assistência 24hrs com agentes de IA.'
          },
          {
            icon: ShieldCheck,
            title: 'Promover a regularização ambiental',
            description: 'Apoio técnico para adequação legal e conservação de áreas sensíveis.'
          },
          {
            icon: Recycle,
            title: 'Desenvolver sistemas agroflorestais',
            description: 'Integração de produção pecuária com florestas e agricultura regenerativa.'
          },
          {
            icon: TrendingUp,
            title: 'Conectar a mercados sustentáveis',
            description: 'Acesso a compradores que valorizam rastreabilidade e baixo impacto.'
          }
        ],
        innovation: {
          title: 'Destaque para inovação',
          description: 'Uso de Inteligência Artificial, análise de dados e assistência técnica especializada para acelerar a transição para uma pecuária de baixo carbono.',
          tagline: 'IA • Dados • Assistência Técnica'
        },
        metric: {
          value: 5000,
          prefix: '+',
          label: 'Hectares em recuperação com práticas sustentáveis'
        }
      },
      practices: {
        title: 'Práticas de Pecuária Sustentável',
        subtitle: 'Conheça as principais técnicas que transformam a pecuária tradicional em um modelo sustentável e rentável.',
        items: [
          {
            title: 'Pastejo Rotacionado',
            description: 'Sistema que permite a recuperação natural das pastagens, aumentando a produtividade.',
            benefits: ['Maior produção de forragem', 'Melhoria do solo', 'Redução de custos']
          },
          {
            title: 'Sistemas Agroflorestais',
            description: 'Integração de árvores, pastagens e animais em um mesmo sistema produtivo.',
            benefits: ['Diversificação de renda', 'Conservação da biodiversidade', 'Sequestro de carbono']
          },
          {
            title: 'Recuperação de Pastagens',
            description: 'Restauração de áreas degradadas para aumentar a capacidade produtiva.',
            benefits: ['Maior lotação animal', 'Redução de custos', 'Melhoria ambiental']
          },
          {
            title: 'Monitoramento Tecnológico',
            description: 'Uso de sensores e IA para otimizar o manejo e a produtividade.',
            benefits: ['Decisões baseadas em dados', 'Eficiência operacional', 'Sustentabilidade']
          }
        ]
      },
      videos: {
        title: 'Vídeos',
        subtitle: 'Em breve, você encontrará aqui uma galeria completa com vídeos institucionais e de campo mostrando as práticas sustentáveis em ação.',
        placeholder: 'Conteúdo em produção...'
      },
      publications: {
        title: 'Publicações Úteis',
        subtitle: 'Materiais técnicos e recursos para apoiar a implementação de práticas sustentáveis.',
        items: [
          {
            title: 'Guia Arbopasto – Manual de Espécies para Sistemas Silvipastoris',
            description:
              'Referência da Embrapa para identificar e selecionar espécies arbóreas que qualificam sistemas silvipastoris.',
            type: 'APP • Embrapa',
            link:
              'https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/1479/guia-arbopasto---manual-de-identificacao-e-selecao-de-especies-arboreas-para-sistemas-silvipastoris'
          },
          {
            title: 'Pecuária Leiteira na Amazônia',
            description:
              'Estudo com recomendações para ampliar a produtividade e a sustentabilidade da pecuária de leite amazônica.',
            type: 'PDF • Embrapa',
            link:
              'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1126135/pecuaria-leiteira-na-amazonia'
          },
          {
            title: 'ILPF – Olhares para o Brasil Sustentável',
            description:
              'Panorama das experiências brasileiras com Integração Lavoura-Pecuária-Floresta e seus resultados sustentáveis.',
            type: 'PDF • Embrapa',
            link:
              'https://www.embrapa.br/agrossilvipastoril/busca-de-publicacoes/-/publicacao/1163804/ilpf-olhares-para-o-brasil-sustentavel--iclf-a-portrait-of-sustainable-production-in-brazil'
          }
        ]
      },
      chatbot: {
        title: 'Assistente Virtual',
        subtitle: 'Tire suas dúvidas sobre pecuária sustentável com nosso assistente especializado.',
        description: 'Nosso chatbot está disponível para responder questões técnicas, fornecer orientações e conectar você com nossa equipe.',
        cta: 'Iniciar Conversa'
      },
      contact: {
        title: 'Contato',
        subtitle: 'Entre em contato conosco para saber mais sobre o projeto ou participar das ações.',
        form: {
          name: 'Nome',
          email: 'E-mail',
          message: 'Mensagem',
          send: 'Enviar Mensagem'
        },
        info: {
          address: 'Rua Padre Chiquinho, 1651, B. São João Bosco, Porto Velho – Rondônia – Brasil',
          phone: '(69) 99248-1087',
          email: 'rioterra@rioterra.org.br'
        }
      },
      footer: {
        description: 'Transformando a pecuária amazônica através da sustentabilidade e inovação.',
        links: 'Links Úteis',
        social: 'Redes Sociais',
        rights: '© 2025 Rioterra. Todos os direitos reservados.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        why: 'Why?',
        about: 'About',
        practices: 'Practices',
        videos: 'Videos',
        publications: 'Publications',
        chatbot: 'Chatbot',
        contact: 'Contact'
      },
      hero: {
        title: 'Sustainable Livestock in the Amazon',
        subtitle: 'Transforming Amazonian livestock through innovation, technology and sustainable practices. Combining productivity, environmental conservation and social development.',
        cta: 'Learn About the Project',
        cta2: 'Contact Us'
      },
      why: {
        title: 'Why Sustainable Livestock?',
        subtitle:
          'Livestock is fundamental to the Amazon economy, but it must evolve toward more sustainable and productive models.',
        items: [
          {
            icon: TrendingUp,
            title: 'Higher Productivity',
            description:
              'Sustainable intensification increases production per hectare, reducing pressure on new areas.'
          },
          {
            icon: Leaf,
            title: 'Lower Environmental Impact',
            description:
              'Sustainable practices reduce carbon emissions and preserve Amazonian biodiversity.'
          },
          {
            icon: Award,
            title: 'Greater Profitability',
            description:
              'Sustainable producers gain access to premium markets and financial incentives.'
          }
        ]
      },
      about: {
        title: 'About the Pecuária+ Project',
        subtitle:
          'An initiative by Rioterra to promote sustainable livestock in the Amazon through innovation, technical assistance and technology.',
        hero: {
          alt: 'Rural producer smiling while using technology in the field',
          caption: 'Technology empowering fieldwork in the Amazon'
        },
        objectives: [
          {
            icon: Users,
            title: 'Empower rural producers',
            description: 'Continuous training in management, sustainable practices and data use.'
          },
          {
            icon: BrainCircuit,
            title: 'Deploy AI technologies',
            description: 'Intelligent solutions for real-time monitoring of farm operations.'
          },
          {
            icon: ShieldCheck,
            title: 'Advance environmental compliance',
            description: 'Technical support for legal alignment and preservation of sensitive areas.'
          },
          {
            icon: Recycle,
            title: 'Develop integrated agroforestry',
            description: 'Bringing livestock, forests and regenerative agriculture together.'
          },
          {
            icon: TrendingUp,
            title: 'Unlock sustainable markets',
            description: 'Connecting producers with buyers who value traceability and low impact.'
          }
        ],
        innovation: {
          title: 'Innovation highlight',
          description:
            'Artificial Intelligence, data analysis and specialized technical support accelerating the shift to low-carbon livestock.',
          tagline: 'AI • Data • Technical Assistance'
        },
        metric: {
          value: 5000,
          prefix: '+',
          label: 'Hectares under ecological restoration'
        }
      },
      practices: {
        title: 'Sustainable Livestock Practices',
        subtitle:
          'Discover the main techniques that transform traditional livestock into a sustainable and profitable model.',
        items: [
          {
            title: 'Rotational Grazing',
            description:
              'A system that allows natural pasture recovery, increasing productivity.',
            benefits: ['Higher forage production', 'Soil improvement', 'Cost reduction']
          },
          {
            title: 'Agroforestry Systems',
            description:
              'Integration of trees, pastures and animals in the same production system.',
            benefits: ['Income diversification', 'Biodiversity conservation', 'Carbon sequestration']
          },
          {
            title: 'Pasture Restoration',
            description:
              'Restoring degraded areas to increase productive capacity.',
            benefits: ['Greater stocking rate', 'Cost reduction', 'Environmental improvement']
          },
          {
            title: 'Technological Monitoring',
            description:
              'Use of sensors and AI to optimize management and productivity.',
            benefits: ['Data-driven decisions', 'Operational efficiency', 'Sustainability']
          }
        ]
      },
      videos: {
        title: 'Videos',
        subtitle:
          'Coming soon, you will find here a complete gallery with institutional and field videos showing sustainable practices in action.',
        placeholder: 'Content in production...'
      },
      publications: {
        title: 'Useful Publications',
        subtitle:
          'Technical materials and resources to support the implementation of sustainable practices.',
        items: [
          {
            title: 'Arbopasto Guide – Tree Species for Silvopastoral Systems',
            description:
              'Embrapa reference to identify and select tree species that strengthen silvopastoral systems.',
            type: 'APP • Embrapa',
            link:
              'https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/1479/guia-arbopasto---manual-de-identificacao-e-selecao-de-especies-arboreas-para-sistemas-silvipastoris'
          },
          {
            title: 'Dairy Farming in the Amazon',
            description:
              'Study with recommendations to increase productivity and sustainability of Amazonian dairy production.',
            type: 'PDF • Embrapa',
            link:
              'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1126135/pecuaria-leiteira-na-amazonia'
          },
          {
            title: 'ILPF – Perspectives for a Sustainable Brazil',
            description:
              'Overview of Brazilian Crop-Livestock-Forest Integration cases and their sustainable outcomes.',
            type: 'PDF • Embrapa',
            link:
              'https://www.embrapa.br/agrossilvipastoril/busca-de-publicacoes/-/publicacao/1163804/ilpf-olhares-para-o-brasil-sustentavel--iclf-a-portrait-of-sustainable-production-in-brazil'
          }
        ]
      },
      chatbot: {
        title: 'Virtual Assistant',
        subtitle:
          'Get your questions about sustainable livestock answered by our specialized assistant.',
        description:
          'Our chatbot is available to answer technical questions, provide guidance and connect you with our team.',
        cta: 'Start Conversation'
      },
      contact: {
        title: 'Contact',
        subtitle:
          'Get in touch with us to learn more about the project or participate in the initiatives.',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send Message'
        },
        info: {
          address:
            'Rua Padre Chiquinho, 1651, B. São João Bosco, Porto Velho – Rondônia – Brasil',
          phone: '(69) 99248-1087',
          email: 'rioterra@rioterra.org.br'
        }
      },
      footer: {
        description:
          'Transforming Amazonian livestock through sustainability and innovation.',
        links: 'Useful Links',
        social: 'Social Media',
        rights: '© 2025 Rioterra. All rights reserved.'
      }
    }
  };

  const currentContent = content[language];

  const interactiveMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  };

  const navMotion = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.92 },
    transition: { type: 'spring', stiffness: 500, damping: 30 }
  };

  const navLinkClasses =
    'nav-link font-semibold tracking-tight text-white hover:text-[#ffd301] transition-colors';

  const cardHover = {
    whileHover: { y: -10, scale: 1.01 },
    transition: { type: 'spring', stiffness: 250, damping: 18 }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
      {/* Navegação */}
      <nav className={`navbar-fixed ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={pecuariaLogo} alt="Pecuária+" id="pecuariamais-logo" className="h-12 w-auto" />
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('home')}
                className={navLinkClasses}
              >
                {currentContent.nav.home}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('why')}
                className={navLinkClasses}
              >
                {currentContent.nav.why}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('about')}
                className={navLinkClasses}
              >
                {currentContent.nav.about}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('practices')}
                className={navLinkClasses}
              >
                {currentContent.nav.practices}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('videos')}
                className={navLinkClasses}
              >
                {currentContent.nav.videos}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('publications')}
                className={navLinkClasses}
              >
                {currentContent.nav.publications}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('chatbot')}
                className={navLinkClasses}
              >
                {currentContent.nav.chatbot}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('contact')}
                className={navLinkClasses}
              >
                {currentContent.nav.contact}
              </motion.button>

              {/* Seletor de idioma */}
              <div className="flex items-center space-x-2">
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => setLanguage('pt')}
                  className={`px-3 py-1 rounded-full border border-white/30 text-sm font-semibold transition-colors ${language === 'pt' ? 'bg-[#ffd301] text-black shadow-[0_12px_30px_rgba(255,211,1,0.35)]' : 'text-white/80 hover:text-white'}`}
                >
                  PT
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full border border-white/30 text-sm font-semibold transition-colors ${language === 'en' ? 'bg-[#ffd301] text-black shadow-[0_12px_30px_rgba(255,211,1,0.35)]' : 'text-white/80 hover:text-white'}`}
                >
                  EN
                </motion.button>
              </div>
            </div>

            {/* Menu Mobile */}
            <motion.button
              {...navMotion}
              type="button"
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Menu Mobile Expandido */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-white/10 bg-[#074536]/95 backdrop-blur-xl max-w-full overflow-x-hidden rounded-3xl px-4"
            >
              <div className="flex flex-col space-y-4 pt-4 w-full">
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('home')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.home}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('why')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.why}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.about}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('practices')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.practices}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('videos')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.videos}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('publications')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.publications}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('chatbot')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.chatbot}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className={`text-left ${navLinkClasses}`}
                >
                  {currentContent.nav.contact}
                </motion.button>
                <div className="flex space-x-2 pt-2">
                  <motion.button
                    {...navMotion}
                    type="button"
                    onClick={() => setLanguage('pt')}
                    className={`px-3 py-1 rounded-full border border-white/30 text-sm font-semibold transition-colors ${language === 'pt' ? 'bg-[#ffd301] text-black shadow-[0_12px_30px_rgba(255,211,1,0.35)]' : 'text-white/80 hover:text-white'}`}
                  >
                    PT
                  </motion.button>
                  <motion.button
                    {...navMotion}
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full border border-white/30 text-sm font-semibold transition-colors ${language === 'en' ? 'bg-[#ffd301] text-black shadow-[0_12px_30px_rgba(255,211,1,0.35)]' : 'text-white/80 hover:text-white'}`}
                  >
                    EN
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <Hero
        content={currentContent.hero}
        backgroundImage={heroImage}
        onPrimaryClick={() => scrollToSection('why')}
        onSecondaryClick={() => scrollToSection('contact')}
      />

      {/* Por que Pecuária Sustentável */}
      <section id="why" className="section-padding relative">
        <div className="absolute inset-0">
          <img
            src={porqueImage}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-[#074536]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#074536]/75 via-[#207d0f]/45 to-black/70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-16"
          >
            <SectionTitle
              title={currentContent.why.title}
              subtitle={currentContent.why.subtitle}
              titleClassName="text-white"
              subtitleClassName="text-white/80"
            />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {currentContent.why.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full p-6 text-center sm:p-8">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 sm:h-16 sm:w-16">
                    <item.icon size={28} className="text-green-light sm:size-8" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/80 md:text-base">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
     <section id="about" className="section-padding">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mb-10 text-center md:mb-12"
            >
              <SectionTitle
                title={currentContent.about.title}
                subtitle={currentContent.about.subtitle}
                align="center"
                subtitleClassName="mb-0 leading-relaxed"
              />
            </motion.div>

            {/* Grid Bento Centralizado */}
            <div className="w-full max-w-5xl mx-auto">
              <div className="grid auto-rows-[200px] grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-8 md:gap-6">
                
                {/* Imagem Principal - Centralizada */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="group relative overflow-hidden rounded-3xl md:col-span-6 lg:col-span-4 lg:col-start-3 lg:row-span-2 shadow-xl"
                >
                  <img
                    src={aboutHeroImage}
                    alt={currentContent.about.hero.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {currentContent.about.hero.caption && (
                    <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-white/15 p-3 backdrop-blur-lg sm:p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                        Pecuária+
                      </p>
                      <p className="text-base font-medium text-white md:text-lg">
                        {currentContent.about.hero.caption}
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Cards dos Objetivos - Laterais */}
                {currentContent.about.objectives.map((objective, index) => (
                  <motion.div
                    key={objective.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group relative overflow-hidden rounded-3xl border border-green-secondary/10 bg-[#F4F9F7] p-4 shadow-sm md:col-span-3 lg:col-span-2 ${
                      index === 0 ? 'lg:col-start-1 lg:row-start-1' :
                      index === 1 ? 'lg:col-start-7 lg:row-start-1' :
                      index === 2 ? 'lg:col-start-1 lg:row-start-2' :
                      'lg:col-start-7 lg:row-start-2'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-light/0 via-green-light/0 to-green-light/0 transition-colors duration-500 group-hover:from-green-light/40 group-hover:via-green-light/20 group-hover:to-green-secondary/10"></div>
                    <div className="relative flex h-full flex-col justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-light/60 text-[#0A4738] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0A4738] group-hover:text-white shrink-0">
                        <objective.icon size={22} />
                      </div>
                      <div className="flex-1 min-h-0">
                        <h3 className="mb-1 text-base font-semibold text-[#0A4738] line-clamp-2 md:text-lg">{objective.title}</h3>
                        <p className="text-xs text-[#14594A] leading-relaxed line-clamp-4 md:text-sm">{objective.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Card de Inovação - Largura Total */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="group relative overflow-hidden rounded-3xl bg-[#FFE28A] p-5 shadow-lg md:col-span-6 md:p-6 lg:col-span-8 lg:row-start-3"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#F9C642]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="relative flex h-full flex-col justify-center gap-4 text-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A45A00] sm:text-sm">
                        {currentContent.about.innovation.title}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-snug text-[#7A4100] md:text-2xl">
                        {currentContent.about.innovation.description}
                      </h3>
                    </div>
                    <p className="text-sm text-[#A45A00]/80 md:text-base">
                      {currentContent.about.innovation.tagline}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </section>

      <Practices
        title={currentContent.practices.title}
        subtitle={currentContent.practices.subtitle}
        items={currentContent.practices.items}
      />

      {/* Vídeos */}
      <section id="videos" className="section-padding pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-16"
          >
            <SectionTitle
              title={currentContent.videos.title}
              subtitle={currentContent.videos.subtitle}
              subtitleClassName="mb-8"
            />
          </motion.div>

          <div className="rounded-2xl bg-gray-light px-6 py-10 text-center text-green-secondary sm:px-8 sm:py-12 md:px-12 md:py-16">
            <Play size={48} className="mx-auto mb-6 text-green-secondary md:mb-8 md:size-16" />
            <p className="text-lg font-semibold text-[#074536] sm:text-xl md:text-2xl">
              {currentContent.videos.placeholder}
            </p>
          </div>
        </div>
      </section>

      {/* Publicações */}

      <section id="publications" className="section-padding relative">
        <div className="absolute inset-0">
          <img
            src={publiImage}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-[#074536]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#074536]/70 via-[#207d0f]/45 to-black/70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-16"
          >
            <SectionTitle
              title={currentContent.publications.title}
              subtitle={currentContent.publications.subtitle}
              titleClassName="text-white"
              subtitleClassName="text-white/80"
            />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {currentContent.publications.items.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                {...cardHover}
              >
                <Card className="glass-card flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <Download size={22} className="text-white sm:size-6" />
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 sm:text-sm">
                      {publication.type}
                    </span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white md:text-xl">
                    {publication.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/80 md:text-base">
                    {publication.description}
                  </p>
                  <div className="mt-auto">
                    <motion.button
                      {...interactiveMotion}
                      type="button"
                      onClick={() => handleDownload(publication.link)}
                      className="btn-primary w-full text-sm sm:text-base"
                    >
                      Baixar Material
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Chatbot */}
      <section id="chatbot" className="section-padding relative overflow-hidden">
        {/* Mascote como background da seção */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 transform">
          <img
            src={assistantAvatar}
            className="h-48 w-48 opacity-50 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
            style={{
              filter: 'blur(1px)',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title={currentContent.chatbot.title}
                subtitle={currentContent.chatbot.subtitle}
                subtitleClassName="mb-8"
              />
              <p className="mb-10 text-base leading-relaxed text-black/70 md:mb-12 md:text-lg">
                {currentContent.chatbot.description}
              </p>

              <motion.button
                {...interactiveMotion}
                type="button"
                onClick={handleChatbotClick}
                className="btn-primary inline-flex items-center space-x-3 text-base sm:text-lg"
              >
                <img src={whatsappIcon} className="h-9 w-9 justify-center sm:h-10 sm:w-10" />
                <span>{currentContent.chatbot.cta}</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection content={currentContent.contact} />

      {/* Footer */}
      <footer className="bg-green-primary py-12 text-white md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            <div className="col-span-2">
              <img src={pecuariaLogo} alt="Pecuária+" className="h-16 w-auto mb-6 brightness-0 invert" />
              <p className="text-white/80 leading-relaxed mb-6">
                {currentContent.footer.description}
              </p>
              <div className="flex space-x-4">
                <motion.a
                  {...interactiveMotion}
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Facebook size={18} />
                </motion.a>
                <motion.a
                  {...interactiveMotion}
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Twitter size={18} />
                </motion.a>
                <motion.a
                  {...interactiveMotion}
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram size={18} />
                </motion.a>
                <motion.a
                  {...interactiveMotion}
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Youtube size={18} />
                </motion.a>
                <motion.a
                  {...interactiveMotion}
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Linkedin size={18} />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold md:text-xl">{currentContent.footer.links}</h4>
              <div className="space-y-3">
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Sobre o Projeto
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('practices')}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Práticas Sustentáveis
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('publications')}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Publicações
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </motion.button>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold md:text-xl">Rioterra</h4>
              <div className="space-y-3 text-white/80">
                <p>Porto Velho - RO</p>
                <p>Brasil</p>
                <p className="text-sm">rioterra@rioterra.org.br</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center md:mt-12">
            <img
              src={rubricaImagem}
              alt="Rubrica do Projeto Pecuária+"
              className="max-w-full h-auto w-[min(100%,48rem)]"
            />
          </div>

          <div className="mt-10 border-t border-white/20 pt-6 text-center md:mt-12 md:pt-8">
            <p className="text-white/60">
              {currentContent.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
