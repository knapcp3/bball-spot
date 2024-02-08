"use client";
import { useGetAllLocationsQuery } from "./useGetAllLocationsQuery";

export const LocationsList = () => {
  const { data, loading, error } = useGetAllLocationsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data?.locations.map((location: any, i) => (
        <div key={i}>
          <h2>{location.name}</h2>
        </div>
      ))}
    </div>
  );
};
