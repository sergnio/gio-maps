import { getPlaces } from "@/app/api/places/route";

interface Props {
  params: {
    id: string;
  };
}

export const generateStaticParams = async () => {
  const places: Place[] = await getPlaces();

  return places.map((post) => ({
    id: post.id,
  }));
};

export default async function PlaceDetail({ params: { id } }: Props) {
  return <h1>PlaceDetail</h1>;
}
