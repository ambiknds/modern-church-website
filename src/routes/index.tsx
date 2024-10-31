import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Ministries = lazy(() => import('../pages/Ministries'));
const Events = lazy(() => import('../pages/Events'));
const Sermons = lazy(() => import('../pages/Sermons'));
const Contact = lazy(() => import('../pages/Contact'));
const Giving = lazy(() => import('../pages/Giving'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/giving" element={<Giving />} />
      </Routes>
    </Suspense>
  );
}
