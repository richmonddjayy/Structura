import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartData {
  label: string;
  value: number;
}

interface BarChartProps {
  title: string;
  data: ChartData[];
  height?: number;
}

export function BarChart({ title, data, height = 200 }: BarChartProps) {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <Card className="card-elevated">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-2" style={{ height: `${height}px` }}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1 gap-2">
              <div className="w-full flex flex-col justify-end h-full">
                <div 
                  className="w-full chart-bar rounded-t-md min-h-[8px] transition-smooth"
                  style={{ 
                    height: `${(item.value / maxValue) * 100}%`,
                    background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-hover)))'
                  }}
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}