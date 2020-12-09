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
  - Clicking on a course should show course info and assignments for ONE course.
- Main assignments page for ALL courses to add, modify, or complete.
  - Assignments in order by date.

#### Backend

- Deleting a course should delete all assignments.
- Completing an assignment should mark a bit attribute (not delete the assignment).
- USER can have multiple courses, COURSE can have multiple assignments.

##### Relations

1. USER (user_id, user_name, user_email, user_password)
2. COURSE (course_id, course_title, course_prof, course_start_time, course_end_time, course_days_of_week, user_id)
3. ASSIGNMENT (assignment_id, assignment_description, assignment_due_date, assignment_due_time, course_id)
