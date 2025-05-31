const EventRequestsUI = () => {
  return (
    <main className="flex-1 py-6 text-white border-2 rounded-xl border-[#d175b6] relative z-10 bg-black/10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl px-4 font-bold">Event Requests</h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search here"
                className="px-4 py-2 rounded bg-white/10 border border-white placeholder-white"
              />
              <button className="text-white text-2xl bg-pink-600 rounded px-4 py-1">+</button>
            </div>
          </div>

          <table className="w-[100px] text-left overflow-scroll">
            <thead>
              <tr className="bg-[#d175b6] ">
                <th className="py-2 px-4 font-semibold">Event Name</th>
                <th className="py-2 px-4 font-semibold">Event Start</th>
                <th className="py-2 px-4 font-semibold">Event End</th>
                <th className="py-2 px-4 font-semibold">Client Name</th>
                <th className="py-2 px-4 font-semibold">Contact Info</th>
                <th className="py-2 px-4 font-semibold">Venue</th>
                <th className="py-2 px-4 font-semibold">City</th>
                <th className="py-2 px-4 font-semibold">State</th>
                <th className="py-2 px-4 font-semibold">Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 12 }).map((_, index) => (
                <tr
                  key={index}
                  className="bg-white/5 border-b-2 border-pink-400 hover:bg-white/10 text-md group [&>td]:text-sm"
                >
                  <td className="px-4 flex items-center space-x-2 bg-black/10">
                    <button className="!bg-transparent !hover:bg-red-200 z-1"><span className="w-4 h-4 bg-white rounded-full inline-block"></span></button>
                    <span>Filled Name</span>
                  </td>
                  <td className="px-4">Jan 12, 2024</td>
                  <td className="px-4">Jan 14, 2024</td>
                  <td className="px-4">Muhammad Asad</td>
                  <td className="px-4">+1234 566 7890</td>
                  <td className="px-4">Lorem Ipsum Dolor Sit Amet</td>
                  <td className="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, blanditiis.</td>
                  <td className="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, blanditiis.</td>
                  <td className="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, blanditiis.</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2 text-white">
            <button className="bg-white/10 px-3 py-1 rounded hover:bg-pink-500">{"<"}</button>
            <button className="bg-white/10 px-3 py-1 rounded hover:bg-pink-500">1</button>
            <button className="bg-white/10 px-3 py-1 rounded hover:bg-pink-500">2</button>
            <button className="text-pink-500 font-bold bg-white/20 px-3 py-1 rounded border border-pink-500">3</button>
            <button className="bg-white/10 px-3 py-1 rounded hover:bg-pink-500">4</button>
            <button className="bg-white/10 px-3 py-1 rounded hover:bg-pink-500">{">"}</button>
          </div>
        </main>
  );
};

export default EventRequestsUI;
