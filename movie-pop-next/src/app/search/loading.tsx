import { CardSkeleton } from "@/components/CardSkeleton";

export default function Loading() {
  const skeletons = Array(10).fill(0);

  return (
    <div className="container mx-auto p-6 min-h-[80vh]">
      <div className="w-1/2 h-10 bg-slate-800 rounded animate-pulse mb-8" />
      
      <div className="mb-10 w-full max-w-md h-12 bg-slate-800 rounded-full animate-pulse" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {skeletons.map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}