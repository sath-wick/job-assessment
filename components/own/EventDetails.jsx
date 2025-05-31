import React, { useState } from "react";

const rooms = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Meeting Room ${i + 1}`,
  positions: 12,
  dateRange: "12 Jan, 2023 – 15 Jan, 2023",
}));

const positions = Array.from({ length: 8 }, () => ({
  position: "Camera 1 (Video)",
  time: "9 am – 7 pm",
  info: "LP default",
  quantity: 20,
}));

export default function EventDetails({ onBack }) {
  const [selectedRoom, setSelectedRoom] = useState(1);
  const [contractors, setContractors] = useState(Array(positions.length).fill(""));
  
  return (
    <>
    

    <div className="p-6 bg-black/10 outline rounded-lg outline-pink-400 text-white rounded-md shadow-lg w-full max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          {onBack && (
      <button onClick={onBack} className="mb-4 !text-pink-300 !bg-transparent hover:text-pink-500 inline">
        ←
      </button>
      )}
        Event Name <span className="text-gray-400">(Venue Details)</span>
        </h1>
      </div>

      {/* Nav Tabs */}
      <div className="flex rounded-lg outline outline-pink-400 mb-6 w-fit">
        {["Event Details", "Assign Coordinator/Coordinator", "Session Management", "Generate SOW"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 !border-r-2 !border-pink-500 !rounded-none ${
              i === 1 ? "!bg-pink-500" : "!bg-transparent"
            }
            
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Assign Coordinator */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block font-semibold mb-1">Assign Coordinator</label>
          <select className="w-full bg-gray-800 text-white p-2 rounded">
            <option>Search Coordinator</option>
          </select>
          <button className="mt-2 text-sm text-pink-400 hover:underline">Add New Coordinator</button>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold">Event Name <span className="text-gray-400">(Venue Here)</span></label>
          <div className="flex gap-2">
            <input type="text" className="w-full bg-gray-800 p-2 rounded" placeholder="Start: 12-12-2023" />
            <input type="text" className="w-full bg-gray-800 p-2 rounded" placeholder="Ends: 15-12-2023" />
          </div>
          <input
            type="text"
            className="w-full bg-gray-800 p-2 rounded"
            placeholder="Venue Address: Some Location 12, Name Here, City, State."
          />
        </div>
      </div>

      {/* Contractor Section */}
      <div className="grid grid-cols-4 gap-4">
        {/* Meeting Room Selector */}
        <div className="col-span-1 space-y-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`cursor-pointer p-3 rounded-xl border ${
                selectedRoom === room.id ? "bg-pink-500 text-white" : "bg-gray-900"
              }`}
              onClick={() => setSelectedRoom(room.id)}
            >
              <h3 className="font-semibold">{room.name} ✦ {room.positions} Positions</h3>
              <p className="text-sm text-gray-300">Start from {room.dateRange}</p>
            </div>
          ))}
        </div>

        {/* Positions Table */}
        <div className="col-span-3 bg-black/40 rounded-md p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-black/50 text-white">
              <tr>
                <th className="text-left p-2">Position</th>
                <th className="text-left p-2">Time</th>
                <th className="text-left p-2">Info</th>
                <th className="text-left p-2">Quantity</th>
                <th className="text-left p-2">Contractor</th>
              </tr>
            </thead>
            <tbody>
              {positions.map((pos, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="p-2">{pos.position}</td>
                  <td className="p-2">{pos.time}</td>
                  <td className="p-2 font-semibold">{pos.info}</td>
                  <td className="p-2">{pos.quantity}</td>
                  <td className="p-2">
                    <select
                      value={contractors[i]}
                      onChange={(e) =>
                        setContractors((prev) => {
                          const copy = [...prev];
                          copy[i] = e.target.value;
                          return copy;
                        })
                      }
                      className="bg-gray-800 p-2 rounded w-full"
                    >
                      <option>Select Contractor</option>
                      <option>John Doe</option>
                      <option>Jane Smith</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button className="text-white text-lg">{'<'}</button>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <button className="text-white text-lg">{'>'}</button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 rounded bg-pink-500 hover:bg-pink-600 text-white font-semibold">
          Save Edits
        </button>
      </div>
    </div>
    </>
  );
}
