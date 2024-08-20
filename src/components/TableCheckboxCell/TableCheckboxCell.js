/**
 * A table cell component that contains a checkbox for row selection or other binary state management.
 *
 * @component
 * @param {Object} props - The component accepts isChecked and onChange as props.
 * @param {boolean} props.isChecked - Determines whether the checkbox is checked or not.
 * @param {function} props.onChange - A callback function that is triggered when the checkbox state changes.
 *
 * @returns {JSX.Element} The rendered TableCheckboxCell component.
 *
 * @example
 * // Render a checkbox cell with the checkbox checked
 * <TableCheckboxCell isChecked={true} onChange={(e) => console.log(e.target.checked)} />
 *
 * @example
 * // Render a checkbox cell with the checkbox unchecked
 * <TableCheckboxCell isChecked={false} onChange={(e) => console.log(e.target.checked)} />
 */

export default function TableCheckboxCell({ isChecked, onChange }) {
  return (
    <td>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        onClick={(e) => e.stopPropagation()}
      />
    </td>
  );
}
