"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Cloud,
  Shield,
  BarChart3,
  Settings,
  Bot,
  Wrench,
  Search,
  Bell,
  Mail,
  Plus,
  Download,
  Calendar,
  Users,
  HelpCircle,
  LogOut,
  TrendingUp,
  Play,
  Pause,
  Square,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react"




export default function Dashboard() {
  const [isPlaying, setIsPlaying] = useState(true)

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true, badge: null },
    { icon: Cloud, label: "Services", active: false, badge: "6" },
    { icon: Calendar, label: "Calendar", active: false, badge: null },
    { icon: TrendingUp, label: "Analytics", active: false, badge: null },
    { icon: Users, label: "Team", active: false, badge: null },
  ]

  const generalItems = [
    { icon: Settings, label: "Settings", active: false },
    { icon: HelpCircle, label: "Help", active: false },
    { icon: LogOut, label: "Logout", active: false },
  ]

  const metrics = [
    {
      title: "Total Services",
      value: "6",
      subtitle: "Active Solutions",
      trend: "up",
      color: "bg-blue-600",
      textColor: "text-white",
    },
    {
      title: "Active Projects",
      value: "24",
      subtitle: "Increased from last month",
      trend: "up",
      color: "bg-white",
      textColor: "text-gray-900",
    },
    {
      title: "Clients Served",
      value: "150",
      subtitle: "Increased from last month",
      trend: "up",
      color: "bg-white",
      textColor: "text-gray-900",
    },
    {
      title: "Support Tickets",
      value: "8",
      subtitle: "Pending Resolution",
      trend: "neutral",
      color: "bg-white",
      textColor: "text-gray-900",
    },
  ]

  const chartData = [
    { day: "M", value: 65 },
    { day: "T", value: 85 },
    { day: "W", value: 45 },
    { day: "T", value: 95 },
    { day: "F", value: 75 },
    { day: "S", value: 55 },
    { day: "S", value: 35 },
  ]

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Cloud Architect",
      project: "AWS Migration Project",
      status: "Completed",
      avatar: "SC",
    },
    {
      name: "Mike Rodriguez",
      role: "Security Specialist",
      project: "Cybersecurity Audit",
      status: "In Progress",
      avatar: "MR",
    },
    {
      name: "Emily Johnson",
      role: "Data Analyst",
      project: "BI Dashboard Implementation",
      status: "Pending",
      avatar: "EJ",
    },
    
  ]

  const projects = [
    {
      title: "Cloud Infrastructure Setup",
      dueDate: "Dec 15, 2024",
      icon: Cloud,
      color: "text-blue-600",
    },
    {
      title: "Security Assessment",
      dueDate: "Dec 18, 2024",
      icon: Shield,
      color: "text-blue-600",
    },
    {
      title: "Data Analytics Platform",
      dueDate: "Dec 20, 2024",
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      title: "AI Model Training",
      dueDate: "Dec 22, 2024",
      icon: Bot,
      color: "text-blue-600",
    },
    
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            
            <span className="text-xl font-semibold text-gray-900">pangea</span>
          </div>
        </div>

        {/* Menu */}
        <div className="flex-1 p-4">
          <div className="mb-6">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">MENU</p>
            <nav className="space-y-1">
              {sidebarItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && <Badge className="bg-blue-600 text-white text-xs">{item.badge}</Badge>}
                </a>
              ))}
            </nav>
          </div>

          <div className="mb-6">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">GENERAL</p>
            <nav className="space-y-1">
              {generalItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile App Download */}
        <div className="p-4">
          <Card className="bg-gray-900 text-white border-0">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Download our Mobile App</h3>
              <p className="text-sm text-gray-300 mb-4">Get easy access anywhere, anytime</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search services..." className="pl-10 bg-gray-50 border-0 focus:bg-white" />
                <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  ⌘F
                </kbd>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5 text-gray-600" />
              </Button>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>TM</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Tech Manager</p>
                  <p className="text-gray-500">manager@techpro.com</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Title and Actions */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Monitor, manage, and optimize your IT infrastructure with ease.</p>
            </div>
            <div className="flex space-x-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
              <Button variant="outline">Import Data</Button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className={`${metric.color} border-0 shadow-sm`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`text-sm font-medium ${metric.textColor === "text-white" ? "text-white/80" : "text-gray-600"}`}
                    >
                      {metric.title}
                    </h3>
                    <ArrowUpRight
                      className={`w-4 h-4 ${metric.textColor === "text-white" ? "text-white" : "text-gray-400"}`}
                    />
                  </div>
                  <div className={`text-3xl font-bold ${metric.textColor} mb-2`}>{metric.value}</div>
                  <p className={`text-sm ${metric.textColor === "text-white" ? "text-white/60" : "text-gray-500"}`}>
                    {metric.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts and Widgets Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">Team Collaboration</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Member
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Avatar>
                        <AvatarFallback className="bg-blue-100 text-blue-600">{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-600">Working on {member.project}</p>
                      </div>
                      <Badge
                        variant={
                          member.status === "Completed"
                            ? "default"
                            : member.status === "In Progress"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          member.status === "Completed"
                            ? "bg-blue-100 text-blue-700"
                            : member.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                        }
                      >
                        {member.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">Projects</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  New
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {projects.slice(0, 5).map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <project.icon className={`w-4 h-4 ${project.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{project.title}</p>
                      <p className="text-xs text-gray-500">Due date: {project.dueDate}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          
        </main>
      </div>
    </div>
  )
}
