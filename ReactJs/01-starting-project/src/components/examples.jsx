import { useState } from "react";
import { EXAMPLES } from "../data";
import { TabButton } from "../components/TabButton.jsx";

import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples(params) {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(params) {
    setSelectedTopic(params);
  }

  const tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttonsContainerType="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              <h3>COMPONENTS</h3>
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              <h3>JSX</h3>
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              <h3>PROPS</h3>
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              <h3>STATE</h3>
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
