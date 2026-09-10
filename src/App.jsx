import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Services from "./components/Services";
import Offers from "./components/Offers";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickInfo />
        <Categories />
        <Products />
        <Services />
        <Offers />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <Location />
        <Contact />
      </main>
      <Footer />
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur md:hidden">
        <a
          href={`tel:+917879331218`}
          className="flex items-center justify-center gap-2 px-2 py-3 text-xs font-black text-slate-700"
        >
          📞 Call
        </a>
        <a
          href={`https://wa.me/${"918602881218"}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 border-x border-slate-200 bg-green-600 px-2 py-3 text-xs font-black text-white"
        >
          💬 WhatsApp
        </a>
        <a
          href="https://goo.gl/maps/jdXMytx5ZnsFhvZi7?g_st=atm"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 px-2 py-3 text-xs font-black text-slate-700"
        >
          📍 Map
        </a>
      </div>
    </>
  );
}
