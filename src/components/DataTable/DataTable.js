import { useState } from "react";
import TableColumn from "../TableColumn/TableColumn";
import TableRow from "../TableRow/TableRow";
import "./DataTable.css";

/**
 * A dynamic table component that displays data, supports row expansion, selection, inline editing and bulk deletion.
 *
 * @component
 * @param {Object} props - The component accepts data, columns, and onDataUpdate as props.
 * @param {Array<Object>} props.data - The array of data objects to display in the table.
 * @param {Array<Object>} props.columns - The array of column configurations for the table.
 * @param {function} props.onDataUpdate - A callback function that gets called when the data is updated,
 * passing the updated data array as an argument.
 *
 * @returns {JSX.Element} The rendered DataTable component.
 *
 * @example
 * // Define columns configuration
 * const columns = [
 *   { header: 'Name', accessor: 'name' },
 *   { header: 'Age', accessor: 'age' },
 * ];
 *
 * // Define data
 * const data = [
 *   { name: 'John Doe', age: 28, email: 'john@example.com' },
 *   { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
 * ];
 *
 * // Define update handler
 * function handleDataUpdate(newData) {
 *   console.log(newData);
 * }
 *
 * // Render the DataTable
 * <DataTable data={data} columns={columns} onDataUpdate={handleDataUpdate} />
 */
export default function DataTable({ data, columns, onDataUpdate }) {
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState(new Set());

  /**
   * Handles the expansion state of a row.
   * @param {number} rowIndex - The index of the row to expand or collapse.
   */
  const handleRowExpansion = (rowIndex) => {
    setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
  };

  /**
   * Handles the selection state of a row.
   * @param {number} rowIndex - The index of the row to select or deselect.
   */
  const handleRowSelection = (rowIndex) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(rowIndex)) {
      newSelectedRows.delete(rowIndex);
    } else {
      newSelectedRows.add(rowIndex);
    }
    setSelectedRows(newSelectedRows);
  };

  /**
   * Deletes the selected rows from the table.
   */
  const handleBulkDelete = () => {
    const newData = data.filter((_, index) => !selectedRows.has(index));
    setSelectedRows(new Set());
    onDataUpdate(newData);
  };

  /**
   * Handles the editing of a table row.
   * @param {number} rowIndex - The index of the row to edit.
   * @param {string} accessor - The key of the data field to update.
   * @param {*} value - The new value for the data field.
   */
  const handleRowEdit = (rowIndex, accessor, value) => {
    const editedData = [...data];
    editedData[rowIndex][accessor] = value;
    onDataUpdate(editedData);
  };

  return (
    <>
      <table>
        <TableColumn columns={columns} />
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              row={row}
              rowIndex={rowIndex}
              columns={columns}
              expandedRow={expandedRow}
              isSelected={selectedRows.has(rowIndex)}
              onRowExpansion={handleRowExpansion}
              onRowSelection={handleRowSelection}
              onRowEdit={handleRowEdit}
            />
          ))}
        </tbody>
      </table>
      {selectedRows.size > 0 && (
        <button className="delete-button" onClick={handleBulkDelete}>
          Delete Selected
        </button>
      )}
    </>
  );
}
