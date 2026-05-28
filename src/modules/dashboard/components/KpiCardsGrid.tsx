import { KpiCard } from '@/components/ui/KpiCard';
import { KPI_CARDS } from '@/constants/dashboardMockData';

export function KpiCardsGrid() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {KPI_CARDS.map((kpi, idx) => (
        <KpiCard key={idx} {...kpi} />
      ))}
    </div>
  );
}