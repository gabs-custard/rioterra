import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import {
  Leaf,
  TrendingUp,
  Award,
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
import sustainableImage from './assets/xcXwS7plUGet.jpg';
import rubricaImagem from './assets/rubricaprojeto.jpeg';
import porqueImage from './assets/porquebg.png';

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
        objectives: [
          'Capacitar produtores rurais em práticas sustentáveis',
          'Implementar tecnologias de monitoramento e IA',
          'Promover a regularização ambiental das propriedades',
          'Desenvolver sistemas agroflorestais integrados',
          'Conectar produtores a mercados sustentáveis'
        ],
        innovation: 'Destaque para inovação com uso de Inteligência Artificial, análise de dados e assistência técnica especializada.'
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
        objectives: [
          'Train rural producers in sustainable practices',
          'Implement monitoring technologies and AI',
          'Promote environmental regularization of properties',
          'Develop integrated agroforestry systems',
          'Connect producers to sustainable markets'
        ],
        innovation:
          'Highlighting innovation through the use of Artificial Intelligence, data analysis and specialized technical assistance.'
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

  const cardHover = {
    whileHover: { y: -10, scale: 1.01 },
    transition: { type: 'spring', stiffness: 250, damping: 18 }
  };

  const objectiveContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 }
    }
  };

  const objectiveItemVariants = {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 }
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
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.home}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('why')}
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.why}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.about}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('practices')}
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.practices}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('videos')}
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.videos}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('publications')}
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.publications}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('chatbot')}
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.chatbot}
              </motion.button>
              <motion.button
                {...navMotion}
                type="button"
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-primary transition-colors"
              >
                {currentContent.nav.contact}
              </motion.button>

              {/* Seletor de idioma */}
              <div className="flex items-center space-x-2">
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => setLanguage('pt')}
                  className={`px-2 py-1 rounded ${language === 'pt' ? 'bg-green-primary text-white' : 'text-gray-700'}`}
                >
                  PT
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded ${language === 'en' ? 'bg-green-primary text-white' : 'text-gray-700'}`}
                >
                  EN
                </motion.button>
              </div>
            </div>

            {/* Menu Mobile */}
            <motion.button
              {...navMotion}
              type="button"
              className="lg:hidden"
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
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 max-w-full overflow-x-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4 w-full">
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('home')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.home}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('why')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.why}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.about}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('practices')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.practices}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('videos')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.videos}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('publications')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.publications}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('chatbot')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.chatbot}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-gray-700 hover:text-green-primary"
                >
                  {currentContent.nav.contact}
                </motion.button>
                <div className="flex space-x-2 pt-2">
                  <motion.button
                    {...navMotion}
                    type="button"
                    onClick={() => setLanguage('pt')}
                    className={`px-3 py-1 rounded ${language === 'pt' ? 'bg-green-primary text-white' : 'text-gray-700 border'}`}
                  >
                    PT
                  </motion.button>
                  <motion.button
                    {...navMotion}
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded ${language === 'en' ? 'bg-green-primary text-white' : 'text-gray-700 border'}`}
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
        onPrimaryClick={() => scrollToSection('about')}
        onSecondaryClick={() => scrollToSection('contact')}
      />

      {/* Por que Pecuária Sustentável */}
      <section id="why" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={porqueImage}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-emerald-800/40 to-slate-900/70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionTitle
              title={currentContent.why.title}
              subtitle={currentContent.why.subtitle}
              titleClassName="text-white"
              subtitleClassName="text-white/80"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.why.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card p-8 text-center h-full">
                  <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon size={32} className="text-green-light" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section id="about" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
              <SectionTitle
                title={currentContent.about.title}
                subtitle={currentContent.about.subtitle}
                align="left"
                className="mb-2"
                subtitleClassName="mb-8 leading-relaxed"
              />

              <motion.div
                className="space-y-4 mb-8"
                variants={objectiveContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                {currentContent.about.objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    variants={objectiveItemVariants}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-primary rounded-full"></div>
                    <span className="text-gray-700">{objective}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="bg-green-light p-6 rounded-xl border-l-4 border-green-secondary">
                <p className="text-gray-700 font-medium">
                  {currentContent.about.innovation}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={sustainableImage} 
                alt="Projeto Sustentável" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Practices
        title={currentContent.practices.title}
        subtitle={currentContent.practices.subtitle}
        items={currentContent.practices.items}
      />

      {/* Vídeos */}
      <section id="videos" className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionTitle
              title={currentContent.videos.title}
              subtitle={currentContent.videos.subtitle}
              subtitleClassName="mb-8"
            />
          </motion.div>

          <div className="bg-gray-light rounded-2xl p-16 text-center">
            <Play size={64} className="text-green-primary mx-auto mb-6" />
            <p className="text-2xl font-semibold text-gray-600">
              {currentContent.videos.placeholder}
            </p>
          </div>
        </div>
      </section>

      {/* Publicações */}
      <section id="publications" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={publiImage}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-emerald-950/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/60 via-emerald-800/45 to-slate-900/70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionTitle
              title={currentContent.publications.title}
              subtitle={currentContent.publications.subtitle}
              titleClassName="text-white"
              subtitleClassName="text-white/80"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.publications.items.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                {...cardHover}
              >
                <Card className="glass-card p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Download size={24} className="text-white" />
                    <span className="text-sm bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/20">
                      {publication.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {publication.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {publication.description}
                  </p>
                  <div className="mt-auto">
                    <motion.button
                      {...interactiveMotion}
                      type="button"
                      onClick={() => handleDownload(publication.link)}
                      className="btn-primary w-full"
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
      <section id="chatbot" className="section-padding">
        <div className="container mx-auto px-4">
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
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                {currentContent.chatbot.description}
              </p>

              <motion.button
                {...interactiveMotion}
                type="button"
                onClick={handleChatbotClick}
                className="btn-primary text-xl px-12 py-6 inline-flex items-center space-x-3"
              >
                <MessageCircle size={24} />
                <span>{currentContent.chatbot.cta}</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection content={currentContent.contact} />

      {/* Footer */}
      <footer className="bg-green-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
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
              <h4 className="text-xl font-bold mb-6">{currentContent.footer.links}</h4>
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
              <h4 className="text-xl font-bold mb-6">Rioterra</h4>
              <div className="space-y-3 text-white/80">
                <p>Porto Velho - RO</p>
                <p>Brasil</p>
                <p className="text-sm">rioterra@rioterra.org.br</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <img
              src={rubricaImagem}
              alt="Rubrica do Projeto Pecuária+"
              className="max-w-full h-auto w-[min(100%,48rem)]"
            />
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
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
