import React from 'react';
import { NotionBlock, NotionCallout } from './NotionBlock';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Open Rate', value: 30.2, color: '#4ade80' }, // green-400
  { name: 'CTR', value: 8.5, color: '#60a5fa' }, // blue-400
  { name: 'Engagement', value: 30, color: '#f472b6' }, // pink-400
  { name: 'Intl Attendees', value: 100, color: '#fb923c', label: 'Achieved 100% Target' }, // orange-400
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-stone-200 shadow-sm rounded text-xs">
        <p className="font-semibold">{label}</p>
        <p>{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export const Impact: React.FC = () => {
  return (
    <div className="px-4 md:px-12 mb-12">
      <NotionBlock title="Campaign Impact Metrics" icon="📈">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          <div className="w-full md:w-1/2 h-64 bg-stone-50 p-4 rounded border border-stone-100">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e5e5" />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12, fill: '#57534e'}} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>

          <div className="w-full md:w-1/2 space-y-4">
             <NotionCallout className="m-0" icon="🔥">
                <strong>30.2% Open Rate:</strong> Maximized pre-registration conversions via restructured visual logic.
             </NotionCallout>
             <NotionCallout className="m-0" icon="🚀">
                <strong>8.5% CTR:</strong>  Consistently surpassed previous event pre-registration targets.
             </NotionCallout>
             <NotionCallout className="m-0" icon="🌍">
                <strong>4,000+ Attendees:</strong> Reaching the highest overseas participation rate in four years.
             </NotionCallout>
          </div>

        </div>
      </NotionBlock>
    </div>
  );
};