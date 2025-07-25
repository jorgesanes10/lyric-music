import bands from '@/lib/mock_data/bands.json';

const addDescriptions = async (
  list: { id: string; band_name: string; album: string; genre: string }[],
) => {
  return await Promise.all(
    list.map(async (band) => {
      try {
        const additionalDataModule = await import(
          `@/lib/mock_data/${band.id}.json`
        );

        const additionalData = additionalDataModule.default;

        return {
          ...band,
          description: additionalData.description,
        };
      } catch {
        return {
          ...band,
          description: 'We are working on the description for this band.',
        };
      }
    }),
  );
};

export const fetchBands = async ({
  genre,
  query,
}: {
  genre?: string;
  query?: string;
}) => {
  let result = [...bands];

  if (genre && genre !== 'all') {
    result = result.filter((band) => band.genre === genre);
  }

  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    result = result.filter(
      (band) =>
        band.band_name.toLowerCase().includes(lowerCaseQuery) ||
        band.album.toLowerCase().includes(lowerCaseQuery),
    );
  }

  result = await addDescriptions(result);

  return result;
};

export const fetchBandById = async (id: string) => {
  let result = bands.filter((band) => band.id === id);

  result = await addDescriptions(result);

  return result;
};
