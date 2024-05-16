import { useEffect, useState } from "react";
import RecipeReviewCard from "./Card"
export default function Home() {
  const [mesures, setMesures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/mesures')
      .then(response => response.json())
      .then(data => setMesures(data))
  }, []);
  return (
    <RecipeReviewCard mesure={mesures} />
  )
}
