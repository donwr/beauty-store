import productFragment from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;

export const getLikedProductsQuery = /* GraphQL */ `
  query getLikedProducts($query: String!) {
    products(first: 250, query: $query) {
      edges {
        node {
          id
          handle
          title
          // Add any other fields you need
        }
      }
    }
  }  
  ${productFragment}
`;


// Add this query definition near your other GraphQL queries
export const getNodesByIdsQuery = /* GraphQL */ `
  query getNodesByIds($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        id
        title
        handle
        descriptionHtml
        images(first: 1) {
          edges {
            node {
              src
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;
