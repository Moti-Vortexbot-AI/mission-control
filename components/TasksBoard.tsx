'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

interface Task {
  id: string
  title: string
  assignedTo: 'Tony' | 'Shimonez'
  status: 'backlog' | 'progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Complete Gate 1B - Calendar Spreads Backtest',
    assignedTo: 'Tony',
    status: 'progress',
    priority: 'high',
    dueDate: '2026-02-22',
  },
  {
    id: '2',
    title: 'Complete Gate 1C - Earnings Spreads Backtest',
    assignedTo: 'Tony',
    status: 'progress',
    priority: 'high',
    dueDate: '2026-02-22',
  },
  {
    id: '3',
    title: 'Complete Gate 1D - Covered Call Wheel Backtest',
    assignedTo: 'Tony',
    status: 'backlog',
    priority: 'high',
    dueDate: '2026-02-23',
  },
  {
    id: '4',
    title: 'Setup Paper Trading Infrastructure',
    assignedTo: 'Tony',
    status: 'backlog',
    priority: 'high',
    dueDate: '2026-02-28',
  },
  {
    id: '5',
    title: 'Review Phase 1 Results & Approve Phase 2',
    assignedTo: 'Shimonez',
    status: 'backlog',
    priority: 'high',
    dueDate: '2026-02-28',
  },
]

export default function TasksBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTask, setNewTask] = useState('')

  const columns = {
    backlog: { title: 'Backlog', color: 'bg-gray-100 dark:bg-gray-800' },
    progress: { title: 'In Progress', color: 'bg-blue-100 dark:bg-blue-900' },
    done: { title: 'Done', color: 'bg-green-100 dark:bg-green-900' },
  }

  const handleAddTask = (status: Task['status']) => {
    if (!newTask.trim()) return
    const task: Task = {
      id: Date.now().toString(),
      title: newTask,
      assignedTo: 'Tony',
      status,
      priority: 'medium',
    }
    setTasks([...tasks, task])
    setNewTask('')
  }

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleMoveTask = (id: string, newStatus: Task['status']) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Tasks Board
        </h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task title..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleAddTask('backlog')
            }}
          />
          <button
            onClick={() => handleAddTask('backlog')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.entries(columns) as [Task['status'], typeof columns[Task['status']]][]).map(
          ([status, { title, color }]) => (
            <div
              key={status}
              className={`rounded-lg p-4 min-h-[600px] ${color}`}
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h3>
              <div className="space-y-3">
                {tasks
                  .filter((task) => task.status === status)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm flex-1">
                          {task.title}
                        </h4>
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-300">
                          {task.assignedTo}
                        </span>
                        <span
                          className={`inline-block px-2 py-1 rounded ${
                            task.priority === 'high'
                              ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                              : task.priority === 'medium'
                              ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                              : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                          }`}
                        >
                          {task.priority}
                        </span>
                      </div>
                      {task.dueDate && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                        </p>
                      )}
                      {status === 'backlog' && (
                        <button
                          onClick={() => handleMoveTask(task.id, 'progress')}
                          className="mt-3 w-full px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                        >
                          Start
                        </button>
                      )}
                      {status === 'progress' && (
                        <button
                          onClick={() => handleMoveTask(task.id, 'done')}
                          className="mt-3 w-full px-2 py-1 text-xs bg-green-600 hover:bg-green-700 text-white rounded transition"
                        >
                          Complete
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
