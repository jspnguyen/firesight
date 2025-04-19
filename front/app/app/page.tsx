import MapboxMap from '../components/MapboxMap';

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Location Search</h1>
        <MapboxMap />
      </div>
    </div>
  );
}
