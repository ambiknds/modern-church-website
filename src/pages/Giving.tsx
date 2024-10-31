import { Helmet } from 'react-helmet-async';
import { CreditCard, Wallet, Gift } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

const givingOptions = [
  {
    title: 'One-Time Gift',
    description: 'Make a single contribution to support our ministry and mission.',
    icon: Gift,
  },
  {
    title: 'Recurring Giving',
    description: 'Set up automatic monthly donations to provide consistent support.',
    icon: Wallet,
  },
  {
    title: 'Special Offerings',
    description: 'Contribute to specific ministry projects and outreach programs.',
    icon: CreditCard,
  },
];

export default function Giving() {
  return (
    <>
      <Helmet>
        <title>Give - Grace Community Church</title>
        <meta
          name="description"
          content="Support the ministry of Grace Community Church through your generous giving. Multiple giving options available."
        />
      </Helmet>

      <PageHeader
        title="Give"
        subtitle="Support our ministry and mission"
        backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Giving Message */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Generosity Makes a Difference
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your faithful giving supports our ministries, outreach programs, and helps us share
              God's love with our community and beyond.
            </p>
          </div>

          {/* Giving Options */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3">
              {givingOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div className="flex-1 rounded-3xl bg-gray-50 px-6 pb-8 pt-12">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-gray-50 px-3">
                          <option.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                      {option.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {option.description}
                    </p>
                    <button
                      type="button"
                      className="mt-8 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Give Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-base text-gray-600">
              For questions about giving or other ways to support our ministry,
              please contact our church office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}