# Getting Started with CanvasManus

This guide will help you get started with CanvasManus, from installation to creating your first document canvas.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0.0 or later
- npm 8.0.0 or later (or yarn/pnpm)
- MongoDB 5.0 or later (for backend services)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Setting Up the Development Environment

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/canvasmanus.git
   cd canvasmanus
   ```

2. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies
   ```bash
   cd ../backend
   npm install
   ```

4. Configure Environment Variables
   
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/canvasmanus
   JWT_SECRET=your_jwt_secret_here
   CORS_ORIGIN=http://localhost:3000
   ```

5. Start the application
   ```bash
   # Start the backend server (from the backend directory)
   npm run dev

   # In a separate terminal, start the frontend (from the frontend directory)
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application

## Creating Your First Document

1. Navigate to your CanvasManus application at [http://localhost:3000](http://localhost:3000)
2. Click on the "Create New Document" button on the dashboard
3. Give your document a title and description
4. Click "Create" to generate a new canvas

## Working with the Canvas

### Adding Content

- Click anywhere on the canvas to create a new text block
- Use the toolbar to format your text with Markdown
- Drag and drop elements to rearrange them on the canvas

### Creating Connections

- Select an element and click the "Connect" button
- Then click on another element to create a connection between them
- You can style connections using the formatting options in the sidebar

### Organizing with Nested Documents

1. Select an element on the canvas
2. Click the "Create Nested Document" button
3. A new canvas will be created as a child of the selected element
4. Navigate between parent and child documents using the breadcrumb navigation

## Collaboration Features

### Inviting Collaborators

1. Open your document and click the "Share" button
2. Enter the email addresses of the people you want to invite
3. Select their permission level (Viewer, Editor, Admin)
4. Click "Send Invites" to grant them access

### Real-time Editing

- Multiple users can edit the same document simultaneously
- Changes made by one user are immediately visible to others
- User cursors are color-coded to identify different collaborators

### Comments and Feedback

1. Select any element on the canvas
2. Click the "Comment" button in the toolbar
3. Type your comment and press Enter
4. Other users can reply to comments to create threaded discussions

## Advanced Features

### Version History

- Access the document history by clicking the "History" button
- Browse through previous versions of your document
- Restore a previous version if needed

### Export Options

CanvasManus supports exporting your documents in various formats:

- Markdown (.md)
- PDF
- HTML
- Image (.png or .jpg)

To export, click the "Export" button and select your preferred format.

## Troubleshooting

If you encounter any issues while using CanvasManus, try the following:

1. Refresh your browser
2. Clear your browser cache
3. Restart the frontend and backend servers
4. Check the console for any error messages

If problems persist, please [open an issue](https://github.com/yourusername/canvasmanus/issues) on GitHub. 