import eye from '../../src/assets/eye.png';

export default function MainPage({ onEyeClick }) {
  return (
    <div className="flex w-[80vw] h-[85vh] flex-col overflow-auto outline outline-pink-400 rounded-lg py-2">
      <h2 className="sticky left-0 font-semibold !text-3xl p-2">Event Requests</h2>
      <table className="w-[1800px]">
        <thead>
          <tr className="bg-pink-500">
            <th className="sticky left-0 backdrop-blur-lg bg-pink/70 z-10 border-b px-4 py-2">Event Name</th>
            <th className="border-b px-4 py-2">Event Start</th>
            <th className="border-b px-4 py-2">Event End</th>
            <th className="border-b px-4 py-2">Client Name</th>
            <th className="border-b px-4 py-2">Contact Info</th>
            <th className="border-b px-4 py-2">Venue</th>
            <th className="border-b px-4 py-2">City</th>
            <th className="border-b px-4 py-2">State</th>
            <th className="border-b px-4 py-2">Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 14 }, (_, i) => (
            <tr key={i}>
              <td className="sticky left-0 text-left z-10 border-b px-4 py-2 backdrop-blur-3xl bg-black/20">
                <button className="!bg-transparent" onClick={onEyeClick}>
                  <img src={eye} className="inline w-5 me-2" alt="eye" />
                </button>
                Filled Name
              </td>
              <td className="border-b px-4 py-2">Jan 12 2024</td>
              <td className="border-b px-4 py-2">Muhammad Asad</td>
              <td className="border-b px-4 py-2">+1234 567 890</td>
              <td className="border-b px-4 py-2">Lorem ipsum dolor sit amet</td>
              <td className="border-b px-4 py-2 text-center">-</td>
              <td className="border-b px-4 py-2 text-center">-</td>
              <td className="border-b px-4 py-2 text-center">-</td>
              <td className="border-b px-4 py-2 text-center">-</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sticky bottom-0 gap-4 h-full items-center justify-center z-11 bg-black flex w-full">
        <span>{"<-"}</span>
        <button className="!bg-transparent">1</button>
        <button className="!bg-transparent">2</button>
        <button className="!bg-transparent">3</button>
        <button className="!bg-transparent">4</button>
        <span>{"->"}</span>
      </div>
    </div>
  );
}
