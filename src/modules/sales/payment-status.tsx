type Props = {
  status: string
}

export default function PaymentStatus({
  status,
}: Props) {
  return (
    <div
      className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
        status === "PAID"
          ? "bg-emerald-100 text-emerald-700"
          : status === "PENDING"
          ? "bg-orange-100 text-orange-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </div>
  )
}