import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  color?: "default" | "accent" | "success" | "warning";
  children?: ReactNode;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color = "default",
  children 
}: StatsCardProps) {
  const colorClasses = {
    default: "text-primary bg-primary/10",
    accent: "text-accent bg-accent/10",
    success: "text-success bg-success/10", 
    warning: "text-warning bg-warning/10"
  };

  const changeColorClass = change?.startsWith('+') ? 'text-success' : 
                          change?.startsWith('-') ? 'text-destructive' : 
                          'text-muted-foreground';

  return (
    <Card className="card-elevated transition-smooth hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">{value}</h3>
              {change && (
                <span className={`text-sm font-medium ${changeColorClass}`}>
                  {change}
                </span>
              )}
            </div>
            {children}
          </div>
          
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}