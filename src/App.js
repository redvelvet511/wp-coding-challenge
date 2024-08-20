import { useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import rowsData from "./data/rows.json";
import columnsData from "./data/columns.json";

/**
 * The main application component that renders the DataTable.
 *
 * This component initializes the data state from the imported `rowsData` and passes it down to the `DataTable` component.
 * The `onDataUpdate` function is used to update the data state whenever any changes are made in the `DataTable`.
 *
 * @component
 * @returns {JSX.Element} The rendered App component.
 *
 * @example
 * // Import the component into your project and render it.
 * import App from './App';
 * 
 * function Main() {
 *   return (
 *     <App />
 *   );
 * }
 * 
 * export default Main;
 */
export default function App() {
  const [data, setData] = useState(rowsData);

  return (
    <div>
      <DataTable data={data} columns={columnsData} onDataUpdate={setData} />
    </div>
  );
}
