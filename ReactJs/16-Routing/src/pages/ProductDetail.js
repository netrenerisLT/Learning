import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const id = params.id;
  
  return <div>ProductDetail</div>;
}

export default ProductDetail;
