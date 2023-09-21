import Shimmer from "../Shimmer";

const ReposLoading = () => {
  const items = Array.from({ length: 3 }, (_, idx) => idx + 1);
  return (
    <div className="grid max-h-[300px] grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-[10px] overflow-auto pr-[10px]">
      {items.map((item) => (
        <div
          className="pointer-events-none flex min-h-[100px] w-full flex-col rounded-[4px] border-[1px] border-slate-300 p-[10px]"
          key={item}
        >
          <div className="relative min-h-[18px] w-[150px] overflow-hidden rounded-[4px] bg-slate-100">
            <Shimmer />
          </div>
          <div className="mt-[7px]">
            <div className="relative min-h-[12px] w-[90%] overflow-hidden rounded-[4px] bg-slate-100">
              <Shimmer />
            </div>
            <div className="mt-[4px] relative min-h-[12px] w-[90%] overflow-hidden rounded-[4px] bg-slate-100">
              <Shimmer />
            </div>
            <div className="mt-[4px] relative min-h-[12px] w-[60%] overflow-hidden rounded-[4px] bg-slate-100">
              <Shimmer />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReposLoading;
