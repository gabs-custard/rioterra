import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import Card from './Card';
import SectionTitle from './SectionTitle';

const socialLinks = [Facebook, Twitter, Instagram, Youtube, Linkedin];

const Contact = ({ content }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [touched, setTouched] = React.useState({
    name: false,
    email: false,
    message: false
  });
  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const interactiveMotion = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 420, damping: 28 }
  };

  const validateField = (field, value) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      if (field === 'name') return 'Informe seu nome.';
      if (field === 'email') return 'Informe um e-mail válido.';
      if (field === 'message') return 'Descreva sua mensagem.';
    }

    if (field === 'email') {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
      return emailRegex.test(trimmedValue) ? '' : 'O e-mail não parece válido.';
    }

    if (field === 'message' && trimmedValue.length < 10) {
      return 'Compartilhe um pouco mais de detalhes (mínimo de 10 caracteres).';
    }

    return '';
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleChange = (field) => (event) => {
    updateField(field, event.target.value);
  };

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationResults = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };
    setErrors(validationResults);
    setTouched({ name: true, email: true, message: true });
  };

  const showError = (field) => touched[field] && errors[field];

  const inputClassName = (field) =>
    `w-full px-4 py-3 border rounded-lg transition-all duration-200 ${
      showError(field)
        ? 'border-red-500 focus:ring-2 focus:ring-red-400 focus:border-red-400'
        : 'border-[#074536]/30 focus:ring-2 focus:ring-[#bcdb2e] focus:border-[#bcdb2e]'
    }`;

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-r from-[#f0f9ff] via-[#e8fff4] to-[#fff5e6]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionTitle title={content.title} subtitle={content.subtitle} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/90 p-8 shadow-xl border border-[#74c69d]/25 backdrop-blur">
              <h3 className="text-2xl font-bold text-[#0f5132] mb-6">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-sm font-medium text-[#125740] mb-2">
                    {content.form.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    onBlur={handleBlur('name')}
                    className={inputClassName('name')}
                    aria-invalid={showError('name') ? 'true' : 'false'}
                    aria-describedby={showError('name') ? 'contact-name-error' : undefined}
                  />
                  {showError('name') && (
                    <p id="contact-name-error" className="text-sm text-red-600 mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#125740] mb-2">
                    {content.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    className={inputClassName('email')}
                    aria-invalid={showError('email') ? 'true' : 'false'}
                    aria-describedby={showError('email') ? 'contact-email-error' : undefined}
                  />
                  {showError('email') && (
                    <p id="contact-email-error" className="text-sm text-red-600 mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#125740] mb-2">
                    {content.form.message}
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={handleChange('message')}
                    onBlur={handleBlur('message')}
                    className={inputClassName('message')}
                    aria-invalid={showError('message') ? 'true' : 'false'}
                    aria-describedby={showError('message') ? 'contact-message-error' : undefined}
                  />
                  {showError('message') && (
                    <p id="contact-message-error" className="text-sm text-red-600 mt-2">
                      {errors.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#207d0f] to-[#bcdb2e] py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  {...interactiveMotion}
                >
                  {content.form.send}
                </motion.button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="bg-white/90 p-8 shadow-xl border border-[#74c69d]/25 backdrop-blur">
              <h3 className="text-2xl font-bold text-[#0f5132] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-[#207d0f] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#125740] mb-1">Endereço</h4>
                    <p className="text-[#1f2a37]/80">{content.info.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={24} className="text-[#207d0f]" />
                  <div>
                    <h4 className="font-semibold text-[#125740] mb-1">Telefone</h4>
                    <p className="text-[#1f2a37]/80">{content.info.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail size={24} className="text-[#207d0f]" />
                  <div>
                    <h4 className="font-semibold text-[#125740] mb-1">E-mail</h4>
                    <p className="text-[#1f2a37]/80">{content.info.email}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/90 p-8 shadow-xl border border-[#74c69d]/25 backdrop-blur">
              <h3 className="text-xl font-bold text-[#0f5132] mb-4">Redes Sociais da Rioterra</h3>
              <div className="flex space-x-4">
                {socialLinks.map((Icon) => (
                  <motion.a
                    {...interactiveMotion}
                    key={Icon.displayName || Icon.name}
                    href="#"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#207d0f] to-[#74c69d] text-white flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
