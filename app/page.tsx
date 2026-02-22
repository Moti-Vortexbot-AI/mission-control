'use client'

import { useState } from 'react'
import { Calendar, CheckSquare, Users, Home as HomeIcon, FileText, Zap } from 'lucide-react'
import TasksBoard from '@/components/TasksBoard'
import CalendarView from '@/components/CalendarView'
import MemoryUI from '@/components/MemoryUI'
import TeamStructure from '@/components/TeamStructure'
import OfficeView from '@/components/OfficeView'
import SubAgentsView from '@/components/SubAgentsView'

const tabs = [
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'memory', label: 'Memory', icon: FileText },
  { id: 'agents', label: 'Sub-Agents', icon: Zap },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'office', label: 'Office', icon: HomeIcon },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('tasks')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Mission Control
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Tech Titans Trading Operations
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-16 z-40 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    isActive
                      ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'tasks' && <TasksBoard />}
        {activeTab === 'calendar' && <CalendarView />}
        {activeTab === 'memory' && <MemoryUI />}
        {activeTab === 'agents' && <SubAgentsView />}
        {activeTab === 'team' && <TeamStructure />}
        {activeTab === 'office' && <OfficeView />}
      </main>
    </div>
  )
}
