import { fetchBandById } from '@/actions/bands';
import { Band } from '@/ui/components/BandWidget';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
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
    <div className="flex items-end justify-center h-full">
      <Link
        href="/"
        className="absolute left-5 top-5 bg-black rounded-full p-2 z-10"
      >
        <ArrowLeftIcon className="h-10 w-10 text-white" />
      </Link>
      <video
        className="absolute h-[100vh] w-[100vw] object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={band.video}
      ></video>
      <section className="p-10 relative z-10 bg-black/80 inline-flex flex-col m-4 rounded-2xl">
        <div className="text-white">
          <h1 className="font-bold text-3xl">{band.band_name}</h1>
          <p className="mb-4">{band.album}</p>
          <p className="max-w-xl">{band.description}</p>
        </div>
        <button className="bg-[var(--accent)] font-bold text-white py-3 px-5 rounded-md cursor-pointer mt-4">
          Buy album
        </button>
      </section>
    </div>
  );
}
