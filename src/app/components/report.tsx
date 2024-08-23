export default function Reports() {
  const logData = [
    {
      timestamp: "2024-08-23 12:00:00",
      moisture: 32,
      pumpStatus: "Off",
      action: "No Action",
      battery: 85,
    },
    {
      timestamp: "2024-08-23 12:00:20",
      moisture: 30,
      pumpStatus: "Off",
      action: "No Action",
      battery: 85,
    },
    {
      timestamp: "2024-08-23 12:00:40",
      moisture: 28,
      pumpStatus: "On",
      action: "Pump Activated",
      battery: 84,
    },
    {
      timestamp: "2024-08-23 12:01:00",
      moisture: 29,
      pumpStatus: "On",
      action: "Pump Activated",
      battery: 84,
    },
    {
      timestamp: "2024-08-23 12:01:20",
      moisture: 31,
      pumpStatus: "Off",
      action: "No Action",
      battery: 84,
    },
    {
      timestamp: "2024-08-23 12:01:40",
      moisture: 33,
      pumpStatus: "Off",
      action: "No Action",
      battery: 83,
    },
    {
      timestamp: "2024-08-23 12:02:00",
      moisture: 30,
      pumpStatus: "On",
      action: "Pump Activated",
      battery: 83,
    },
    {
      timestamp: "2024-08-23 12:02:20",
      moisture: 29,
      pumpStatus: "On",
      action: "Pump Activated",
      battery: 82,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Soil Moisture Log</h1>
      <div className="overflow-scroll">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Timestamp
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Soil Moisture (%)
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Pump Status
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Action Taken
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Battery Level (%)
              </th>
            </tr>
          </thead>
          <tbody>
            {logData.map((log, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-2 px-4 text-gray-700">{log.timestamp}</td>
                <td className="py-2 px-4 text-gray-700">{log.moisture}</td>
                <td className="py-2 px-4 text-gray-700">{log.pumpStatus}</td>
                <td className="py-2 px-4 text-gray-700">{log.action}</td>
                <td className="py-2 px-4 text-gray-700">{log.battery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// return (
//   <main className="p-6">
//     <h1 className="font-bold text-2xl">Logs</h1>
//   </main>
// );
