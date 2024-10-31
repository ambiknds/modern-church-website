import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Church, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Events', href: '/events' },
  { name: 'Sermons', href: '/sermons' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Grace Community Church</span>
              <Church className="h-8 w-auto text-indigo-600" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <Link
              to="/giving"
              className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Give Now
            </Link> */}
          </div>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="fixed inset-0 z-50" />
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Grace Community Church</span>
                    <Church className="h-8 w-auto text-indigo-600" />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      {/* <Link
                        to="/giving"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Give Now
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">{children}</main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Church className="h-8 w-auto text-indigo-400" />
              <p className="text-sm leading-6 text-gray-300">
                Making a difference in our community through the love of Christ.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Visit
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <p className="text-sm leading-6 text-gray-300">
                        123 Church Street
                        <br />
                        Cityville, ST 12345
                      </p>
                    </li>
                    <li>
                      <p className="text-sm leading-6 text-gray-300">
                        Sunday Services:
                        <br />
                        9:00 AM & 11:00 AM
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Contact
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <p className="text-sm leading-6 text-gray-300">
                        Phone: (555) 123-4567
                      </p>
                    </li>
                    <li>
                      <p className="text-sm leading-6 text-gray-300">
                        Email: info@gracechurch.org
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 border-t border-white/10 pt-4 sm:mt-4 lg:mt-2">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Grace Community Church. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
