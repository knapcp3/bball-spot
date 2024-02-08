import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";

graphql(`
  fragment LocationFragment on Location {
    id
    name
  }
`);

const GET_ALL_LOCATIONS_QUERY = graphql(`
  query GetAllLocationsQuery {
    locations {
      ...LocationFragment
    }
  }
`);

export const useGetAllLocationsQuery = () => {
  const { data, loading, error } = useQuery(GET_ALL_LOCATIONS_QUERY);

  return {
    data,
    loading,
    error,
  };
};
