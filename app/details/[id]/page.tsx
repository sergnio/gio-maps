import StarRating from "@/app/components/PizzaRating/PizzaRating";
import { getPlace } from "@/app/lib/getPlace";
import styles from "./page.module.css";
import Reviews from "@/app/components/Reviews/Reviews";
import GoogleMapEmbed from "@/app/components/GoogleMapEmbed/GoogleMapEmbed";
import type { Metadata } from "next";
import Head from "next/head";

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
    formattedAddress,
    reviews,
    location,
    websiteUri,
  } = await getPlace({ placeId: id });

  return (
    <>
      <Head>
        <title>{text} - Pizza Finder</title>
        <meta
          name="description"
          content={`Find out more about ${text}, a top-rated pizza place.`}
        />
      </Head>

      <h1 className={styles.title}>{text}</h1>
      <div className={styles.pageContentContainer}>
        <div className={styles.mapContentContainer}>
          <div className={styles.ratingContainer}>
            <p className={styles.ratingText}>{rating}</p>
            <StarRating rating={rating} />
            <p className={styles.ratingCount}>({userRatingCount})</p>
          </div>
          <GoogleMapEmbed location={location} />
          <p
            className={styles.address}
            aria-label={`Address: ${formattedAddress}`}
          >
            {formattedAddress}
          </p>
          <a
            href={websiteUri}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.websiteUri}
          >
            {websiteUri}
          </a>
        </div>
        <div>
          <div>
            <h2>Reviews</h2>
            <div className={styles.reviewContainer}>
              <Reviews reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
