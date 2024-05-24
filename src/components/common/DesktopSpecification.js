import React from 'react'

const DesktopSpecification = ({ product }) => {
  const properties = Object.entries(product)
  const numRows = Math.ceil(properties.length / 2)
  return (
    <div className="hidden md:block max-w-[1300px] mx-auto py-10 px-5">
      <div className="bg-mondo-50 p-4 rounded shadow overflow-x-scroll">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">PRODUCT SPECIFICATION</h1>
        </div>
        <table className="w-full border-collapse">
          <tbody>
            {Array.from({ length: numRows }, (_, rowIndex) => {
              const rowProperties = properties.slice(
                rowIndex * 2,
                (rowIndex + 1) * 2
              )

              return (
                <tr key={rowIndex}>
                  {rowProperties.map(([key, value]) => (
                    <React.Fragment key={key}>
                      <td className="border px-4 py-2 font-semibold w-1/4">
                        {key} :
                      </td>
                      <td className="border px-4 py-2" colSpan="3">
                        {Array.isArray(value)
                          ? value.join(' / ')
                          : typeof value === 'object'
                          ? Object.values(value).join(', ')
                          : value}
                      </td>
                    </React.Fragment>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DesktopSpecification
