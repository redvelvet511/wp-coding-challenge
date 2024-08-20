/**
 * A table header component that renders the column headers based on the provided configuration.
 *
 * @component
 * @param {Object} props - The component accepts columns as a prop.
 * @param {Array<Object>} props.columns - An array of column configuration objects. 
 * Each object should have a `header` property (the display name) and an `accessor` property (a unique key for the column).
 * 
 * @returns {JSX.Element} The rendered TableColumn component.
 *
 * @example
 * // Define columns configuration
 * const columns = [
 *   { header: 'Name', accessor: 'name' },
 *   { header: 'Age', accessor: 'age' },
 * ];
 *
 * // Render the TableColumn component within a table
 * return (
 *   <table>
 *     <TableColumn columns={columns} />
 *     <tbody>
 *       { Table rows go here }
 *     </tbody>
 *   </table>
 * );
 */
export default function TableColumn({ columns }) {
    return (
        <thead>
            <tr>
                {columns.map((col) => (
                    <th key={col.accessor}>{col.header}</th>
                ))}
            </tr>
        </thead>
    );
}
