import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { Calendar, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    name: 'Sunday Worship Service',
    description: 'Join us for worship, prayer, and an inspiring message.',
    date: new Date('2024-03-10T09:00:00'),
    location: 'Main Sanctuary',
    type: 'Worship',
  },
  {
    id: 2,
    name: 'Youth Group Meeting',
    description: 'A time of fellowship, games, and spiritual growth for teens.',
    date: new Date('2024-03-12T18:30:00'),
    location: 'Youth Center',
    type: 'Youth',
  },
  {
    id: 3,
    name: 'Bible Study',
    description: 'In-depth study of Scripture with discussion and application.',
    date: new Date('2024-03-14T19:00:00'),
    location: 'Fellowship Hall',
    type: 'Education',
  },
];

const eventTypes = ['All', 'Worship', 'Youth', 'Education', 'Outreach'];

export default function Events() {
  return (
    <>
      <Helmet>
        <title>Events - Community Reach Ministries</title>
        <meta
          name="description"
          content="Join us for upcoming events at Community Reach Ministries. Find worship services, Bible studies, youth activities, and more."
        />
      </Helmet>

      <PageHeader
        title="Upcoming Events"
        subtitle="Join us in worship, fellowship, and community"
        backgroundImage="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Event Type Filter */}
          <div className="mb-12">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Filter by Type</h2>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Events List */}
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <div className="min-w-full divide-y divide-gray-300">
                    {events.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white px-4 py-5 sm:p-6 hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-x-4">
                          <div className="min-w-0 flex-auto">
                            <h3 className="text-lg font-semibold leading-6 text-gray-900">
                              {event.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                            <div className="mt-2 flex items-center gap-x-4 text-xs">
                              <div className="flex items-center gap-x-1 text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span>{format(event.date, 'MMMM d, yyyy')}</span>
                              </div>
                              <div className="flex items-center gap-x-1 text-gray-500">
                                <Clock className="h-4 w-4" />
                                <span>{format(event.date, 'h:mm a')}</span>
                              </div>
                              <div className="flex items-center gap-x-1 text-gray-500">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                          <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600">
                            {event.type}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}