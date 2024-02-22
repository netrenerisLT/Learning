import { useContext } from "react";
import { createContext } from "react";

const AccordionItemIdContext = createContext();

export function useAccordionItemIdContext() {
  const ctx = useContext(AccordionItemIdContext);
  if (!ctx) {
    throw new Error("Wrong related id props.");
  }
  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordionItemIdContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemIdContext.Provider>
  );
}
