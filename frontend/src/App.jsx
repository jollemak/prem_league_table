import { useEffect, useState } from "react";
import axios from "axios";
import { TabNav, TeamsGrid, LeagueTable, Loading, Header } from "./components";

export default function App() {
  const [teams, setTeams] = useState([]);
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("teams");

  useEffect(() => {
    axios
      .get("http://localhost:8080/teams")
      .then((res) => {
        setTeams(res.data.teams);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/table")
      .then((res) => {
        setTable(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-green-900 via-green-800 to-emerald-900 text-white">
      <Header/>
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error/>
        ) : (
          <>
            {activeTab === "teams" && <TeamsGrid teams={teams} />}
            {activeTab === "table" && <LeagueTable table={table} />}
          </>
        )}
      </div>
    </div>
  );
}
