'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

interface Memory {
  id: string
  title: string
  content: string
  tags: string[]
  timestamp: string
  source: string
}

const sampleMemories: Memory[] = [
  {
    id: '1',
    title: 'Iron Condor Strategy - VALIDATED',
    content:
      'Iron Condor (SPY/QQQ) - 475 trades, 86.7% win rate, $1,122 P&L, walk-forward +$119. Ready for Phase 2 deployment.',
    tags: ['Strategy', 'Performance'],
    timestamp: '2026-02-20',
    source: 'MEMORY.md',
  },
  {
    id: '2',
    title: 'Stocks-Only Pivot Decision',
    content:
      'Crypto grid trading REJECTED after testing all parameters. BTC: -$114K loss, ETH: -$2.5K loss. Switching to 4-strategy stocks portfolio.',
    tags: ['Decision', 'Strategy'],
    timestamp: '2026-02-20',
    source: 'MEMORY.md',
  },
  {
    id: '3',
    title: 'Phase 1 Backtest Progress',
    content:
      'Gate 1A (Iron Condor): PASSED. Gates 1B (Calendar Spreads), 1C (Earnings), 1D (Covered Call) in progress. Deadline: Feb 23.',
    tags: ['Strategy', 'Performance'],
    timestamp: '2026-02-21',
    source: 'memory/2026-02-21.md',
  },
  {
    id: '4',
    title: 'Daily Financial Tracking Automated',
    content:
      'Daily invoice scanner deployed. 6 Anthropic invoices scanned ($150 each = $900 total). Cost tracking: ~$12.75/day burn.',
    tags: ['Alert', 'Performance'],
    timestamp: '2026-02-21',
    source: 'memory/2026-02-21.md',
  },
]

export default function MemoryUI() {
  const [memories, setMemories] = useState<Memory[]>(sampleMemories)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = Array.from(
    new Set(memories.flatMap((m) => m.tags))
  ).sort()

  const filteredMemories = memories.filter((memory) => {
    const matchesSearch =
      searchQuery === '' ||
      memory.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.content.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => memory.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Memory Browser
        </h2>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search memories..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Tags Filter */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Filter by tags:
          </p>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Memories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMemories.map((memory) => (
          <div
            key={memory.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {memory.title}
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
              {memory.content}
            </p>

            <div className="space-y-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {memory.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
                <span>{memory.timestamp}</span>
                <span className="italic">{memory.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMemories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No memories found</p>
        </div>
      )}
    </div>
  )
}
