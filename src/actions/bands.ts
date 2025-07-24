import bands from '@/lib/mock_data/bands.json';

export const fetchBands = async ({
  genre,
  query,
}: {
  genre?: string;
  query?: string;
}) => {
  let result = [];

  result = await Promise.all(
    bands.map(async (band) => {
      try {
        const additionalDataModule = await import(
          `@/lib/mock_data/${band.id}.json`
        );
        const additionalData = additionalDataModule.default;

        return {
          ...band,
          description: additionalData.description,
        };
      } catch (error) {
        console.error(`File for ${band.id} not found or invalid JSON`, error);

        // Handle fallback (optional)
        return {
          ...band,
          description: 'We are working on the description for this band.',
        };
      }
    }),
  );

  if (genre && genre !== 'all') {
    result = result.filter((band) => band.genre === genre);
  }

  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    result = result.filter(
      (band) => band.band_name.toLowerCase().includes(lowerCaseQuery),
      // Uncomment this to enable album search
      // || band.album.toLowerCase().includes(lowerCaseQuery),
    );
  }

  return result;
};
