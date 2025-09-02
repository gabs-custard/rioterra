import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { 
  Leaf, 
  TrendingUp, 
  Users, 
  Award, 
  Play, 
  Download, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ChevronDown,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';
import './App.css';

// Importar assets
import pecuariaLogo from './assets/pecuaria_logo.svg';
import heroImage from './assets/banner_pecumais4.webp';
import sustainableImage from './assets/xcXwS7plUGet.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('pt');
  const [counters, setCounters] = useState({
    visitors: 0,
    downloads: 0,
    chatbotClicks: 0
  });

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulação de contadores (em produção, viria de analytics)
  useEffect(() => {
    const savedCounters = localStorage.getItem('pecuaria-counters');
    if (savedCounters) {
      setCounters(JSON.parse(savedCounters));
    }
    
    // Incrementar visitantes
    const newCounters = {
      visitors: (counters.visitors || 0) + 1,
      downloads: counters.downloads || 0,
      chatbotClicks: counters.chatbotClicks || 0
    };
    setCounters(newCounters);
    localStorage.setItem('pecuaria-counters', JSON.stringify(newCounters));
  }, []);

  const handleDownload = () => {
    const newCounters = {
      ...counters,
      downloads: counters.downloads + 1
    };
    setCounters(newCounters);
    localStorage.setItem('pecuaria-counters', JSON.stringify(newCounters));
  };

  const handleChatbotClick = () => {
    const newCounters = {
      ...counters,
      chatbotClicks: counters.chatbotClicks + 1
    };
    setCounters(newCounters);
    localStorage.setItem('pecuaria-counters', JSON.stringify(newCounters));
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
            title: 'Guia de Pastejo Rotacionado',
            description: 'Manual completo sobre implementação de sistemas de pastejo rotacionado.',
            type: 'PDF'
          },
          {
            title: 'Cartilha de Sistemas Agroflorestais',
            description: 'Orientações práticas para integração lavoura-pecuária-floresta.',
            type: 'PDF'
          },
          {
            title: 'Manual de Recuperação de Pastagens',
            description: 'Técnicas e metodologias para restauração de áreas degradadas.',
            type: 'PDF'
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
            title: 'Rotational Grazing Guide',
            description:
              'Complete manual on implementing rotational grazing systems.',
            type: 'PDF'
          },
          {
            title: 'Agroforestry Systems Booklet',
            description:
              'Practical guidelines for crop-livestock-forest integration.',
            type: 'PDF'
          },
          {
            title: 'Pasture Restoration Manual',
            description:
              'Techniques and methodologies for restoring degraded areas.',
            type: 'PDF'
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navegação */}
      <nav className={`navbar-fixed ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={pecuariaLogo} alt="Pecuária+" id="pecuariamais-logo" className="h-12 w-auto" />
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.home}
              </button>
              <button onClick={() => scrollToSection('why')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.why}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.about}
              </button>
              <button onClick={() => scrollToSection('practices')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.practices}
              </button>
              <button onClick={() => scrollToSection('videos')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.videos}
              </button>
              <button onClick={() => scrollToSection('publications')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.publications}
              </button>
              <button onClick={() => scrollToSection('chatbot')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.chatbot}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-primary transition-colors">
                {currentContent.nav.contact}
              </button>
              
              {/* Seletor de idioma */}
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setLanguage('pt')} 
                  className={`px-2 py-1 rounded ${language === 'pt' ? 'bg-green-primary text-white' : 'text-gray-700'}`}
                >
                  PT
                </button>
                <button 
                  onClick={() => setLanguage('en')} 
                  className={`px-2 py-1 rounded ${language === 'en' ? 'bg-green-primary text-white' : 'text-gray-700'}`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Menu Mobile */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Mobile Expandido */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.home}
                </button>
                <button onClick={() => scrollToSection('why')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.why}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.about}
                </button>
                <button onClick={() => scrollToSection('practices')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.practices}
                </button>
                <button onClick={() => scrollToSection('videos')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.videos}
                </button>
                <button onClick={() => scrollToSection('publications')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.publications}
                </button>
                <button onClick={() => scrollToSection('chatbot')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.chatbot}
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-green-primary">
                  {currentContent.nav.contact}
                </button>
                <div className="flex space-x-2 pt-2">
                  <button 
                    onClick={() => setLanguage('pt')} 
                    className={`px-3 py-1 rounded ${language === 'pt' ? 'bg-green-primary text-white' : 'text-gray-700 border'}`}
                  >
                    PT
                  </button>
                  <button 
                    onClick={() => setLanguage('en')} 
                    className={`px-3 py-1 rounded ${language === 'en' ? 'bg-green-primary text-white' : 'text-gray-700 border'}`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Pecuária Sustentável" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-primary/80 to-green-secondary/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {currentContent.hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              {currentContent.hero.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-primary text-lg px-8 py-4"
              >
                {currentContent.hero.cta}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary text-lg px-8 py-4"
              >
                {currentContent.hero.cta2}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Por que Pecuária Sustentável */}
      <section id="why" className="section-padding bg-gray-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-green-primary mb-6">
              {currentContent.why.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.why.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.why.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
              >
                <div className="w-16 h-16 bg-green-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} className="text-green-primary" />
                </div>
                <h3 className="text-2xl font-bold text-green-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
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
              <h2 className="text-4xl lg:text-5xl font-bold text-green-primary mb-6">
                {currentContent.about.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {currentContent.about.subtitle}
              </p>
              
              <div className="space-y-4 mb-8">
                {currentContent.about.objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-primary rounded-full"></div>
                    <span className="text-gray-700">{objective}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-yellow-accent/20 p-6 rounded-xl border-l-4 border-yellow-accent">
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
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="counter text-green-primary">{counters.visitors}</div>
                  <div className="text-sm text-gray-600">Visitantes</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Práticas de Pecuária Sustentável */}
      <section id="practices" className="section-padding bg-gray-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-green-primary mb-6">
              {currentContent.practices.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.practices.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.practices.items.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <h3 className="text-2xl font-bold text-green-primary mb-4">
                  {practice.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {practice.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-secondary mb-3">Benefícios:</h4>
                  {practice.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-light rounded-full"></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos */}
      <section id="videos" className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-green-primary mb-6">
              {currentContent.videos.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {currentContent.videos.subtitle}
            </p>
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
      <section id="publications" className="section-padding bg-gray-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-green-primary mb-6">
              {currentContent.publications.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.publications.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.publications.items.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <Download size={24} className="text-green-primary" />
                  <span className="text-sm bg-green-light/20 text-green-primary px-3 py-1 rounded-full">
                    {publication.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-green-primary mb-3">
                  {publication.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {publication.description}
                </p>
                <button 
                  onClick={handleDownload}
                  className="btn-primary w-full"
                >
                  Baixar Material
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
              <div className="counter text-green-primary">{counters.downloads}</div>
              <div className="text-sm text-gray-600">Downloads realizados</div>
            </div>
          </motion.div>
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
              <h2 className="text-4xl lg:text-5xl font-bold text-green-primary mb-6">
                {currentContent.chatbot.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {currentContent.chatbot.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                {currentContent.chatbot.description}
              </p>
              
              <button 
                onClick={handleChatbotClick}
                className="btn-primary text-xl px-12 py-6 inline-flex items-center space-x-3"
              >
                <MessageCircle size={24} />
                <span>{currentContent.chatbot.cta}</span>
              </button>
              
              <div className="mt-8">
                <div className="bg-green-light/20 p-4 rounded-xl inline-block">
                  <div className="counter text-green-primary">{counters.chatbotClicks}</div>
                  <div className="text-sm text-gray-600">Conversas iniciadas</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contact" className="section-padding bg-gray-light">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-green-primary mb-6">
              {currentContent.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentContent.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-green-primary mb-6">
                Envie uma mensagem
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.contact.form.name}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.contact.form.email}
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {currentContent.contact.form.message}
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  {currentContent.contact.form.send}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-primary mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-green-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                      <p className="text-gray-600">{currentContent.contact.info.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone size={24} className="text-green-primary" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                      <p className="text-gray-600">{currentContent.contact.info.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail size={24} className="text-green-primary" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                      <p className="text-gray-600">{currentContent.contact.info.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-green-primary mb-4">
                  Redes Sociais da Rioterra
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">{currentContent.footer.links}</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('about')} className="block text-white/80 hover:text-white transition-colors">
                  Sobre o Projeto
                </button>
                <button onClick={() => scrollToSection('practices')} className="block text-white/80 hover:text-white transition-colors">
                  Práticas Sustentáveis
                </button>
                <button onClick={() => scrollToSection('publications')} className="block text-white/80 hover:text-white transition-colors">
                  Publicações
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-white/80 hover:text-white transition-colors">
                  Contato
                </button>
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
