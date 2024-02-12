import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateFunction() {
    navigate("/products");
  }
  return (
    <>
      <h1>HomePage</h1>
      <button onClick={navigateFunction}>NavigateHandler</button>
    </>
  );
}

export default HomePage;
