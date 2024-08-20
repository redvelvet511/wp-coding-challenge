# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Components

## `App` Component

### Overview

The `App` component is the main application component responsible for rendering the `DataTable` component. It manages the application's state and handles updates to the data. This component serves as the central point for initializing and passing data to child components.

### Key Features

- **State Management**: Initializes the `data` state from the imported `rowsData`.
- **Data Handling**: Uses the `onDataUpdate` function to update the state whenever changes occur in the `DataTable`.
- **Component Composition**: Integrates the `DataTable` as a child component, ensuring that data flows seamlessly between components.

# `DataTable` Component

## Overview

The `DataTable` component is a dynamic table that allows for the display of data with advanced features like row expansion, selection, inline editing, and bulk deletion. It is designed to be highly configurable and flexible, adapting to the needs of various data structures.

### Key Features

- **Row Expansion**: Supports expanding rows to show additional details.
- **Selection**: Allows users to select rows for bulk actions.
- **Inline Editing**: Enables editing data directly within the table cells.
- **Bulk Deletion**: Facilitates the deletion of multiple rows at once.

# `TableCell` Component

## Overview

The `TableCell` component is a versatile table cell that supports both editable and non-editable modes. It is designed to handle different types of data and provides a seamless user experience for editing table content.

### Key Features

- **Editable Mode**: The cell can be rendered in an editable mode, allowing users to modify its content.
- **Non-Editable Mode**: The cell can also be rendered as a static display, without the option to edit.
- **Edit Handling**: A callback function is triggered whenever the cell's value is edited, making it easy to manage changes.

# `TableCheckboxCell` Component

## Overview

The `TableCheckboxCell` component is a specialized table cell that contains a checkbox. It is useful for managing binary states, such as row selection in a table. The component provides an easy way to integrate checkbox functionality within table rows.

### Key Features

- **Binary State Management**: Handles binary states (checked/unchecked) within a table cell.
- **Event Handling**: Triggers a callback function when the checkbox state changes, making it easy to manage selection events.

# `TableColumn` Component

## Overview

The `TableColumn` component is responsible for rendering the column headers in a table based on a provided configuration. This component dynamically generates headers, making it flexible and adaptable to various data structures.

### Key Features

- **Dynamic Header Generation**: Automatically renders table headers based on the provided configuration.
- **Configurable Columns**: Accepts an array of column configuration objects, each containing a display name (`header`) and a unique key (`accessor`).

# `TableRow` Component

## Overview

The `TableRow` component is a versatile table row that supports various functionalities, including row expansion, selection, and inline editing of cells. It provides a dynamic way to interact with table data, making it suitable for complex table structures.

### Key Features

- **Row Expansion**: Allows individual rows to be expanded to show additional details.
- **Row Selection**: Supports row selection, useful for bulk actions or highlighting.
- **Inline Editing**: Enables editing of cell content directly within the row, with support for callback handling.
