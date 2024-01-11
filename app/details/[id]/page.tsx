import { GetServerSideProps } from "next";
import { getPlaces } from "@/app/api/places/route";

interface Props {
  params: {
    id: string;
  };
}

const getStaticProps = async () => {
  const places: Place[] = await getPlaces();

  return places.map(({ id }) => ({
    id,
  }));
};

export default async function PlaceDetail({ params: { id } }: Props) {
  return <div>id: {id}</div>;
}
