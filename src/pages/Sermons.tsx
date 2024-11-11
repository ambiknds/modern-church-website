import { Helmet } from 'react-helmet-async';
import { Play, Download, Search } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const sermons = [
  {
    id: 1,
    title: 'Walking in Faith',
    speaker: 'Pastor Sarah Johnson',
    date: '2024-03-03',
    duration: '45:30',
    series: 'Faith Foundations',
    description: 'Exploring how to strengthen our faith in daily life.',
  },
  {
    id: 2,
    title: 'The Power of Prayer',
    speaker: 'Pastor Michael Chen',
    date: '2024-02-25',
    duration: '38:15',
    series: 'Prayer Life',
    description: 'Understanding the importance of maintaining a consistent prayer life.',
  },
  {
    id: 3,
    title: 'Living with Purpose',
    speaker: 'Pastor Sarah Johnson',
    date: '2024-02-18',
    duration: '42:45',
    series: 'Purpose Driven',
    description: 'Discovering God\'s purpose for your life and walking in it.',
  },
];

export default function Sermons() {
  return (
    <>
      <Helmet>
        <title>Sermons - Community Reach Ministries</title>
        <meta
          name="description"
          content="Listen to our latest sermons and messages from Community Reach Ministries. Grow in your faith through biblical teaching and inspiration."
        />
      </Helmet>

      <PageHeader
        title="Sermons"
        subtitle="Grow in your faith through biblical teaching"
        backgroundImage="https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search sermons..."
              />
            </div>
          </div>

          {/* Sermons Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon, index) => (
              <motion.div
                key={sermon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{sermon.date}</span>
                    <span className="text-sm text-gray-500">{sermon.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{sermon.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{sermon.speaker}</span>
                    <span>•</span>
                    <span>{sermon.series}</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-500">
                      <Play className="h-4 w-4" />
                      <span>Play</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-500">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
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