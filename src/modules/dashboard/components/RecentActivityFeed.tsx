import { Clock } from 'lucide-react';
import { RECENT_ACTIVITIES } from '@/constants/dashboardMockData';

export function RecentActivityFeed() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div><h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3><p className="text-sm text-gray-500">Latest system events</p></div>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {RECENT_ACTIVITIES.map((activity, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
              <activity.icon className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1"><p className="text-sm text-gray-800">{activity.action}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500"><span>{activity.user}</span><span>•</span><span>{activity.time}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}