import { Panel } from './Panel';
import { BandImage } from './BandImage';
import Link from 'next/link';

export type Band = {
  description: string;
  id: string;
  band_name: string;
  album: string;
  genre: string;
};

interface BandWidgetProps {
  band: Band;
}

export const BandWidget = ({ band }: BandWidgetProps) => {
  const { id, band_name, album, description } = band;

  return (
    <Panel data-testid="band-widget">
      <article id={id}>
        <Link href={`/${band.id}`}>
          <BandImage bandId={band.id} />
          <div className="p-6">
            <h3 className="text-[var(--accent)] font-bold text-xl mb-2.5">
              {band_name}
            </h3>
            <p className="text-[13px] text-[var(--text-color)] mb-2.5">
              {album}
            </p>
            <p className="text-[13px]">{description}</p>
          </div>
        </Link>
      </article>
    </Panel>
  );
};
