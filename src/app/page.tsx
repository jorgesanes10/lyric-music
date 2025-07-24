import { fetchBands } from '@/actions/bands';
import { Band } from '@/ui/components/BandWidget';
import { HomeContent } from '@/ui/components/HomeContent';

export default async function Home(props: {
  searchParams?: Promise<{ genre?: string; query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const genre = searchParams?.genre || 'all';
  const query = searchParams?.query || '';

  const bands = (await fetchBands({ genre, query })) as Band[];

  return <HomeContent bands={bands} />;
}
