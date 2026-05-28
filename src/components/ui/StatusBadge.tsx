export function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Delivered: "bg-green-100 text-green-800",
    Shipping: "bg-blue-100 text-blue-800",
    Processing: "bg-yellow-100 text-yellow-800",
    Pending: "bg-gray-100 text-gray-800",
  };
  return (
    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}