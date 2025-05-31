const MenuItem = ({ label, active }) => (
  <div className="relative pl-6 text-white group">
    {/* Vertical line */}
    <div className="absolute left-2 top-0 bottom-0 w-px bg-white/20" />

    {/* Dot or node */}
    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 ${active ? 'border-pink-400 bg-pink-500' : 'border-white/30 bg-black'}`} />

    <button className={`ml-2 w-full !text-sm !bg-transparent ${active ? 'text-pink-400' : 'text-white/70'}`}>
      {label}
    </button>
  </div>
);

export default function MainSidebar() {
    return(
        <div className="flex flex-col w-[250px] bg-black/10 justify-between items-center
        rounded-lg outline outline-pink-400 p-2 h-[90vh] border-box
        ">
            <div className="flex flex-col px-2 w-full justify-between">
                <button className="flex w-full justify-between rounded-lg !text-sm outline-2 outline-pink-400 !bg-blue-950/10">Events
                <span>^</span>
            </button>
            <div className="flex flex-col items-start">
            <MenuItem label="New Requests" active />
            <MenuItem label="Estimate" />
            <MenuItem label="Events" />
            <MenuItem label="Partial Requests" />
            </div>
            <h2 className="w-full ps-4 font-semibold text-md py-2">Positions</h2>
            <h2 className="w-full ps-4 font-semibold text-md py-2">Contractors</h2>

            <button className="flex w-full justify-between rounded-lg !text-sm outline-2 outline-pink-400 !bg-blue-950/10">Users
                <span>^</span>
            </button>
            <div className="flex flex-col items-start">
            <MenuItem label="Admins" />
            <MenuItem label="Clients" />
            <MenuItem label="Coordinators" />
            </div>
            
            <h2 className="w-full ps-4 font-semibold text-md py-2">Profile</h2>
            </div>
            <button className="w-full !bg-slate-950 shadow-[0_0_100px_0px_pin/20]">Logout</button>
        </div>
    )
}

