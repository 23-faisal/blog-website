import Blog from "../components/Blog";
import Counter from "../components/Counter";
import Hero from "../components/Hero";
import Information from "../components/Information";
import Projects from "../components/Projects";
import Review from "../components/Review";
import Services from "../components/Services";

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <Hero />
      <Services />
      <Counter />
      <Information />
      <Blog />
      <Projects />
      <Review />
    </section>
  );
};

export default Home;
