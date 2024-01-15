export default function Tabs({
  children,
  buttons,
  ButtonsContainerType = "div",
}) {
  //   const ButtonsContainerType = buttonsContainerType;
  return (
    <>
      <ButtonsContainerType>{buttons}</ButtonsContainerType>
      {children}
    </>
  );
}
