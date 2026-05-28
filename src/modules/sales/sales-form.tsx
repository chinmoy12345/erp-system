"use client"

export default function SalesForm() {
  return (
    <div className="bg-white rounded-[36px] border border-slate-100 shadow-sm p-10">

      <div className="grid md:grid-cols-2 gap-8">

        {/* CUSTOMER */}
        <div>
          <label className="block mb-3 font-semibold">
            Customer Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-slate-200 rounded-2xl px-5 py-4"
          />
        </div>

        {/* PRODUCT */}
        <div>
          <label className="block mb-3 font-semibold">
            Product
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-5 py-4">
            <option>MacBook Pro</option>
            <option>Dell Monitor</option>
            <option>Gaming Keyboard</option>
          </select>
        </div>

        {/* QUANTITY */}
        <div>
          <label className="block mb-3 font-semibold">
            Quantity
          </label>

          <input
            type="number"
            placeholder="1"
            className="w-full border border-slate-200 rounded-2xl px-5 py-4"
          />
        </div>

        {/* PRICE */}
        <div>
          <label className="block mb-3 font-semibold">
            Price
          </label>

          <input
            type="number"
            placeholder="2500"
            className="w-full border border-slate-200 rounded-2xl px-5 py-4"
          />
        </div>

        {/* PAYMENT STATUS */}
        <div>
          <label className="block mb-3 font-semibold">
            Payment Status
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-5 py-4">
            <option>PAID</option>
            <option>PENDING</option>
            <option>FAILED</option>
          </select>
        </div>

        {/* SALE STATUS */}
        <div>
          <label className="block mb-3 font-semibold">
            Sale Status
          </label>

          <select className="w-full border border-slate-200 rounded-2xl px-5 py-4">
            <option>COMPLETED</option>
            <option>PROCESSING</option>
            <option>CANCELLED</option>
          </select>
        </div>
      </div>

      {/* NOTES */}
      <div className="mt-8">
        <label className="block mb-3 font-semibold">
          Notes
        </label>

        <textarea
          rows={5}
          placeholder="Enter sales notes..."
          className="w-full border border-slate-200 rounded-2xl px-5 py-4"
        />
      </div>

      {/* BUTTON */}
      <div className="flex justify-end mt-10">

        <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold">
          Save Sale
        </button>
      </div>
    </div>
  )
}