import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Grace Community Church - Welcome Home</title>
        <meta name="description" content="Welcome to Grace Community Church. Join us in worship, community, and service as we grow together in faith." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
            alt="Church interior"
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Welcome Home
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Join us in creating a community where faith, love, and service come together.
                Experience the transformative power of God's love every Sunday.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/about"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Contact Us <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Join us for these upcoming events and be part of our community.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'Sunday Service',
                description: 'Join us for worship and an inspiring message.',
                date: 'Every Sunday at 9:00 AM & 11:00 AM',
                icon: Calendar,
              },
              {
                title: 'Community Groups',
                description: 'Connect with others in small group settings.',
                date: 'Various Times',
                icon: Users,
              },
              {
                title: 'Outreach Program',
                description: 'Serve our local community together.',
                date: 'Monthly',
                icon: Heart,
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-start"
              >
                <div className="rounded-lg bg-gray-50 p-6 w-full">
                  <event.icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {event.description}
                  </p>
                  <p className="mt-4 text-sm text-gray-500">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/events"
              className="inline-flex items-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              View all events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
            alt="Church logo"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                "Welcome to Grace Community Church, where every person is valued and every story matters. 
                We believe in creating a space where faith grows, relationships thrive, and lives are transformed."
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                alt="Pastor Sarah Johnson"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Pastor Sarah Johnson</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Lead Pastor</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}