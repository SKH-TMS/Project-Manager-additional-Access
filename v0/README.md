# Version 0

## Project Management

- Seprated the Project Management Module of the Project Manger.
- Project Manager can See the Projects.
- Project Manager can Create the Projects
- Project Manager can Delete the Projects
- Project Manager can Update the Project.
- Project Manger can Assign the project to a team.
- Project Manager can UnAssign a project from a team.

## Folder structure for Pages

### Pages

         projectManagerData
            ProjectManagementData
               AssignProject/page.tsx
               AssignSpecificProject/[projectId]/page.tsx
               CreateProject/page.tsx
               manageProject/page.tsx
               UpdateProject/page.tsx

### API routes

         projectManagerData
            projectManagementData
               assignProject/[projectId]/route.ts
               createProject/route.ts
               deleteSelectedProjects/route.ts
               getProjectForUpdation/[projectId]/route.ts
               getProjects/route.ts
               getUnassignedProjects/route.ts
               unassignSelectedProjects/route.ts
               updateProject/[projectId]/route.ts

## Incomplete Sections

- The further more Integration of the projects with the task is due.
- Integration of the tasks with the Projects will be done after the Integration of TeamManagement with the ProjectManager.
- Other then that all modules of the ProjectManagement are complete.
- Some more additional details will be shown on ManageProject Page (Team details if project is assigned). This will be acieved by completing TeamManagement module in ProjectManager.
