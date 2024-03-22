export async function POST(request: Request) {
    const { productId } = await request.json();
  
    // Ensure environment variables are defined
    const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  
    if (!storefrontAccessToken || !storeDomain) {
      console.error("Shopify environment variables are not defined.");
      return new Response(JSON.stringify({ success: false, error: "Server configuration error." }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    const graphqlQuery = JSON.stringify({
      query: `
        mutation AddLikedProduct($productId: ID!) {
          addLikedProduct(productId: $productId) {
            success
          }
        }
      `,
      variables: {
        productId,
      },
    });
  
    const response = await fetch(`https://${storeDomain}/api/2022-01/graphql.json`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      }),
      body: graphqlQuery,
    });
  
    const { data, errors } = await response.json();
  
    if (errors) {
      console.error(errors);
      return new Response(JSON.stringify({ success: false, errors }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    return new Response(JSON.stringify({ success: data.addLikedProduct.success }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  