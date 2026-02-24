import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { WeatherRow } from "@/types";

export default function WeatherTable({ rows }: { rows: WeatherRow[] }) {
  if (!rows || rows.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {rows.map((row) => (
        <Card key={row.period} className="py-4">
          <CardHeader className="px-4 pb-0">
            <CardTitle className="text-sm font-semibold">
              {row.period}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1.5 px-4 pt-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">High / Low</span>
              <span className="font-medium">
                {row.avgHigh} / {row.avgLow}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Rain Days</span>
              <span className="font-medium">{row.rainDays}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">AQI</span>
              <span className="font-medium">{row.aqi}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Conditions</span>
              <span className="font-medium">{row.conditions}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
