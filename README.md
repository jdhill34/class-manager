# class-manager

A simple, efficient, course manager that allows you to track projects, assignments, and due dates.

### Technology

- NodeJS + ExpressJS application server.
- EJS templates for dynamic rendering.
- MySQL backend for data storage.

### Requirements

- Sign in + create account (user functionality).
- CRUD for courses and assignments.

### Design

#### Frontend

- Main dashboard calendar for schedule.
- Main courses page to add, modify, or delete.
  - Clicking on a course should show assignments for ONE course.
- Main assignments page for ALL courses to add, modify, or complete.
  - Assignments in order by date.

#### Backend

- Deleting a course should delete all assignments.
- Completing an assignment should mark a bit attribute (not delete the assignment).
