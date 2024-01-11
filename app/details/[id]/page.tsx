import { GetServerSideProps } from "next";
import { getPlaces } from "@/app/api/places/route";
import { getPlace } from "@/app/api/places/[id]/route";

interface Props {
  params: {
    id: string;
  };
}

export default async function PlaceDetail({ params: { id } }: any) {
  // export default async function PlaceDetail(props: any) {
  // console.log("props", props);

  const {
    displayName: { text },
  } = await getPlace({ placeId: id });

  // return <div>id: {props.params.id}</div>;
  return <div>name: {text}</div>;
}
