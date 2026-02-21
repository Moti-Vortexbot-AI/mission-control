'use client'

interface TeamMember {
  id: string
  name: string
  role: string
  type: 'founder' | 'agent'
  responsibilities: string[]
  status: 'active' | 'idle'
  avatar: string
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Shimonez (MR-A)',
    role: 'Co-founder & Strategic Lead',
    type: 'founder',
    responsibilities: ['Strategy', 'Vision', 'Final Decisions', 'Partnerships'],
    status: 'active',
    avatar: '👔',
  },
  {
    id: '2',
    name: 'MR-B',
    role: 'Co-founder & Finance',
    type: 'founder',
    responsibilities: ['Financial Oversight', 'Capital Allocation', 'Risk Management'],
    status: 'active',
    avatar: '💰',
  },
  {
    id: '3',
    name: 'Tony (Moti)',
    role: 'Operations Lead',
    type: 'agent',
    responsibilities: [
      'Bot Optimization',
      'Backtesting',
      'Parameter Tuning',
      'Phase Execution',
    ],
    status: 'active',
    avatar: '🤖',
  },
  {
    id: '4',
    name: 'Backtest Runner',
    role: 'Subagent - Parameter Optimization',
    type: 'agent',
    responsibilities: ['Daily Backtest Runs', 'Grid Search', 'Metrics Logging'],
    status: 'idle',
    avatar: '📊',
  },
  {
    id: '5',
    name: 'Paper Trader',
    role: 'Subagent - Validation',
    type: 'agent',
    responsibilities: [
      'Paper Trading Execution',
      'Slippage Analysis',
      'Win Rate Tracking',
    ],
    status: 'idle',
    avatar: '📈',
  },
  {
    id: '6',
    name: 'Financial Auditor',
    role: 'Subagent - Cost Tracking',
    type: 'agent',
    responsibilities: [
      'Invoice Scanning',
      'P&L Tracking',
      'Cost Reports',
    ],
    status: 'active',
    avatar: '💳',
  },
  {
    id: '7',
    name: 'Deployment Manager',
    role: 'Subagent - Phase Gates',
    type: 'agent',
    responsibilities: [
      'Gate Validation',
      'Timeline Adherence',
      'Escalations',
    ],
    status: 'active',
    avatar: '🚀',
  },
]

export default function TeamStructure() {
  const founders = teamMembers.filter((m) => m.type === 'founder')
  const agents = teamMembers.filter((m) => m.type === 'agent')

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Team Structure
      </h2>

      {/* Founders */}
      <div className="mb-12">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
          Founders (50/50 Partnership)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition border-l-4 border-blue-600"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{member.avatar}</span>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-semibold ${
                      member.status === 'active'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                    }`}
                  >
                    {member.status === 'active' ? '🟢 Active' : '⚪ Idle'}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Responsibilities:
                </p>
                <ul className="space-y-1">
                  {member.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      • {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subagents */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
          Subagents (Specialized Roles)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{member.avatar}</span>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {member.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    member.status === 'active'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                  }`}
                >
                  {member.status === 'active' ? '🟢 Active' : '⚪ Idle'}
                </span>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-gray-600 dark:text-gray-400">
                {member.responsibilities.map((resp, idx) => (
                  <li key={idx}>• {resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Org Chart Description */}
      <div className="mt-12 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
          Organizational Structure
        </h4>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Shimonez & MR-B (50/50 founders) oversee strategy and capital. Tony (Operations Lead)
          executes trading systems and manages subagents. Each subagent has specialized
          responsibilities for specific phases and tasks, enabling parallel execution and
          scalability.
        </p>
      </div>
    </div>
  )
}
