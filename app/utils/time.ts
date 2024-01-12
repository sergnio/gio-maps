export const formatTimestamp = (timestamp: string) => {
  // check if timestamp is in the correct format
  if (!timestamp.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/)) {
    throw new Error("Invalid timestamp format");
  }

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formattedDate} at ${formattedTime}`;
};
