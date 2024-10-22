import Link from "next/link";
import { BsDoorOpen } from "react-icons/bs";

export default function MockTable() {
  const mockData = [
    { id: 1, name: "Alice", age: 28, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 34, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 30, email: "charlie@example.com" },
    { id: 4, name: "David", age: 25, email: "david@example.com" },
    { id: 5, name: "Eva", age: 22, email: "eva@example.com" },
  ];

  return (
    <div className="p-6 h-screen w-screen bg-white text-black flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-gray-100 rounded-xl shadow-lg p-4">
        <h2 className="text-lg font-bold mb-4">Mock Data Table</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((item) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.age}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2 text-center">
                  <Link
                    href="/details"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <BsDoorOpen className="inline-block w-5 h-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
