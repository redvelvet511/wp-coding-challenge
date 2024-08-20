import "./TableCell.css";

/**
 * A table cell component that supports editable and non-editable modes.
 *
 * @component
 * @param {Object} props - The component accepts value, editable, and onEdit as props.
 * @param {*} props.value - The value to be displayed in the cell. It can be a string or a number.
 * @param {boolean} props.editable - A flag to determine if the cell should be rendered in an editable mode.
 * @param {function} props.onEdit - A callback function that is called when the cell value is edited. 
 * It receives the new value as an argument.
 * 
 * @returns {JSX.Element} The rendered TableCell component.
 *
 * @example
 * // Render a non-editable cell
 * <TableCell value="Sample Text" editable={false} />
 *
 * @example
 * // Render an editable cell and handle the edit event
 * <TableCell 
 *   value={42} 
 *   editable={true} 
 *   onEdit={(newValue) => console.log('Edited value:', newValue)} 
 * />
 */
export default function TableCell({ value, editable, onEdit }) {
  const isNumber = typeof value === "number";

  if (editable) {
    return (
      <td>
        <input
          type={isNumber ? "number" : "text"}
          value={value}
          onChange={(e) =>
            onEdit(isNumber ? Number(e.target.value) : e.target.value)
          }
          onClick={(e) => e.stopPropagation()}
        />
      </td>
    );
  }

  return <td className="table-cell-text">{value}</td>;
}
