'use client'

import { useState } from 'react'

interface Agent {
  id: string
  name: string
  avatar: string
  currentActivity: string
  status: 'working' | 'idle'
  progressPercent: number
  desk: number
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Tony',
    avatar: '🤖',
    currentActivity: 'Optimizing Gate 1B (Calendar Spreads)',
    status: 'working',
    progressPercent: 65,
    desk: 1,
  },
  {
    id: '2',
    name: 'Backtest Runner',
    avatar: '📊',
    currentActivity: 'Running parameter grid search',
    status: 'working',
    progressPercent: 42,
    desk: 2,
  },
  {
    id: '3',
    name: 'Financial Auditor',
    avatar: '💳',
    currentActivity: 'Scanning invoices & updating spreadsheet',
    status: 'working',
    progressPercent: 88,
    desk: 3,
  },
  {
    id: '4',
    name: 'Deployment Manager',
    avatar: '🚀',
    currentActivity: 'Monitoring Phase 1 timeline adherence',
    status: 'working',
    progressPercent: 55,
    desk: 4,
  },
  {
    id: '5',
    name: 'Paper Trader',
    avatar: '📈',
    currentActivity: 'Idle - waiting for paper trading phase',
    status: 'idle',
    progressPercent: 0,
    desk: 5,
  },
]

export default function OfficeView() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null)

  const selectedAgentData = selectedAgent
    ? agents.find((a) => a.id === selectedAgent)
    : null

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Digital Office
      </h2>

      {/* Office Grid */}
      <div className="mb-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Click on an agent to see detailed status
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() =>
                setSelectedAgent(
                  selectedAgent === agent.id ? null : agent.id
                )
              }
              className={`p-4 rounded-lg border-2 transition transform hover:scale-105 ${
                selectedAgent === agent.id
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-950'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {/* Desk with Agent */}
              <div className="flex flex-col items-center gap-2">
                {/* Agent Status */}
                <div
                  className={`text-3xl ${
                    agent.status === 'working' ? 'animate-bounce' : ''
                  }`}
                >
                  {agent.avatar}
                </div>

                {/* Agent Name */}
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {agent.name}
                </p>

                {/* Status Badge */}
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    agent.status === 'working'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                  }`}
                >
                  {agent.status === 'working' ? '🔴 Working' : '⚪ Idle'}
                </span>

                {/* Progress Bar */}
                {agent.status === 'working' && (
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-2">
                    <div
                      className="bg-blue-600 h-1 rounded-full transition-all"
                      style={{ width: `${agent.progressPercent}%` }}
                    />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Agent Details */}
      {selectedAgentData && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md border-l-4 border-blue-600">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="text-6xl">{selectedAgentData.avatar}</div>

            {/* Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedAgentData.name}
              </h3>

              {/* Status */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Status
                </p>
                <div
                  className={`inline-block px-4 py-2 rounded-lg font-semibold ${
                    selectedAgentData.status === 'working'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                  }`}
                >
                  {selectedAgentData.status === 'working'
                    ? '🔴 Currently Working'
                    : '⚪ Idle'}
                </div>
              </div>

              {/* Current Activity */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Activity
                </p>
                <p className="text-lg text-gray-900 dark:text-white">
                  {selectedAgentData.currentActivity}
                </p>
              </div>

              {/* Progress */}
              {selectedAgentData.status === 'working' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Progress
                    </p>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {selectedAgentData.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all"
                      style={{
                        width: `${selectedAgentData.progressPercent}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Activity Feed */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Activity Feed (Real-time)
        </h3>
        <div className="space-y-3">
          {agents
            .filter((a) => a.status === 'working')
            .map((agent) => (
              <div
                key={agent.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center gap-4"
              >
                <span className="text-2xl">{agent.avatar}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {agent.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {agent.currentActivity}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {agent.progressPercent}%
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
