import { useState } from "react"
import { Link } from "react-router"
import { format } from "date-fns"
import { MoreHorizontal, Edit, Trash, CheckCircle, Clock, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function TaskList({ tasks }) {
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null)

  const toggleTaskExpansion = (taskId: string) => {
    if (expandedTaskId === taskId) {
      setExpandedTaskId(null)
    } else {
      setExpandedTaskId(taskId)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-amber-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      default:
        return "To Do"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Medium
          </Badge>
        )
      default:
        return <Badge variant="outline">Low</Badge>
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  if (tasks.length === 0) {
    return (
      <div className="p-8 text-center">
        <h3 className="text-lg font-medium mb-2">No tasks found</h3>
        <p className="text-muted-foreground mb-6">Try adjusting your filters or create a new task.</p>
        <Button asChild>
          <Link to="/tasks/create-task">Create Task</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="divide-y">
      {tasks.map((task) => (
        <div key={task.id} className="p-4 hover:bg-muted/30 transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="pt-1">{getStatusIcon(task.status)}</div>
              <div className="flex-1">
                <div
                  className="font-medium cursor-pointer hover:text-primary"
                  onClick={() => toggleTaskExpansion(task.id)}
                >
                  {task.title}
                </div>

                {expandedTaskId === task.id && <p className="text-muted-foreground mt-2 text-sm">{task.description}</p>}

                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center">Status: {getStatusText(task.status)}</span>
                  <span>•</span>
                  <span>Due: {format(new Date(task.dueDate), "MMM d, yyyy")}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Avatar className="h-4 w-4">
                      <AvatarFallback className="text-[10px]">{getInitials(task.assignedTo)}</AvatarFallback>
                    </Avatar>
                    {task.assignedTo}
                  </span>
                </div>

                {task.tags && task.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {task.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {getPriorityBadge(task.priority)}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to={`/tasks/${task.id}`}>View Details</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={`/tasks/${task.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
