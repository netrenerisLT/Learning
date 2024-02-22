import Accordion from "./components/Accordon/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

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
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(itemPlace) => <Place item={itemPlace} />}
        </SearchableList>
        <SearchableList items={["items", "items 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
