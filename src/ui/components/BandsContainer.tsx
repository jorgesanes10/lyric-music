import { Band, BandWidget } from './BandWidget';

export const BandsContainer = ({ bands }: { bands: Band[] }) => {
  const renderBands = () => {
    return bands.map((band) => <BandWidget key={band.id} band={band} />);
  };

  return (
    <section className="albums-grid grid grid-cols-3 gap-8">
      {renderBands()}
    </section>
  );
};
