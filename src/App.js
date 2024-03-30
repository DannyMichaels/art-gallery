import { ImageAndText } from './components/ImageAndText';
import { Footer } from './components/Footer';
import { BlackBox } from './components/BlackBox';
import { OneByTwoGrid } from './components/OneByTwoGrid';
import { Hero } from './components/Hero';
import GalleryImage1 from './assets/desktop/image-grid-1@2x.jpg';
import GalleryImage2 from './assets/desktop/image-grid-2@2x.jpg';
import GalleryImage3 from './assets/desktop/image-grid-1@2x.jpg';

function App() {
  return (
    <div className="App">
      <main className="App__body">
        <Hero />

        <section className="page-section inner-column">
          <ImageAndText
            image={GalleryImage1}
            title="Your Day at the Gallery"
            paragraph="Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process."
          />
        </section>

        <section className="page-section inner-column">
          <OneByTwoGrid
            elements={[
              <img src={GalleryImage2} alt="gallery" />,
              <img src={GalleryImage3} alt="gallery" />,
              <BlackBox
                title="Come & Be Inspired"
                paragraph="We’re excited to welcome you to our gallery and see how our collections influence you."
              />,
            ]}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
