import { CreditCard } from "lucide-react"

export function PaymentMethods() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="h-5 w-5 text-green-600" />
          <h3 className="font-bold text-lg">Payment Methods</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center payment-icon">
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-sm">KPay</span>
            </div>
            <span className="text-xs text-gray-500">KBZ Pay</span>
          </div>
          <div className="flex flex-col items-center payment-icon">
            <div className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-sm">Wave</span>
            </div>
            <span className="text-xs text-gray-500">Wave Money</span>
          </div>
          <div className="flex flex-col items-center payment-icon">
            <div className="w-12 h-12 bg-[#e11b22] rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-sm">A+</span>
            </div>
            <span className="text-xs text-gray-500">AYA Pay</span>
          </div>
          <div className="flex flex-col items-center payment-icon">
            <div className="w-12 h-12 bg-[#f7941d] rounded-full flex items-center justify-center mb-2">
              <span className="text-white font-bold text-sm">MPT</span>
            </div>
            <span className="text-xs text-gray-500">Telecom Bill</span>
          </div>
        </div>
      </div>
    </div>
  )
}
