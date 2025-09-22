import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart } from "@/components/Dashboard/BarChart";
import { ProgressChart } from "@/components/Dashboard/ProgressChart";
import { 
  Download, 
  Calendar, 
  TrendingUp, 
  Users, 
  ClipboardList, 
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle
} from "lucide-react";

export default function Reports() {
  const productivityData = [
    { label: "Week 1", value: 85 },
    { label: "Week 2", value: 92 },
    { label: "Week 3", value: 88 },
    { label: "Week 4", value: 95 },
  ];

  const departmentPerformance = [
    { label: "Construction", value: 94 },
    { label: "Electrical", value: 88 },
    { label: "Plumbing", value: 91 },
    { label: "Safety", value: 96 },
    { label: "Management", value: 85 },
  ];

  const attendanceData = [
    { label: "Mon", value: 28 },
    { label: "Tue", value: 30 },
    { label: "Wed", value: 29 },
    { label: "Thu", value: 31 },
    { label: "Fri", value: 28 },
    { label: "Sat", value: 15 },
    { label: "Sun", value: 8 },
  ];

  const projectCompletionData = [
    { label: "On Time", value: 75 },
    { label: "Delayed", value: 20 },
    { label: "Ahead of Schedule", value: 5 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive insights into workforce and project performance
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overall Productivity</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-2xl font-bold">94%</h3>
                    <Badge className="bg-success/10 text-success">+3%</Badge>
                  </div>
                </div>
                <div className="p-3 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Average Attendance</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-2xl font-bold">92%</h3>
                    <Badge className="bg-success/10 text-success">+5%</Badge>
                  </div>
                </div>
                <div className="p-3 bg-success/10 rounded-lg">
                  <Users className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Projects on Track</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-2xl font-bold">75%</h3>
                    <Badge className="bg-warning/10 text-warning">-2%</Badge>
                  </div>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cost Efficiency</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-2xl font-bold">88%</h3>
                    <Badge className="bg-accent/10 text-accent">+1%</Badge>
                  </div>
                </div>
                <div className="p-3 bg-warning/10 rounded-lg">
                  <DollarSign className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BarChart
            title="Weekly Productivity Trends"
            data={productivityData}
            height={250}
          />
          
          <BarChart
            title="Daily Attendance This Week"
            data={attendanceData}
            height={250}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProgressChart
            title="Department Performance"
            data={departmentPerformance}
            maxValue={100}
          />
          
          <ProgressChart
            title="Project Completion Status"
            data={projectCompletionData}
            maxValue={100}
          />
        </div>

        {/* Detailed Reports Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Issues */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-warning" />
                Recent Issues & Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Delayed Milestone</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Building A foundation work is 3 days behind schedule
                    </p>
                    <Badge variant="outline" className="mt-2 text-warning border-warning">
                      High Priority
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Safety Concern</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Equipment maintenance overdue for crane #3
                    </p>
                    <Badge variant="outline" className="mt-2 text-destructive border-destructive">
                      Urgent
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Attendance Alert</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      5 workers have missing timesheet entries this week
                    </p>
                    <Badge variant="outline" className="mt-2 text-accent border-accent">
                      Action Required
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Highlights */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Performance Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Productivity Increase</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Team productivity is up 15% compared to last month
                    </p>
                    <Badge variant="outline" className="mt-2 text-success border-success">
                      Excellent
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Early Completion</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Electrical phase completed 2 days ahead of schedule
                    </p>
                    <Badge variant="outline" className="mt-2 text-accent border-accent">
                      Great Work
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm">Zero Incidents</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      30 consecutive days without safety incidents
                    </p>
                    <Badge variant="outline" className="mt-2 text-primary border-primary">
                      Safety First
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle>Export Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Download className="w-6 h-6" />
                <span className="font-medium">Attendance Report</span>
                <span className="text-xs text-muted-foreground">Weekly attendance summary</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Download className="w-6 h-6" />
                <span className="font-medium">Project Status</span>
                <span className="text-xs text-muted-foreground">Complete project overview</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
                <Download className="w-6 h-6" />
                <span className="font-medium">Performance Metrics</span>
                <span className="text-xs text-muted-foreground">Productivity and KPI analysis</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}