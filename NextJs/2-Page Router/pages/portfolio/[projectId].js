import React, { use } from "react";
import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  const path = router.pathname;
  const query = router.query;
  
  return <div>PortfolioProjectPage</div>;
}
