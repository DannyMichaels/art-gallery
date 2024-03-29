import GalleryImage from './assets/desktop/image-grid-1@2x.jpg';
import { ImageAndText } from './components/ImageAndText';
import { Footer } from './components/Footer';
import { BlackBox } from './components/BlackBox';

function App() {
  return (
    <div className="App">
      <main className="App__body">
        <div style={{ height: '150px', width: '100%' }}>something here</div>
        <section className="page-section inner-column">
          <ImageAndText
            image={GalleryImage}
            title="Your Day at the Gallery"
            paragraph="Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process."
          />
        </section>

        <section className="page-section inner-column">
          <BlackBox
            title="COME & BE INSPIRED"
            paragraph="We’re excited to welcome you to our gallery and see how our collections influence you."
            width={'455px'}
            height={'377px'}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
