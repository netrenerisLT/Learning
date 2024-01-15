export default function Tabs({ children, buttons, buttonsContainerType }) {
  const ButtonsContainerType = buttonsContainerType;
  return (
    <>
      <ButtonsContainerType>{buttons}</ButtonsContainerType>
      {children}
    </>
  );
}
