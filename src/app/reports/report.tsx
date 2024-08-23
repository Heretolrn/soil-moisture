"use client";
import axios from "axios";
import { app, database } from "../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const document: any = [];
  const collectionRef = collection(database, "soil-moisture");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    document.push({ id: doc.id, ...doc.data() });
  });
  console.log("this is the documetns", document);
  return document;
};

export default function Reports() {
  const fetchData = async () => {
    const document: any[] = [];
    const collectionRef = collection(database, "soil-moisture");
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      document.push({ id: doc.id, ...doc.data() });
    });
    console.log("this is the documetns", document);
    return document;
  };

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchData(),
    queryKey: ["soil-moisture"], //Array according to Documentation
  });

  console.log(data);
  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>An Error occured</h2>;
  }

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
            {data?.map((log: any, index: number) => (
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
