import Head from "next/head";

export default ({
  title = "Helyx Hacks III",
  description = "A 7-day biotech hackathon for middle and high schoolers online.",
  image = "https://angelhacks.org/static/banner-inverted.png",
  url = "http://helyxhacks.org/"
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Helyx Hacks III" />
    <meta name="twitter:site" content="@thehelyxinitiative" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "helyxhacksIII",
          url: "https://helyxhacks.org",
          logo: "https://angelhacks.org/logo_inverted.png",
          sameAs: [
            "https://www.instagram.com/thehelyxinitiative/",
            "https://www.facebook.com/thehelyxinitiative/"
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "yash@helyxscience.org",
              contactType: "customer support",
              url: "https://helyxhacks.org"
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org/",
          "@type": "Event",
          name: "Helyx Hacks III",
          startDate: "2021-04-02T10:00",
          endDate: "2021-04-09T16:00",
          description:
            "Register today for a 7 day free hackathon online. Helyx Hacks III will start on April 2nd, 2021 and open to all middle and high school students.",
          isAccessibleForFree: true,
          url: "https://helyxhacks.org",
          image: "https://angelhacks.org/static/logo-inverted.png",
          location: {
            "@type": "Place",
            name: "Online",
          },
          sponsor: {
            "@type": "Organization",
            name: "The Helyx Initiative",
            url: "https://helyx.science"
          },
          offers: {
            "@type": "Offer",
            name: "Free Admission",
            url: "https://helyxhacks.org",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            validFrom: "2021-02-15",
            validThrough: "2021-04-05"
          },
          performer: {
            "@type": "PerformingGroup",
            name: "The Helyx Initiative"
          }
        })
      }}
    />
  </Head>
);
