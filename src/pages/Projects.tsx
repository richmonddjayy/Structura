import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Plus, 
  Filter, 
  Calendar, 
  Users, 
  Target,
  Clock,
  AlertCircle,
  CheckCircle,
  Building
} from "lucide-react";

interface Project {
  id: string;
  name: string;
  client: string;
  status: "active" | "completed" | "on-hold" | "planning";
  progress: number;
  startDate: string;
  endDate: string;
  budget: string;
  teamSize: number;
  priority: "high" | "medium" | "low";
  description: string;
  nextMilestone: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Downtown Office Complex",
    client: "ABC Corporation",
    status: "active",
    progress: 75,
    startDate: "2024-01-15",
    endDate: "2024-12-30",
    budget: "$2.5M",
    teamSize: 15,
    priority: "high",
    description: "Construction of a 12-story office complex in downtown area",
    nextMilestone: "Floor 10 Completion"
  },
  {
    id: "2", 
    name: "Residential Villa Project",
    client: "Green Homes Ltd.",
    status: "active",
    progress: 45,
    startDate: "2024-03-01",
    endDate: "2024-11-15",
    budget: "$850K",
    teamSize: 8,
    priority: "medium",
    description: "Luxury residential villa with modern amenities",
    nextMilestone: "Interior Design Phase"
  },
  {
    id: "3",
    name: "Shopping Mall Renovation",
    client: "Retail Ventures Inc.",
    status: "planning",
    progress: 10,
    startDate: "2024-10-01",
    endDate: "2025-06-30",
    budget: "$1.2M",
    teamSize: 12,
    priority: "medium",
    description: "Complete renovation of existing shopping mall facility",
    nextMilestone: "Design Approval"
  },
  {
    id: "4",
    name: "Industrial Warehouse",
    client: "LogiCorp Solutions",
    status: "completed",
    progress: 100,
    startDate: "2023-08-15",
    endDate: "2024-04-20",
    budget: "$950K",
    teamSize: 10,
    priority: "low",
    description: "50,000 sq ft industrial warehouse facility",
    nextMilestone: "Project Closed"
  },
  {
    id: "5",
    name: "School Building Extension",
    client: "City Education Board",
    status: "on-hold",
    progress: 30,
    startDate: "2024-02-01",
    endDate: "2024-09-30",
    budget: "$600K",
    teamSize: 6,
    priority: "high",
    description: "Addition of new classrooms and laboratory spaces",
    nextMilestone: "Permit Approval"
  },
  {
    id: "6",
    name: "Bridge Infrastructure",
    client: "Metro Transport Authority",
    status: "active",
    progress: 60,
    startDate: "2023-12-01",
    endDate: "2024-10-15",
    budget: "$3.2M",
    teamSize: 20,
    priority: "high",
    description: "Construction of pedestrian and vehicle bridge",
    nextMilestone: "Cable Installation"
  }
];

const getStatusBadge = (status: Project["status"]) => {
  const variants = {
    active: { variant: "default" as const, text: "Active", icon: Building },
    completed: { variant: "default" as const, text: "Completed", icon: CheckCircle },
    "on-hold": { variant: "secondary" as const, text: "On Hold", icon: AlertCircle },
    planning: { variant: "secondary" as const, text: "Planning", icon: Target }
  };
  
  const config = variants[status];
  const Icon = config.icon;
  
  return (
    <Badge variant={config.variant} className="flex items-center gap-1">
      <Icon className="w-3 h-3" />
      {config.text}
    </Badge>
  );
};

const getPriorityBadge = (priority: Project["priority"]) => {
  const config = {
    high: { color: "text-destructive", bg: "bg-destructive/10", text: "High Priority" },
    medium: { color: "text-warning", bg: "bg-warning/10", text: "Medium Priority" },
    low: { color: "text-success", bg: "bg-success/10", text: "Low Priority" }
  };
  
  const { color, bg, text } = config[priority];
  
  return (
    <div className={`px-2 py-1 rounded-full ${bg}`}>
      <span className={`text-xs font-medium ${color}`}>{text}</span>
    </div>
  );
};

export default function Projects() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-muted-foreground mt-2">
              Track and manage all your construction projects
            </p>
          </div>
          
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground accent-shadow">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="card-elevated">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search projects by name, client, or status..." 
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="card-elevated transition-smooth hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      {getStatusBadge(project.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Client: {project.client}</p>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  {getPriorityBadge(project.priority)}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Progress</span>
                    <span className="text-muted-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Start: {new Date(project.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>End: {new Date(project.endDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{project.teamSize} team members</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Target className="w-4 h-4" />
                      <span>Budget: {project.budget}</span>
                    </div>
                  </div>
                </div>

                {/* Next Milestone */}
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">Next Milestone:</span>
                    <span className="font-medium">{project.nextMilestone}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Update Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Card className="card-elevated">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-accent">4</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">1</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">1</div>
              <div className="text-sm text-muted-foreground">On Hold</div>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">$8.1M</div>
              <div className="text-sm text-muted-foreground">Total Value</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}