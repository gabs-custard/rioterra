import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import Card from './Card';
import SectionTitle from './SectionTitle';

const socialLinks = [Facebook, Twitter, Instagram, Youtube, Linkedin];

const Contact = ({ content }) => (
  <section id="contact" className="section-padding bg-gray-light">
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
          <Card className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-primary mb-6">Envie uma mensagem</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.form.name}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.form.email}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {content.form.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {content.form.send}
              </button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <Card className="bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-green-primary mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-green-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                  <p className="text-gray-600">{content.info.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={24} className="text-green-primary" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                  <p className="text-gray-600">{content.info.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-green-primary" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-600">{content.info.email}</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white p-8 shadow-lg">
            <h3 className="text-xl font-bold text-green-primary mb-4">Redes Sociais da Rioterra</h3>
            <div className="flex space-x-4">
              {socialLinks.map((Icon) => (
                <a
                  key={Icon.displayName || Icon.name}
                  href="#"
                  className="w-12 h-12 bg-green-primary text-white rounded-full flex items-center justify-center hover:bg-green-secondary transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
