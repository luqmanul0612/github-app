import Shimmer from "../Shimmer";

export const UserLoading = () => (
  <>
    <div className="relative h-[35px] min-h-[35px] w-[35px] min-w-[35px] overflow-hidden rounded-full bg-slate-100 md:h-[40px] md:min-h-[40px] md:w-[40px] md:min-w-[40px]">
      <Shimmer />
    </div>
    <div className="flex w-full flex-col">
      <div className="relative mt-[4px] min-h-[17px] w-[170px] min-w-[170px] overflow-hidden rounded-[4px] bg-slate-100 md:min-h-[20px] md:w-[200px] md:min-w-[200px]">
        <Shimmer />
      </div>
      <div className="relative mt-[4px] min-h-[10px] w-[60px] min-w-[60px] overflow-hidden rounded-[4px] bg-slate-100 md:min-h-[12px] md:w-[80px] md:min-w-[80px]">
        <Shimmer />
      </div>
    </div>
  </>
);

const UsersLoading = () => {
  const items = Array.from({ length: 5 }, (_, idx) => idx + 1);
  return (
    <div className="flex w-full flex-col rounded-[6px] bg-white shadow-[0_2px_10px_theme(colors.slate.400)] md:w-[700px] ">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-3 border-b-[1px] border-slate-300 p-[0_20px] py-[10px]"
        >
          <UserLoading />
        </div>
      ))}
    </div>
  );
};

export default UsersLoading;
