export const CardSkeleton = () => {
  return (
    <div className="w-full max-w-[300px] bg-transparent relative">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-slate-800 animate-pulse w-full h-[250px] md:h-[320px]">
        <div className="absolute top-2 right-2 p-4 bg-slate-700 rounded-full" />
      </div>
      <div className="mt-3 ml-auto w-3/4 h-5 bg-slate-800 rounded animate-pulse" />
    </div>
  );
};