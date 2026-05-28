export function PaymentBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
      status === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
    }`}>
      {status}
    </span>
  );
}