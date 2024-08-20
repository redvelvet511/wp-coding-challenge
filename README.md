# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

# Components

## `App` Component

### Overview

The `App` component is the main part of the application that renders the `DataTable`. It manages the state of the application and handles updates to the data. This component is where data is initialized and passed down to other components.

### Key Features

- **State Management**: Initializes the `data` state using `rowsData`.
- **Data Handling**: Updates the state with the `onDataUpdate` function when changes happen.

## `DataTable` Component

### Overview

The `DataTable` component displays data with features like row expansion, selection, inline editing, and bulk deletion. It's designed to be configurable and flexible for different types of data.

### Key Features

- **Row Expansion**: Supports expanding rows to show more details.
- **Selection**: Allows selecting rows for bulk actions.
- **Inline Editing**: Lets you edit data directly in the table cells.
- **Bulk Deletion**: Makes it easy to delete multiple rows at once.

## `TableCell` Component

### Overview

The `TableCell` component can be either editable or non-editable. It handles different types of data and provides a simple way to edit table content.

### Key Features

- **Editable Mode**: Allows users to modify the content in the cell.
- **Non-Editable Mode**: Renders the cell as static content without editing.
- **Edit Handling**: Calls a function whenever the cell's value is edited.

## `TableCheckboxCell` Component

### Overview

The `TableCheckboxCell` component is a table cell with a checkbox, useful for managing binary states like row selection.

### Key Features

- **Binary State Management**: Handles checked/unchecked states within the table.
- **Event Handling**: Calls a function when the checkbox state changes.

## `TableColumn` Component

### Overview

The `TableColumn` component renders the column headers in a table based on a provided configuration. It automatically generates headers, making it flexible for different data setups.

### Key Features

- **Dynamic Header Generation**: Renders table headers based on the configuration provided.
- **Configurable Columns**: Accepts an array of column configuration objects, each with a display name (`header`) and a unique key (`accessor`).

## `TableRow` Component

### Overview

The `TableRow` component is a table row that supports row expansion, selection, and inline editing of cells. It's useful for interacting with table data in a more dynamic way.

### Key Features

- **Row Expansion**: Allows rows to be expanded to show more details.
- **Row Selection**: Supports selecting rows, which is useful for bulk actions.
- **Inline Editing**: Enables editing of cells directly in the row, with support for handling changes.
