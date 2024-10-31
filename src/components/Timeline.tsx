import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {events.map((event, eventIdx) => (
          <motion.li
            key={event.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: eventIdx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center ring-8 ring-white">
                    <span className="text-sm text-white font-medium">{event.year}</span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-lg font-medium text-gray-900">{event.title}</p>
                    <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}