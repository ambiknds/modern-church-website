import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}