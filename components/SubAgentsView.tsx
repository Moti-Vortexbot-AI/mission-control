'use client'

import { useState, useEffect } from 'react'
import { Zap, Activity, Brain, TrendingUp } from 'lucide-react'

interface SubAgent {
  id: string
  name: string
  status: 'active' | 'idle' | 'error'
  skills: string[]
  lastActive: string
  description: string
}

export default function SubAgentsView() {
  const [subAgents, setSubAgents] = useState<SubAgent[]>([
    {
      id: 'trading_advisor',
      name: 'TRADING ADVISOR',
      status: 'active',
      skills: [
        'Candlestick Pattern Detection',
        'Technical Analysis',
        'Backtest Evaluation',
        'Risk Management',
        'Options Analysis',
      ],
      lastActive: new Date().toISOString(),
      description: 'Ultra-smart trading advisor with pattern detection and edge validation',
    },
  ])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            Sub-Agents
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Autonomous agents running specialized tasks
          </p>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            {subAgents.filter((a) => a.status === 'active').length} Active
          </span>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 gap-6">
        {subAgents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow"
          >
            {/* Agent Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {agent.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Activity
                  className={`w-5 h-5 ${
                    agent.status === 'active'
                      ? 'text-green-500'
                      : agent.status === 'idle'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  }`}
                />
                <span
                  className={`text-sm font-medium capitalize px-2 py-1 rounded ${
                    agent.status === 'active'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : agent.status === 'idle'
                      ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                      : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                  }`}
                >
                  {agent.status}
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {agent.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
              <button className="flex-1 px-3 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                Talk to Agent
              </button>
              <button className="flex-1 px-3 py-2 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                View History
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Examples */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
          How to Use
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>
            • <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">TRADING_ADVISOR: Analyze Gate 1A - is it real edge?</code>
          </li>
          <li>
            • <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">TRADING_ADVISOR: What patterns before big winners?</code>
          </li>
          <li>
            • <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">TRADING_ADVISOR: Position sizing for $100K, 2% risk</code>
          </li>
        </ul>
      </div>
    </div>
  )
}
