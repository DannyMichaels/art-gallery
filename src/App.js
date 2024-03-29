import { ImageAndText } from './components/ImageAndText';
import GalleryImage from './assets/desktop/image-grid-1@2x.jpg';

function App() {
  return (
    <div className="App">
      <section className="page-section inner-column">
        <div style={{ height: '150px', width: '100%' }}>something here</div>
        <ImageAndText
          image={GalleryImage}
          title="Your Day at the Gallery"
          paragraph="Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process."
        />
      </section>
    </div>
  );
}

export default App;
