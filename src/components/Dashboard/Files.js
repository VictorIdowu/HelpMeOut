import File from "./File";

const Files = () => {
  return (
    <div className="mx-[100px] pt-10 flex flex-col gap-10 pr-16 fixed right-0 left-0  h-full overflow-scroll">
      <aside className="flex flex-col gap-5 ">
        <h3 className="text-base text-gray-600">Recent files</h3>
        <div className="grid grid-cols-2 gap-20">
          {[1, 2].map((item, i) => (
            <File key={i} item={item} />
          ))}
        </div>
      </aside>
      <aside className="flex flex-col gap-5 mb-64">
        <h3 className="text-base text-gray-600">Files from last week</h3>
        <div className="grid grid-cols-2 gap-20">
          {[1, 2].map((item, i) => (
            <File key={i} item={item} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Files;