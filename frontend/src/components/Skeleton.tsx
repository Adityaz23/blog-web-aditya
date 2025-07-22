export const Skeleton = () => {
  return (
    <div role="status" className="flex animate-pulse">
      <div className="p-4 border-b border-slate-300 pb-3 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <h3 className="h-4 w-4 bg-gray-300 rounded-full mb-4"></h3>
          <div className="text-sm font-mono mt-1 text-slate-400 pl-2">
            <p className="h-2 bg-gray-300 rounded-full w-[320px] mb-2.5"></p>⋮
          </div>
          <div className="text-sm font-bold mt-1 text-fuchsia-300 pl-2">
            <p className="h-2 bg-gray-300 rounded-full w-[320px] mb-2.5"></p>
          </div>
        </div>
        <div className="text-2xl font-extrabold">
          <p className="h-2 bg-gray-300 rounded-full w-[320px] mb-2.5"></p>{" "}
        </div>
        <div className="text-sm font-thin text-slate-800">
          <p className="h-2 bg-gray-300 rounded-full w-[320px] mb-2.5"></p>
        </div>
        <div className="text-xs font-thin text-slate-800">{`${(
          <p className="h-2 bg-gray-300 rounded-full w-[320px] mb-2.5"></p>
        )} minute read`}</div>
      </div>
    </div>
  );
};
