document.addEventListener("DOMContentLoaded", function () {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "http://schema.org/",
      "@type": "Product",
      "name": "Influencer Marketing Agency in India",
      "image": "https://uploads-ssl.webflow.com/65e6d33f1f30ed3f56dd4007/660fe7356c1f0ce2c90a0e29_Logo%20SVG%201.svg",
      "description": "Discover Fame Keeda Networks, India's best influencer marketing agency, connecting brands with powerful personalities to drive engagement and growth.",
      "sku": "Influencer Marketing",
      "mpn": "Influencer Marketing Agency",
      "brand": {
        "@type": "Brand",
        "name": "Fame Keeda"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.3",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "m-stocks"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.1",
        "reviewCount": "35"
      }
    });
  
    document.head.appendChild(script);
  });
  