import { useParams, useRouteMatch } from "react-router-dom";

function Card() {
  const { category } = useParams();
  const match = useRouteMatch();

  return (
    <>
      <h1>Card with id "{category}"</h1>
      <h1>match "{JSON.stringify(match)}"</h1>
    </>
  );
}


export default Card;
