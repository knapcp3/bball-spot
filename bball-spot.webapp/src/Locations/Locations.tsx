"use client";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_LOCATIONS_QUERY = gql`
  query GetAllLocationsQuery {
    locations {
      id
      name
    }
  }
`;

const useFoo = () => {
  const { data, loading, error } = useQuery(GET_ALL_LOCATIONS_QUERY);

  return {
    data,
    loading,
    error,
  };
};

export default function LocationsList() {
  console.log("xd");

  const { data, loading, error } = useFoo();

  console.log({ data });

  return (
    <ul>
      {data?.locations.map((location: any) => (
        <li key={location.id}>{location.name}</li>
      ))}
    </ul>
  );
}
