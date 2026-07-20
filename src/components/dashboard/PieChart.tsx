import "./PieChart.css";

export type Segment = {
  id: string;
  value: number;
  color: string;
};

type Arc = {
  id: string;
  color: string;
  rotation: number;
  endAngle: number;
  dash: number;
  gap: number;
};

const FREE_COLOR = "#BCBECA";

const PieChart = ({ segments }: { segments: Segment[] }) => {
  const size = 150;
  const strokeWidth = 6;
  const gapDegrees = 12;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const used = segments.reduce((sum, s) => sum + s.value, 0);

  if (used > 100) {
    throw new Error(`Segments total exceeded 100.`);
  }

  const free = 100 - used;
  const segmentsWithFree: Segment[] =
    free > 0
      ? [...segments, { id: "free", value: free, color: FREE_COLOR }]
      : segments;

  const arcs = segmentsWithFree.reduce<Arc[]>((acc, seg, index) => {
    const startAngle = index === 0 ? -90 : acc[index - 1].endAngle;
    const sweep = (seg.value / 100) * 360;
    const drawnSweep = Math.max(sweep - gapDegrees, 0);

    return [
      ...acc,
      {
        id: seg.id,
        color: seg.color,
        rotation: startAngle,
        endAngle: startAngle + sweep,
        dash: (drawnSweep / 360) * circumference,
        gap: circumference - (drawnSweep / 360) * circumference,
      },
    ];
  }, []);

  return (
    <div className="pie-chart">
      <span className="title">Storage</span>

      <div className="chart" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {arcs.map((arc) => (
            <circle
              key={arc.id}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={arc.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${arc.dash} ${arc.gap}`}
              transform={`rotate(${arc.rotation} ${size / 2} ${size / 2})`}
            />
          ))}
        </svg>

        <div className="chart-content">
          <span>{used}%</span>
          <small>Used</small>
        </div>
      </div>

      <span className="usage">420.2 GB of 500 GB used</span>
    </div>
  );
};

export default PieChart;
