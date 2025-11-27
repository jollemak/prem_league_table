//Error
export function Error() {
    return (
        <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 text-center">
            <p className="text-xl">⚠️ {error.message}</p>
          </div>
    )
}
//Loading
export function Loading() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            <p className="mt-4 text-xl">Loading...</p>
          </div>
    )
}

// Header
export function Header() {
    return (
         <header className="bg-green-950/50 backdrop-blur-sm border-b border-green-700/30 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full p-2 shadow-lg">
              <img
                className="w-full h-full object-contain"
                src="/src/assets/prem-logo.png"
                alt="Premier League Logo"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center bg-linear-to-r from-white to-green-200 bg-clip-text text-transparent">
              Premier League
            </h1>
          </div>
        </div>
      </header>
    )
}
// Tab Navigation Component
export function TabNav({ activeTab, setActiveTab }) {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("teams")}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "teams"
              ? "bg-white text-green-900 shadow-lg scale-105"
              : "bg-green-800/50 hover:bg-green-700/50 text-white"
          }`}
        >
          Teams
        </button>
        <button
          onClick={() => setActiveTab("table")}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "table"
              ? "bg-white text-green-900 shadow-lg scale-105"
              : "bg-green-800/50 hover:bg-green-700/50 text-white"
          }`}
        >
          League Table
        </button>
      </div>
    </div>
  );
}

// Teams Grid Component
export function TeamsGrid({ teams }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
      {teams.map((team) => (
        <div
          key={team.idTeam}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-700/30 hover:border-green-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center"
        >
          <div className="w-24 h-24 mb-4 bg-white rounded-full p-3 shadow-lg">
            <img
              className="w-full h-full object-contain"
              src={team.strBadge}
              alt={team.strTeam}
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">
            {team.strTeam}
          </h3>
          <p className="text-green-200 text-sm font-medium">
            {team.strTeamShort}
          </p>
        </div>
      ))}
    </div>
  );
}

// League Table Component
export function LeagueTable({ table }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-green-700/30 overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-green-950/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                Pos
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                Team
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                Points
                </th>
              <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wider">
                Form
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-700/30">
            {table.map((team, index) => (
              <tr
                key={index}
                className="hover:bg-white/5 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-lg font-bold text-green-300">
                    {team.intRank}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-lg font-semibold flex flex-row items-center gap-2">
                    <img className="w-10" src={team.strBadge} alt="" />{team.strTeam}
                  </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-sm font-mono bg-green-800/50 px-3 py-1 rounded">
                    {team.intPoints}
                  </span>
                </td>
                    
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className="text-sm font-mono bg-green-800/50 px-3 py-1 rounded">
                    {team.strForm || "N/A"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}