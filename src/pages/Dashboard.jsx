export default function Dashboard() {
    return (
      <div className="min-h-screen bg-gray-100">
        
        {/* Top Navbar */}
        <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600">
              💡
            </div>
            <h1 className="font-semibold text-lg">TBO Copilot</h1>
          </div>
          <p>Agent Portal</p>
        </div>
  
        <div className="flex">
          
          {/* Sidebar */}
          <div className="w-64 bg-white min-h-screen p-6 space-y-4 shadow-md">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-100 text-blue-600 font-medium">
              Bookings
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
              Customers
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
              Reports
            </button>
          </div>
  
          {/* Main Content */}
          <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold mb-6">Bookings</h2>
  
            <div className="bg-white rounded-xl shadow border overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                  <tr>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Hotel</th>
                    <th className="px-6 py-4">Check-in</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Sarah Johnson</td>
                    <td className="px-6 py-4">Grand Plaza Hotel</td>
                    <td className="px-6 py-4">Feb 20, 2026</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        Confirmed
                      </span>
                    </td>
                  </tr>
  
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Michael Chen</td>
                    <td className="px-6 py-4">Skyline Suites Downtown</td>
                    <td className="px-6 py-4">Feb 18, 2026</td>
                    <td className="px-6 py-4">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                        Issue
                      </span>
                    </td>
                  </tr>
  
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Emily Rodriguez</td>
                    <td className="px-6 py-4">Oceanview Resort & Spa</td>
                    <td className="px-6 py-4">Feb 22, 2026</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        Confirmed
                      </span>
                    </td>
                  </tr>
  
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">David Park</td>
                    <td className="px-6 py-4">Metropolitan Business Hotel</td>
                    <td className="px-6 py-4">Feb 19, 2026</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                        Confirmed
                      </span>
                    </td>
                  </tr>
  
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Lisa Anderson</td>
                    <td className="px-6 py-4">Airport Gateway Inn</td>
                    <td className="px-6 py-4">Feb 21, 2026</td>
                    <td className="px-6 py-4">
                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>
  
                </tbody>
              </table>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  