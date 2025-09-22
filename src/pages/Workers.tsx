import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Filter, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

interface Worker {
  id: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
  status: "active" | "on-leave" | "inactive";
  attendance: "present" | "absent" | "late";
  shiftTime: string;
  joinDate: string;
  avatar: string;
}

const workers: Worker[] = [
  {
    id: "1",
    name: "John Smith",
    role: "Site Supervisor",
    department: "Construction",
    phone: "+1 (555) 123-4567",
    email: "john.smith@company.com",
    status: "active",
    attendance: "present", 
    shiftTime: "8:00 AM - 5:00 PM",
    joinDate: "2024-01-15",
    avatar: "JS"
  },
  {
    id: "2",
    name: "Maria Garcia",
    role: "Project Manager",
    department: "Management",
    phone: "+1 (555) 234-5678",
    email: "maria.garcia@company.com",
    status: "active",
    attendance: "present",
    shiftTime: "9:00 AM - 6:00 PM", 
    joinDate: "2023-11-20",
    avatar: "MG"
  },
  {
    id: "3",
    name: "David Wilson",
    role: "Electrician",
    department: "Electrical",
    phone: "+1 (555) 345-6789",
    email: "david.wilson@company.com",
    status: "active",
    attendance: "late",
    shiftTime: "7:00 AM - 4:00 PM",
    joinDate: "2024-03-10",
    avatar: "DW"
  },
  {
    id: "4",
    name: "Sarah Johnson",
    role: "Safety Officer",
    department: "Safety",
    phone: "+1 (555) 456-7890",
    email: "sarah.johnson@company.com",
    status: "on-leave",
    attendance: "absent",
    shiftTime: "8:30 AM - 5:30 PM",
    joinDate: "2023-09-05",
    avatar: "SJ"
  },
  {
    id: "5",
    name: "Mike Chen",
    role: "Heavy Equipment Operator",
    department: "Operations",
    phone: "+1 (555) 567-8901",
    email: "mike.chen@company.com",
    status: "active",
    attendance: "present",
    shiftTime: "6:00 AM - 3:00 PM",
    joinDate: "2024-02-28",
    avatar: "MC"
  },
  {
    id: "6",
    name: "Emily Davis",
    role: "Quality Inspector",
    department: "Quality Control",
    phone: "+1 (555) 678-9012",
    email: "emily.davis@company.com",
    status: "active",
    attendance: "present",
    shiftTime: "9:00 AM - 6:00 PM",
    joinDate: "2023-12-12",
    avatar: "ED"
  }
];

const getStatusBadge = (status: Worker["status"]) => {
  const variants = {
    active: { variant: "default" as const, text: "Active" },
    "on-leave": { variant: "secondary" as const, text: "On Leave" },
    inactive: { variant: "destructive" as const, text: "Inactive" }
  };
  
  const config = variants[status];
  return <Badge variant={config.variant}>{config.text}</Badge>;
};

const getAttendanceBadge = (attendance: Worker["attendance"]) => {
  const config = {
    present: { icon: CheckCircle, color: "text-success", bg: "bg-success/10", text: "Present" },
    absent: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10", text: "Absent" },
    late: { icon: Clock, color: "text-warning", bg: "bg-warning/10", text: "Late" }
  };
  
  const { icon: Icon, color, bg, text } = config[attendance];
  
  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${bg}`}>
      <Icon className={`w-3 h-3 ${color}`} />
      <span className={`text-xs font-medium ${color}`}>{text}</span>
    </div>
  );
};

export default function Workers() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Workers</h1>
            <p className="text-muted-foreground mt-2">
              Manage your workforce and track attendance
            </p>
          </div>
          
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground accent-shadow">
            <Plus className="w-4 h-4 mr-2" />
            Add Worker
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="card-elevated">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search workers by name, role, or department..." 
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

        {/* Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workers.map((worker) => (
            <Card key={worker.id} className="card-elevated transition-smooth hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-accent">{worker.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{worker.name}</h3>
                      <p className="text-sm text-muted-foreground">{worker.role}</p>
                    </div>
                  </div>
                  {getStatusBadge(worker.status)}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Attendance Status */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Today's Attendance</span>
                  {getAttendanceBadge(worker.attendance)}
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{worker.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{worker.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{worker.department}</span>
                  </div>
                </div>

                {/* Shift Info */}
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Shift:</span>
                    <span className="font-medium">{worker.shiftTime}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="card-elevated">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">28</div>
              <div className="text-sm text-muted-foreground">Present Today</div>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Late Arrivals</div>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-destructive">2</div>
              <div className="text-sm text-muted-foreground">Absent</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}