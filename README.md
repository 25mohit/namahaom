# Project Dashboard

This is a task management dashboard built with [Next.js](https://nextjs.org) and [React](https://reactjs.org). The application allows users to view, create, and manage tasks for specific projects.

## Features

- **Project Dashboard Page**
  - Lists tasks with:
    - Task Title
    - Status (To Do, In Progress, Completed)
    - Assignee
    - Priority (Low, Medium, High)
    - Due Date
  - Filter tasks by status.
  - Client-side pagination or infinite scroll for task lists.

- **Create/Edit Task Modal**
  - Create or edit tasks in a modal.
  - Task form includes:
    - Title (required)
    - Description (optional)
    - Assignee (select from a list of users)
    - Priority (Low, Medium, High)
    - Due Date (required)
    - Status (To Do, In Progress, Completed)
  - Form validation using [Yup](https://github.com/jquense/yup).
  - Real-time updates upon form submission without page reload.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
