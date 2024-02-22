import Accordion from "./components/Accordon/Accordion";
import AccordionItem from "./components/Accordon/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work wih us</h2>
        <Accordion className="accordion">
          <AccordionItem
            id="experience"
            className="accordion-item"
            title="We got experience"
          >
            <article>
              <p>You cant go wrong with us</p>
              <p>We are proffesionals</p>
            </article>
          </AccordionItem>
          <AccordionItem
            id="local-guides"
            className="accordion-item"
            title="Over 20 projects"
          >
            <article>
              <p>We can prove you</p>
              <p>Just contact us</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

export default App;
