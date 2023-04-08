import React from 'react'

const Table = ({ fields, data, onRowClick }) => {
  return (
    <table>
      <tr>
        {fields.map((field, index) => <th key={index}>{field}</th>)}
      </tr>
      {data.map((item) => {
        const values = Object.values(item)
        return (
          <tr className={!!onRowClick ? 'cursor-pointer' : ''} key={item.id} onClick={() => onRowClick?.(item)}>
            {values.map((v) => <td key={v}>{v}</td>)}
          </tr>
        )
      })}
    </table>
  )
}

export default Table
