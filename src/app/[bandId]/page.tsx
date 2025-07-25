import { fetchBandById } from '@/actions/bands';
import { BandImage } from '@/ui/components/BandImage';
import { Band } from '@/ui/components/BandWidget';
import { ArrowLeftIcon, PlayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function BandDetail({
  params,
}: {
  params: Promise<{ bandId: string }>;
}) {
  const bandId = (await params).bandId;

  const [band] = (await fetchBandById(bandId)) as Band[];

  console.log('band', band);

  return (
    <main>
      <section className="flex">
        <Link
          href="/"
          className="absolute left-5 top-5 bg-black rounded-full p-2"
        >
          <ArrowLeftIcon className="h-10 w-10 text-white" />
        </Link>
        <button className="play-button absolute self-center bg-[var(--accent)] rounded-full p-3 cursor-pointer hover:scale-120 transition-all">
          <PlayIcon className="w-20 h-20 text-white" />
        </button>
        <BandImage bandId={bandId} />
      </section>
      <section className="p-4 flex flex-wrap items-center justify-between">
        <div>
          <h1 className="text-[var(--accent)] font-bold text-3xl">
            {band.band_name}
          </h1>
          <p className="mb-4">{band.album}</p>
          <p className="max-w-xl">{band.description}</p>
        </div>
        <button className="bg-[var(--accent)] font-bold text-white py-3 px-5 rounded-md cursor-pointer my-4">
          Buy album
        </button>
      </section>
    </main>
  );
}
