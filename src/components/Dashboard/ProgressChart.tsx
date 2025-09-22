import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface ProgressChartProps {
  title: string;
  data: ChartData[];
  maxValue?: number;
}

export function ProgressChart({ title, data, maxValue }: ProgressChartProps) {
  const max = maxValue || Math.max(...data.map(item => item.value));
  
  return (
    <Card className="card-elevated">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div 
                  className={`h-3 rounded-full progress-bar transition-smooth ${
                    item.color || 'bg-gradient-to-r from-accent to-accent-hover'
                  }`}
                  style={{ width: `${(item.value / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}