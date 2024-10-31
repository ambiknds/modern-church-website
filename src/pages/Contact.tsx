import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Grace Community Church</title>
        <meta
          name="description"
          content="Get in touch with Grace Community Church. We'd love to hear from you and answer any questions you may have."
        />
      </Helmet>

      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />

      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pr-8"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-500">
                We'd love to hear from you. Please feel free to get in touch with us using any of
                the following methods.
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <dt>
                    <Phone className="h-7 w-6 text-indigo-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="text-base font-semibold text-gray-900">Phone</p>
                    <p className="mt-1 text-base text-gray-500">(555) 123-4567</p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt>
                    <Mail className="h-7 w-6 text-indigo-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="text-base font-semibold text-gray-900">Email</p>
                    <p className="mt-1 text-base text-gray-500">info@gracechurch.org</p>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt>
                    <MapPin className="h-7 w-6 text-indigo-600" aria-hidden="true" />
                  </dt>
                  <dd>
                    <p className="text-base font-semibold text-gray-900">Location</p>
                    <p className="mt-1 text-base text-gray-500">
                      123 Church Street<br />
                      Cityville, ST 12345
                    </p>
                  </dd>
                </div>
              </dl>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-lg rounded-lg p-8"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}