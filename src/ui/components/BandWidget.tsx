'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Panel } from './Panel';

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
  const [imageUrl, setImageUrl] = useState<string>(`/images/im${band.id}.png`);
  const { id, band_name, album, description } = band;

  return (
    <Panel>
      <article id={id}>
        <Image
          onError={() => setImageUrl('/images/default.png')}
          src={imageUrl}
          width={400}
          height={200}
          style={{ width: '100%', height: 'auto' }}
          alt=""
        />
        <div className="p-6">
          <h3 className="text-[var(--accent)] font-bold text-xl mb-2.5">
            {band_name}
          </h3>
          <p className="text-[13px] text-[var(--text-color)] mb-2.5">{album}</p>
          <p className="text-[13px]">{description}</p>
        </div>
      </article>
    </Panel>
  );
};
