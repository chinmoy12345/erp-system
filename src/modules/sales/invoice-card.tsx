import PaymentStatus from "./payment-status"

type Props = {
  invoiceNo: string
  customerName: string
  totalAmount: number
  paymentStatus: string
}

export default function InvoiceCard({
  invoiceNo,
  customerName,
  totalAmount,
  paymentStatus,
}: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">

      <div className="flex items-center justify-between mb-6">

        <div>
          <p className="text-slate-500">
            Invoice Number
          </p>

          <h2 className="text-3xl font-black">
            {invoiceNo}
          </h2>
        </div>

        <PaymentStatus
          status={paymentStatus}
        />
      </div>

      <div className="space-y-4">

        <div>
          <p className="text-slate-500 text-sm">
            Customer
          </p>

          <h3 className="font-bold text-lg">
            {customerName}
          </h3>
        </div>

        <div>
          <p className="text-slate-500 text-sm">
            Total Amount
          </p>

          <h3 className="font-black text-4xl">
            ${totalAmount}
          </h3>
        </div>
      </div>
    </div>
  )
}