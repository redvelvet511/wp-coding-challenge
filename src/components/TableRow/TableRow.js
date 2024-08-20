import TableCell from "../TableCell/TableCell";
import TableCheckboxCell from "../TableCheckboxCell/TableCheckboxCell";
import "./TableRow.css";

/**
 * A table row component that supports row expansion, selection, and inline editing of cells.
 *
 * @component
 * @param {Object} props - The component accepts row, rowIndex, columns, expandedRow, isSelected, onRowExpansion, onRowSelection, and onRowEdit as props.
 * @param {Object} props.row - The data object representing the row's content.
 * @param {number} props.rowIndex - The index of the row in the data array.
 * @param {Array<Object>} props.columns - An array of column configuration objects. Each object should have a `header`, `accessor`, and optionally `editable` properties.
 * @param {number|null} props.expandedRow - The index of the currently expanded row, or null if no row is expanded.
 * @param {boolean} props.isSelected - Indicates whether the current row is selected.
 * @param {function} props.onRowExpansion - Callback function to handle row expansion. Receives the row index as an argument.
 * @param {function} props.onRowSelection - Callback function to handle row selection. Receives the row index as an argument.
 * @param {function} props.onRowEdit - Callback function to handle cell editing. Receives the row index, the column accessor, and the new value as arguments.
 * 
 * @returns {JSX.Element} The rendered TableRow component.
 *
 * @example
 * // Define columns configuration
 * const columns = [
 *   { header: 'Select', accessor: 'select' },
 *   { header: 'Name', accessor: 'name', editable: true },
 * ];
 *
 * // Define a row of data
 * const row = {
 *   select: false,
 *   name: 'John Doe',
 *   age: 28,
 *   email: 'john@example.com',
 *   details: 'Additional information about John Doe.'
 * };
 *
 * // Render the TableRow component within a table
 * <table>
 *   <tbody>
 *     <TableRow 
 *       row={row} 
 *       rowIndex={0} 
 *       columns={columns} 
 *       expandedRow={null}
 *       isSelected={false}
 *       onRowExpansion={(index) => console.log('Row expanded:', index)}
 *       onRowSelection={(index) => console.log('Row selected:', index)}
 *       onRowEdit={(index, accessor, value) => console.log('Edited:', index, accessor, value)}
 *     />
 *   </tbody>
 * </table>
 */
export default function TableRow({
  row,
  rowIndex,
  columns,
  expandedRow,
  isSelected,
  onRowExpansion,
  onRowSelection,
  onRowEdit,
}) {
  const isExpanded = expandedRow === rowIndex && row.details;
  
  return (
    <>
      <tr
        className={isExpanded ? "expanded-row" : ""}
        onClick={() => onRowExpansion(rowIndex)}
      >
        {columns.map((col) =>
          col.accessor === "select" ? (
            <TableCheckboxCell
              key={col.accessor}
              isChecked={isSelected}
              onChange={() => onRowSelection(rowIndex)}
            />
          ) : (
            <TableCell
              key={col.accessor}
              value={row[col.accessor]}
              editable={col.editable}
              onEdit={(value) => onRowEdit(rowIndex, col.accessor, value)}
            />
          )
        )}
        {row.details && (
          <td className="chevron-container">
            <svg
              className={isExpanded ? "chevron-expanded" : "chevron"}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </td>
        )}
      </tr>
      {isExpanded && (
        <tr className="expanded-content">
          <td colSpan={columns.length}>
            <div className="expanded-row">{row.details}</div>
          </td>
        </tr>
      )}
    </>
  );
}
