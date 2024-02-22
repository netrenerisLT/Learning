import Accordion from "./components/Accordon/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work wih us</h2>
        <Accordion className="accordion">
          <Accordion.IIItem
            id="experience"
            className="accordion-item"
            title="We got experience"
          >
            <article>
              <p>You cant go wrong with us</p>
              <p>We are proffesionals</p>
            </article>
          </Accordion.IIItem>
          <Accordion.IIItem
            id="local-guides"
            className="accordion-item"
            title="Over 20 projects"
          >
            <article>
              <p>We can prove you</p>
              <p>Just contact us</p>
            </article>
          </Accordion.IIItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
