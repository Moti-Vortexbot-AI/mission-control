'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CalendarEvent {
  date: number
  title: string
  type: 'backtest' | 'paper' | 'live' | 'review'
}

const events: CalendarEvent[] = [
  { date: 22, title: 'Gate 1B & 1C Due', type: 'backtest' },
  { date: 23, title: 'Gate 1D Due', type: 'backtest' },
  { date: 28, title: 'Phase 1 Closeout', type: 'review' },
  { date: 1, title: 'Phase 2 Forward Test Begins', type: 'paper' },
]

const eventColors = {
  backtest: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  paper: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  live: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  review: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
}

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 21))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => null)

  const getEventsForDay = (day: number) => {
    return events.filter((event) => event.date === day)
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentDate.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Phase 1 Backtest Timeline
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-0 border-b border-gray-200 dark:border-gray-700">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="p-4 text-center font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-0 min-h-96">
            {[...emptyDays, ...days].map((day, idx) => {
              const dayEvents = day ? getEventsForDay(day) : []
              const isToday = day === 21
              return (
                <div
                  key={idx}
                  className={`border-r border-b border-gray-200 dark:border-gray-700 p-3 min-h-32 ${
                    day
                      ? 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                      : 'bg-gray-50 dark:bg-gray-900'
                  } ${isToday ? 'bg-blue-50 dark:bg-blue-950' : ''}`}
                >
                  {day && (
                    <>
                      <div
                        className={`text-sm font-semibold mb-2 ${
                          isToday
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded px-2 py-1 inline-block'
                            : 'text-gray-900 dark:text-white'
                        }`}
                      >
                        {day}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.map((event, i) => (
                          <div
                            key={i}
                            className={`text-xs p-1 rounded truncate ${eventColors[event.type]}`}
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Upcoming (Next 7 Days)
        </h3>
        <div className="space-y-3">
          {events
            .filter((event) => event.date >= 21 && event.date <= 28)
            .map((event, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg ${eventColors[event.type]} border border-opacity-20`}
              >
                <div className="font-semibold">
                  Feb {event.date}, 2026
                </div>
                <div className="text-sm mt-1">{event.title}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
