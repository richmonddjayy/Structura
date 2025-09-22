import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle, User } from "lucide-react";

interface Activity {
  id: string;
  type: "check-in" | "task-completed" | "milestone" | "user-joined";
  title: string;
  description: string;
  timestamp: string;
  user?: string;
  status?: "completed" | "pending" | "overdue";
}

const activities: Activity[] = [
  {
    id: "1",
    type: "check-in",
    title: "Morning Attendance",
    description: "15 workers checked in for morning shift",
    timestamp: "8:30 AM",
    status: "completed"
  },
  {
    id: "2", 
    type: "task-completed",
    title: "Foundation Work Completed",
    description: "Building A foundation phase marked complete",
    timestamp: "11:45 AM",
    user: "Mike Johnson",
    status: "completed"
  },
  {
    id: "3",
    type: "milestone",
    title: "Client Review Scheduled",
    description: "Project Omega milestone review with ABC Corp",
    timestamp: "2:00 PM",
    status: "pending"
  },
  {
    id: "4",
    type: "user-joined",
    title: "New Worker Added",
    description: "Sarah Connor joined as Site Supervisor",
    timestamp: "3:15 PM",
    user: "Sarah Connor"
  },
  {
    id: "5",
    type: "task-completed",
    title: "Safety Inspection",
    description: "Weekly safety audit completed successfully",
    timestamp: "4:30 PM",
    status: "completed"
  }
];

const getActivityIcon = (type: Activity["type"]) => {
  switch (type) {
    case "check-in":
      return <Clock className="w-4 h-4" />;
    case "task-completed":
      return <CheckCircle className="w-4 h-4" />;
    case "milestone":
      return <AlertCircle className="w-4 h-4" />;
    case "user-joined":
      return <User className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const getStatusBadge = (status?: Activity["status"]) => {
  if (!status) return null;
  
  const variants = {
    completed: "default",
    pending: "secondary", 
    overdue: "destructive"
  } as const;
  
  return (
    <Badge variant={variants[status]} className="text-xs">
      {status}
    </Badge>
  );
};

export function RecentActivity() {
  return (
    <Card className="card-elevated">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
              <div className="p-2 rounded-lg bg-accent/10 text-accent mt-1">
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-medium text-sm">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {activity.timestamp}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-1">
                  {activity.description}
                </p>
                
                <div className="flex items-center gap-2 mt-2">
                  {activity.user && (
                    <span className="text-xs font-medium text-primary">
                      {activity.user}
                    </span>
                  )}
                  {getStatusBadge(activity.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}