import { GetServerSideProps } from "next";
import { getPlaces } from "@/app/api/places/route";
import { getPlace } from "@/app/api/places/[id]/route";
import StarRating from "@/app/components/StarRating/StarRating";

interface Props {
  params: {
    id: string;
  };
}

export default async function PlaceDetail({ params: { id } }: any) {
  const {
    rating,
    userRatingCount,
    displayName: { text },
  } = await getPlace({ placeId: id });
  // const text = "place name";

  return (
    <div>
      {/*flex col*/}
      <div>
        <h1>{text}</h1>
        <div>
          <p>{rating}</p>
          <StarRating rating={rating} />
          <p>({userRatingCount})</p>
        </div>
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
