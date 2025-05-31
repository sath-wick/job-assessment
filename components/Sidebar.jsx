export default function Sidebar() {
    return(
        <aside className="w-64 bg-[#14121c] bg-black/10 p-4 text-white border border-pink-500 rounded-2xl">
          <div className="mb-6">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 mx-auto mb-4" />
          </div>

          <nav className="space-y-4">
            <div>
              <button className="text-pink-400 text-left !bg-blue-800/10 font-semibold outline-2 w-[90%] glow glow-text outline-pink-400 mb-2">Events</button>
              <ul className="pl-4 space-y-2">
                <li className="text-pink-100">New Requests</li>
                <li>Estimate</li>
                <li>Events</li>
                <li>Partial Requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-semibold mt-6 mb-2">Positions</h2>
            </div>

            <div>
              <h2 className="text-white font-semibold mt-6 mb-2">Contractors</h2>
            </div>

            <div>
              <h2 className="text-white font-semibold mt-6 mb-2">Users</h2>
              <ul className="pl-4 space-y-2">
                <li>Admins</li>
                <li>Clients</li>
                <li>Coordinators</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white font-semibold mt-6 mb-2">Profile</h2>
            </div>
          </nav>

          <div className="absolute bottom-6 w-56 text-center">
            <button className="bg-black text-white px-4 py-2 rounded w-full border border-pink-500">Logout</button>
          </div>
        </aside>
    )
}