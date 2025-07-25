'use client';

import Image from 'next/image';
import { useState } from 'react';

export const BandImage = ({ bandId }: { bandId: string }) => {
  const [imageUrl, setImageUrl] = useState<string>(`/images/im${bandId}.png`);

  return (
    <Image
      onError={() => setImageUrl('/images/default.png')}
      src={imageUrl}
      width={400}
      height={200}
      style={{ width: '100%', height: 'auto' }}
      alt=""
    />
  );
};
