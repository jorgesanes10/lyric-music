import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import { Band, BandWidget } from './BandWidget';
import Link from 'next/link';

export const BandsContainer = ({ bands }: { bands: Band[] }) => {
  const bandsToRender = bands.map((band) => (
    <BandWidget key={band.id} band={band} />
  ));

  return (
    <section className="albums-grid grid grid-cols-3 gap-8">
      {bandsToRender.length > 0 ? (
        bandsToRender
      ) : (
        <div className="flex flex-col items-center justify-center mt-10 col-span-3">
          <h1 className="text-4xl font-bold text-[var(--accent)] mb-10">
            <MusicalNoteIcon className="inline-block w-20 h-20 mr-2" />
            No bands found
            <MusicalNoteIcon className="inline-block w-20 h-20 mr-2" />
          </h1>
          <p className="text-center">
            Try adjusting your search query and filters or{' '}
            <Link href="/" className="text-[var(--accent)]">
              reset them
            </Link>
            .
          </p>
        </div>
      )}
    </section>
  );
};
