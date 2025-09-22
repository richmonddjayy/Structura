import { Layout } from "@/components/Layout";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { ProgressChart } from "@/components/Dashboard/ProgressChart";
import { BarChart } from "@/components/Dashboard/BarChart";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { Users, ClipboardList, CheckCircle, TrendingUp, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const attendanceData = [
    { label: "Present", value: 28 },
    { label: "Late", value: 3 },
    { label: "Absent", value: 2 },
  ];

  const projectProgressData = [
    { label: "Building A", value: 85 },
    { label: "Building B", value: 60 },
    { label: "Infrastructure", value: 40 },
    { label: "Landscaping", value: 15 },
  ];

  const weeklyHoursData = [
    { label: "Mon", value: 240 },
    { label: "Tue", value: 280 },
    { label: "Wed", value: 260 },
    { label: "Thu", value: 290 },
    { label: "Fri", value: 250 },
    { label: "Sat", value: 120 },
    { label: "Sun", value: 80 },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's what's happening with your workforce today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Active Workers"
            value={33}
            change="+2 today"
            icon={Users}
            color="accent"
          />
          
          <StatsCard
            title="Active Projects"
            value={8}
            change="+1 this week"
            icon={ClipboardList}
            color="default"
          />
          
          <StatsCard
            title="Tasks Completed"
            value={156}
            change="+12 today"
            icon={CheckCircle}
            color="success"
          />
          
          <StatsCard
            title="Productivity"
            value="94%"
            change="+3% this week"
            icon={TrendingUp}
            color="accent"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProgressChart
            title="Today's Attendance"
            data={attendanceData}
          />
          
          <BarChart
            title="Weekly Working Hours"
            data={weeklyHoursData}
          />
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project Progress */}
          <div className="lg:col-span-1">
            <ProgressChart
              title="Project Progress"
              data={projectProgressData}
              maxValue={100}
            />
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Quick Actions & Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-warning" />
                  <span className="font-medium text-sm">Pending Timesheets</span>
                </div>
                <p className="text-sm text-muted-foreground">5 workers haven't submitted timesheets for this week</p>
                <Badge variant="outline" className="mt-2 text-warning border-warning">Action Required</Badge>
              </div>
              
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="font-medium text-sm">Client Review</span>
                </div>
                <p className="text-sm text-muted-foreground">Project Omega review scheduled for tomorrow at 2:00 PM</p>
                <Badge variant="outline" className="mt-2 text-accent border-accent">Upcoming</Badge>
              </div>
              
              <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="font-medium text-sm">Performance</span>
                </div>
                <p className="text-sm text-muted-foreground">Team productivity is up 15% this month compared to last</p>
                <Badge variant="outline" className="mt-2 text-success border-success">Great Job!</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
