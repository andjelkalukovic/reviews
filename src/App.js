import Review from "./Review";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <main className='main-review align-self-center'>
      <section>
        <div className='container text-center'>
          <h1 className='pb-4'>Reviews</h1>
          <Review />
        </div>
      </section>
    </main>
  );
}

export default App;
