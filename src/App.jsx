import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Openings from './components/Openings.jsx';
import News from './components/News.jsx';
import Publications from './components/Publications.jsx';
import Talks from './components/Talks.jsx';
import Teaching from './components/Teaching.jsx';
import Service from './components/Service.jsx';
import CV from './components/CV.jsx';
import Footer from './components/Footer.jsx';

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'join', label: 'Join' },
  { id: 'publications', label: 'Publications' },
  { id: 'talks', label: 'Talks' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'service', label: 'Service' },
  { id: 'cv', label: 'CV' },
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header sections={sections} />
      <main id="main">
        <Hero />
        <About />
        <Openings />
        <News />
        <Publications />
        <Talks />
        <Teaching />
        <Service />
        <CV />
      </main>
      <Footer />
    </>
  );
}
