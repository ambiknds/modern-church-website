import { Helmet } from 'react-helmet-async';
import { BookOpen, Music, Heart, Users, Baby, GraduationCap } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const ministries = [
  {
    name: 'Adult Ministry',
    description: 'Grow in faith through Bible studies, small groups, and fellowship.',
    icon: BookOpen,
  },
  {
    name: 'Worship Ministry',
    description: 'Experience God through music, prayer, and creative expression.',
    icon: Music,
  },
  {
    name: 'Outreach Ministry',
    description: 'Serve our community and share God\'s love with those in need.',
    icon: Heart,
  },
  {
    name: 'Youth Ministry',
    description: 'Empowering young people to live out their faith.',
    icon: Users,
  },
  {
    name: 'Children\'s Ministry',
    description: 'Nurturing young hearts in a fun, safe environment.',
    icon: Baby,
  },
  {
    name: 'Education Ministry',
    description: 'Deepening biblical knowledge through classes and workshops.',
    icon: GraduationCap,
  },
];

export default function Ministries() {
  return (
    <>
      <Helmet>
        <title>Ministries - Community Reach Ministries</title>
        <meta
          name="description"
          content="Explore our various ministries at Community Reach Ministries. Find your place to serve, grow, and connect with others."
        />
      </Helmet>

      <PageHeader
        title="Our Ministries"
        subtitle="Find your place to serve, grow, and connect"
        backgroundImage="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
                  <div className="inline-flex rounded-lg bg-indigo-50 p-2 ring-4 ring-white">
                    <ministry.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-gray-900">
                    {ministry.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {ministry.description}
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}