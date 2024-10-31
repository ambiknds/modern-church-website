import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ValueCard({ title, description, icon: Icon, delay = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-base leading-7 text-gray-600 text-center">
        {description}
      </p>
    </motion.div>
  );
}