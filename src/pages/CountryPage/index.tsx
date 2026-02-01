import { useParams } from "react-router-dom";

export function CountryPage() {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      <h1>{name} Page</h1>
    </>
  )
}
