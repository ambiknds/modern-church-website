import { Helmet } from 'react-helmet-async';
import {
  Heart,
  Users,
  BookOpenText,
  HandHelping,
  HandHeart,
  Church,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Timeline from '../components/Timeline';
import ValueCard from '../components/ValueCard';

const timelineEvents = [
  {
    year: '1985',
    title: 'Church Foundation',
    description:
      'Community Reach Ministries was established with a small group of dedicated families.',
  },
  {
    year: '1990',
    title: 'First Building',
    description:
      'Our first permanent church building was constructed and dedicated.',
  },
  {
    year: '2000',
    title: 'Community Outreach',
    description:
      'Launched major community outreach programs and youth ministry initiatives.',
  },
  {
    year: '2010',
    title: 'Growth & Expansion',
    description:
      'Expanded facilities to accommodate our growing congregation and ministries.',
  },
  {
    year: '2020',
    title: 'Digital Ministry',
    description:
      'Embraced digital transformation with online services and virtual community groups.',
  },
];

const values = [
  {
    title: 'Faith',
    description:
      'Grounded in Scripture and committed to spiritual growth through worship and study.',
    icon: BookOpenText,
  },
  {
    title: 'Community',
    description:
      'Building meaningful relationships and supporting one another in love.',
    icon: Users,
  },
  {
    title: 'Service',
    description:
      'Serving our community with compassion and meeting practical needs.',
    icon: HandHeart,
  },
  {
    title: 'Prayer',
    description:
      'Dedicated to prayer as the foundation of our relationship with God.',
    icon: HandHelping,
  },
  {
    title: 'Love',
    description: "Showing Christ's love to all people without discrimination.",
    icon: Heart,
  },
  {
    title: 'Worship',
    description:
      "Celebrating God's presence through meaningful worship experiences.",
    icon: Church,
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Community Reach Ministries</title>
        <meta
          name="description"
          content="Learn about Community Reach Ministries's history, mission, and values. Join our welcoming community of faith, love, and service."
        />
      </Helmet>

      <PageHeader
        title="About Us"
        subtitle="A community united in faith, growing together in God's love"
        backgroundImage="https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />

      {/* Mission Statement */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Lives Through Christ's Love
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Community Reach Ministries, we are committed to sharing the
              transformative power of God's love, building authentic
              relationships, and serving our community with compassion and
              grace.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Our Values
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Stand For
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide our ministry and shape our community.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 sm:grid-cols-2">
              {values.map((value, index) => (
                <ValueCard key={value.title} {...value} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Our Journey
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Legacy of Faith
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore the key moments that have shaped our church community over
              the years.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <Timeline events={timelineEvents} />
          </div>
        </div>
      </section>
    </>
  );
}
