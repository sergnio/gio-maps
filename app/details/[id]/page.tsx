import StarRating from "@/app/components/StarRating/StarRating";
import { getPlace } from "@/app/lib/getPlace";

interface Props {
  params: {
    id: string;
  };
}

export default async function PlaceDetail({ params: { id } }: Props) {
  const {
    rating,
    userRatingCount,
    displayName: { text },
  } = await getPlace({ placeId: id });

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
