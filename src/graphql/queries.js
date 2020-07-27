import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

  
export const GET_ALL_SWATCHES = gql `
query swatches($first: Int, $offset: Int) {
    colorSwatches(first: $first, offset: $offset) {
        total
        currentCount
        data {
            name
            hex
        }
    }
}
`;

export const useGetColorSwatches = (first, offset) => {
    const result = useQuery(GET_ALL_SWATCHES, {
        variables: {
            first,
            offset
        }
    })

    return result;
}

export const GET_SWATCH = gql `
query swatch($hex: String!) {
    colorSwatch(hex: $hex) {
        name
        hex
    }
}
`;

export const useGetColorSwatch = (hex) => {
const result = useQuery(GET_SWATCH, {
    variables: {
        hex
    }
})

return result;
}