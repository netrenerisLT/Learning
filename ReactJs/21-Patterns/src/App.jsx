import Accordion from "./components/Accordon/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work wih us</h2>
        <Accordion className="accordion">
          <Accordion.Iitem id="experience" className="accordion-item">
            <Accordion.Ttitle className="accordion-item-title">
              We got experience
            </Accordion.Ttitle>
            <Accordion.Ccontent className="accordion-item-content">
              <article>
                <p>You cant go wrong with us</p>
                <p>We are proffesionals</p>
              </article>
            </Accordion.Ccontent>
          </Accordion.Iitem>
          <Accordion.Iitem id="local-guides" className="accordion-item">
            <Accordion.Ttitle className="accordion-item-title">
              Over 20 projects
            </Accordion.Ttitle>
            <Accordion.Ccontent className="accordion-item-content">
              <article>
                <p>We can prove you</p>
                <p>Just contact us</p>
              </article>
            </Accordion.Ccontent>
          </Accordion.Iitem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
