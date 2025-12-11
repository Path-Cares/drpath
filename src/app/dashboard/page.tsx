"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  FaChartLine,
  FaChartPie,
  FaBox,
  FaClipboardList,
  FaUsers,
  FaCog,
  FaUserCircle,
  FaCommentDots,
  FaExchangeAlt,
  FaSearch,
  FaBell,
  FaDownload,
  FaGlobe,
} from "react-icons/fa";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md h-screen p-4">
          <div className="font-bold text-xl text-blue-600 mb-6">Starpath</div>
          <nav className="flex flex-col gap-4 text-sm">
            <a
              className="text-blue-600 font-semibold flex items-center gap-2"
              href="#"
            >
              <FaChartLine /> Dashboard
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaBox /> Products
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaClipboardList /> Orders
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaChartLine /> Statistics
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaCommentDots /> Reviews
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaUsers /> Customers
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaExchangeAlt /> Transactions
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaCog /> Settings
            </a>
            <a className="flex items-center gap-2" href="#">
              <FaUserCircle /> Profile
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Sales Analytics</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              </div>
              <FaGlobe className="w-5 h-5 text-gray-500" />
              <FaBell className="w-5 h-5 text-gray-500" />
              <FaDownload className="w-5 h-5 text-gray-500" />
              <img
                src="/user-avatar.png"
                alt="User"
                className="w-8 h-8 rounded-full border"
              />
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500">Income</div>
                <div className="text-2xl text-green-600 font-bold">56,548k</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500">Expense</div>
                <div className="text-2xl text-red-500 font-bold">2,545.02k</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500">New Order</div>
                <div className="text-2xl text-blue-600 font-bold">12,540k</div>
              </CardContent>
            </Card>
          </div>

          {/* Sales Statistic & Yearly Profits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-semibold">Sales Statistic</div>
                  <div className="text-xs text-gray-500">January 01, 2023</div>
                </div>
                <div className="h-40 flex items-center justify-center text-blue-400">
                  <FaChartLine className="w-10 h-10" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="font-semibold mb-4">Yearly Profits</div>
                <div className="h-40 flex items-center justify-center text-yellow-400">
                  <FaChartPie className="w-10 h-10" />
                </div>
                <div className="flex justify-around mt-4 text-sm">
                  <div className="text-blue-600">2023</div>
                  <div className="text-yellow-500">2022</div>
                  <div className="text-green-500">2021</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conversion Rate & Referral Rate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="font-semibold mb-4">Conversion Rate</div>
                <div className="flex items-center justify-between">
                  <div className="w-1/2">
                    <Progress value={68} className="h-2 bg-blue-200" />
                    <div className="text-lg mt-2 font-bold text-blue-600">
                      68%
                    </div>
                  </div>
                  <div className="text-right w-1/2 text-sm">
                    <div>Regular: 23,875</div>
                    <div className="text-green-500">+26.54%</div>
                    <div>New: 11,647</div>
                    <div className="text-green-500">+19.03%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="font-semibold mb-4">Average Referral Rate</div>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="flex justify-between">
                      <span>Program Budget</span>
                      <span>60.5%</span>
                    </div>
                    <Progress value={60.5} />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>100 Purchased</span>
                      <span>43%</span>
                    </div>
                    <Progress value={43} />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>By Campaign</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <span>Link Sharing</span>
                      <span>36%</span>
                    </div>
                    <Progress value={36} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
