import React from 'react'

const MobileSpecification = ({ product }) => {
  return (
    <div className="block md:hidden max-w-[1300px] mx-auto py-10  px-3">
      <div className="bg-mondo-50 p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">PRODUCT SPECIFICATION</h1>
        </div>
        <div className="space-y-4">
          {Object.entries(product).map(([key, value]) => {
            // Check if value is a string or an array
            if (typeof value === 'string' || Array.isArray(value)) {
              return (
                <div className="flex border-b" key={key}>
                  <div className="w-1/2 border-r px-2 sm:px-4 py-2 font-semibold">
                    {key} :
                  </div>
                  <div className="w-1/2 px-2 sm:px-4 py-2">
                    {/* If value is an array, join its elements */}
                    {Array.isArray(value) ? value.join(' / ') : value}
                  </div>
                </div>
              )
            }
            return null // Skip rendering for other types of values
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileSpecification
