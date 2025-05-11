import roomData from "../roomData.json"; // Ensure this points to your rooms JSON
import specialData from "../services.json"; // Adjust the path as needed

export default async function sitemap() {
  const baseUrl = process.env.NEXT_BASE_URL;

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/accomodations`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  const dynamicRoomRoutes = (roomData.rooms || []).map((room) => ({
    url: `${baseUrl}/accomodations/${room.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  }));

  const dynamicPackageRoutes = (specialData.specialServices || []).map(
    (pkg) => ({
      url: `${baseUrl}${pkg.link}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...dynamicRoomRoutes, ...dynamicPackageRoutes];
}
