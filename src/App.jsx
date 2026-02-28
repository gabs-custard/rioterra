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
import pecuariaLogo from './assets/logo.png';
import logoFooter from './assets/logo_footer.png';
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
    window.open('https://wa.me/556992923625', '_blank');
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
        subtitle: 'Confira as práticas de pecuária sustentável em ação no campo amazônico.',
        videoUrl: 'https://www.youtube.com/embed/89PEdDYcrhM'
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
        benefits: [
          { icon: '🌱', title: 'Especialista em Sustentabilidade', description: 'Conhecimento técnico em práticas sustentáveis' },
          { icon: '📊', title: 'Análise de Dados', description: 'Insights baseados em dados reais do campo' },
          { icon: '🕒', title: 'Disponível 24/7', description: 'Assistência técnica a qualquer hora' },
          { icon: '🎯', title: 'Respostas Personalizadas', description: 'Soluções adaptadas ao seu contexto' }
        ],
        description: 'Nosso chatbot está disponível para responder questões técnicas, fornecer orientações e conectar você com nossa equipe.',
        message: 'Como posso ajudar?',
        cta: 'Iniciar Conversa'
      },
      contact: {
        title: 'Contato',
        subtitle: 'Entre em contato conosco para saber mais sobre o projeto ou participar das ações.',
        formTitle: 'Envie uma mensagem',
        form: {
          name: 'Nome',
          email: 'E-mail',
          message: 'Mensagem',
          send: 'Enviar Mensagem'
        },
        validation: {
          nameRequired: 'Informe seu nome.',
          emailRequired: 'Informe um e-mail válido.',
          emailInvalid: 'O e-mail não parece válido.',
          messageRequired: 'Descreva sua mensagem.',
          messageTooShort: 'Compartilhe um pouco mais de detalhes (mínimo de 10 caracteres).'
        },
        infoTitle: 'Informações de Contato',
        infoLabels: {
          address: 'Endereço',
          phone: 'Telefone',
          email: 'E-mail'
        },
        info: {
          address: 'Rua Padre Chiquinho, 1651, B. São João Bosco, Porto Velho – Rondônia – Brasil',
          phone: '(69) 99248-1087',
          email: 'rioterra@rioterra.org.br'
        },
        socialTitle: 'Redes Sociais da Rioterra'
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
        subtitle: 'Check out sustainable livestock practices in action in the Amazonian field.',
        videoUrl: 'https://www.youtube.com/embed/89PEdDYcrhM'
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
        benefits: [
          { icon: '🌱', title: 'Sustainability Specialist', description: 'Technical knowledge in sustainable practices' },
          { icon: '📊', title: 'Data Analysis', description: 'Insights based on real field data' },
          { icon: '🕒', title: 'Available 24/7', description: 'Technical assistance anytime you need it' },
          { icon: '🎯', title: 'Personalized Responses', description: 'Solutions tailored to your context' }
        ],
        description:
          'Our chatbot is available to answer technical questions, provide guidance and connect you with our team.',
        message: 'Can I help you?',
        cta: 'Start Conversation'
      },
      contact: {
        title: 'Contact',
        subtitle:
          'Get in touch with us to learn more about the project or participate in the initiatives.',
        formTitle: 'Send a message',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send Message'
        },
        validation: {
          nameRequired: 'Please provide your name.',
          emailRequired: 'Please enter a valid email address.',
          emailInvalid: 'This email address looks invalid.',
          messageRequired: 'Please describe your message.',
          messageTooShort: 'Share a few more details (minimum of 10 characters).'
        },
        infoTitle: 'Contact Information',
        infoLabels: {
          address: 'Address',
          phone: 'Phone',
          email: 'Email'
        },
        info: {
          address:
            'Rua Padre Chiquinho, 1651, B. São João Bosco, Porto Velho – Rondônia – Brasil',
          phone: '(69) 99248-1087',
          email: 'rioterra@rioterra.org.br'
        },
        socialTitle: 'Rioterra on Social Media'
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
    <div className="min-h-screen min-h-[100svh] bg-white overflow-x-hidden max-w-[100vw]">
      {/* Navegação */}
      <nav className={`navbar-fixed ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={pecuariaLogo} alt="Pecuária+" id="pecuariamais-logo" className="h-20 w-auto" />
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
                onClick={() => scrollToSection('chatbot')}
                className={navLinkClasses}
              >
                {currentContent.nav.chatbot}
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
              className="lg:hidden text-mobile-navbar"
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
              className="lg:hidden mt-4 pb-4 border-t border-white/10 bg-green-dark backdrop-blur-xl max-w-full overflow-x-hidden rounded-3xl px-4"
            >
              <div className="flex flex-col items-center space-y-4 pt-4 w-full">
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('home')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.home}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('why')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.why}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('chatbot')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.chatbot}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.about}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('practices')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.practices}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('videos')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.videos}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('publications')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.publications}
                </motion.button>
                <motion.button
                  {...navMotion}
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className={`w-full text-center ${navLinkClasses}`}
                >
                  {currentContent.nav.contact}
                </motion.button>
                <div className="flex justify-center space-x-2 pt-2">
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
      <section id="why" className="section-padding relative overflow-hidden">
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
              subtitleClassName="text-white"
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

      {/* Assistente Virtual - Redesenhado */}
      <section id="chatbot" className="section-padding relative overflow-hidden bg-gradient-to-br from-[#E8F5F0] via-[#F0F9F5] to-[#E1F2EE]">
        {/* Background com partículas animadas */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Partículas flutuantes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-light/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Círculos de fundo */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-green-light/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* Coluna do Mascote */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-start"
            >
              {/* Container do mascote com efeitos */}
              <div className="relative">
                {/* Glow effect atrás do mascote */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-light/30 via-blue-400/20 to-green-secondary/30 rounded-full blur-2xl scale-110 animate-pulse"></div>

                {/* Mascote principal */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{
                    scale: { duration: 0.3 },
                    rotate: { duration: 0.6, repeat: Infinity, repeatDelay: 3 }
                  }}
                  className="relative z-10"
                >
                  <img
                    src={assistantAvatar}
                    alt="Assistente Virtual RioTerra"
                    className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 drop-shadow-2xl"
                  />
                </motion.div>

                {/* Elementos flutuantes ao redor do mascote */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 pointer-events-none"
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-green-light rounded-full shadow-lg"
                      style={{
                        left: `${50 + 45 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                        top: `${50 + 45 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Badge "IA" flutuante */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-[#ffd301] to-[#ffed4e] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg border-2 border-white"
                >
                  {currentContent.chatbot.message}
                </motion.div>
              </div>
            </motion.div>

            {/* Coluna do Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Título e subtítulo */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-green-secondary leading-tight"
                >
                  {currentContent.chatbot.title}
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block ml-2 text-green-light"
                  >
                  </motion.span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-green-secondary/80 leading-relaxed"
                >
                  {currentContent.chatbot.subtitle}
                </motion.p>
              </div>

              {/* Cards de benefícios */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {(currentContent.chatbot.benefits ?? []).map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-green-light/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{benefit.icon}</span>
                      <div>
                        <h4 className="font-semibold text-green-secondary text-sm">{benefit.title}</h4>
                        <p className="text-xs text-green-secondary/70 mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Descrição adicional */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base text-green-secondary/70 leading-relaxed"
              >
                {currentContent.chatbot.description}
              </motion.p>

              {/* Botão de ação principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="pt-4 flex w-full justify-center lg:justify-start"
              >
                <motion.button
                  type="button"
                  onClick={handleChatbotClick}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center space-x-4 bg-green-secondary from-green-light to-green-secondary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-green-light/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Efeito de brilho animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />

                  <motion.img
                    src={whatsappIcon}
                    className="h-10 w-10 relative z-10"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">{currentContent.chatbot.cta}</span>

                  {/* Seta animada */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    →
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
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
              titleColor='text-green-secondary'
            />
          </motion.div>

          {/* Grid Bento Centralizado */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-8">

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
                  className={`group relative overflow-hidden rounded-3xl border border-green-secondary/10 bg-[#F4F9F7] p-4 shadow-sm md:col-span-3 lg:col-span-2 ${index === 0 ? 'lg:col-start-1 lg:row-start-1' :
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
                <div className="absolute inset-2 bg-gradient-to-br from-white/40 via-transparent to-[#F9C642]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
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
              titleColor='text-green-secondary'
            />
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-2xl bg-black aspect-video">
            <iframe
              className="w-full h-full"
              src={currentContent.videos.videoUrl}
              title={currentContent.videos.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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
              subtitleClassName="text-white"
            />
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3 md:gap-8">
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



      <ContactSection content={currentContent.contact} />

      {/* Footer */}
      <footer className="bg-green-dark py-12 text-white md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-4 md:gap-8">
            <div className="col-span-2">
              <img src={logoFooter} alt="Pecuária+" className="h-25 w-auto mb-6" />
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
