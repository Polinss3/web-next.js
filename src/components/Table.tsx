import React from 'react';

interface TableProps {
  title?: string;
  columns: string[];
  data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ title, columns, data }) => {
  return (
    <div className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-11/12 2xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded border-2">
          {title && (
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">{title}</h3>
                </div>
              </div>
            </div>
          )}

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    {columns.map((col) => (
                      <td
                        key={col}
                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-blueGray-700"
                      >
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
