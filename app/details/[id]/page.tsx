import { getPlaces } from "@/app/api/places/route";

interface Props {
  params: {
    id: string;
  };
}

export const generateStaticParams = async () => {
  const places: Place[] = await getPlaces();

  return places.map(({ id }) => ({
    id,
  }));
};

export default async function PlaceDetail({ params: { id } }: Props) {
  return <div>id: {id}</div>;
}
