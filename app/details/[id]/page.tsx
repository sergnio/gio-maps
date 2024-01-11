import { GetServerSideProps } from "next";
import { getPlaces } from "@/app/api/places/route";
import { getPlace } from "@/app/api/places/[id]/route";

interface Props {
  params: {
    id: string;
  };
}

export default async function PlaceDetail({ params: { id } }: any) {
  const {
    displayName: { text },
  } = await getPlace({ placeId: id });

  return (
    <div>
      {/*flex col*/}
      <div>
        <h1>{text}</h1>
        <p>rating, review count</p>
        <p>distance, address</p>
        <div>
          <h2>reviews</h2>
          <div>review box</div>
        </div>
      </div>
      <div>image container</div>
    </div>
  );
}
