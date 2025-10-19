export default function Loading() {
  return (
    <>
      <div className="mb-4 h-6" />
      <ul className="grid grid-flow-row gap-4 grid-cols-2 lg:grid-cols-3">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            return (
              <li key={index} className="aspect-square transition-opacity animate-pulse bg-secondary" />
            );
          })}
      </ul>
    </>
  );
}
