# Version 2

## Task Management

- Seprated the Project Management Module of the Project Manger.
- Project Manager can See the Task.
- Project Manager can Create the Task
- Project Manager can Delete the Task
- Project Manager can Update the Task.
- Project Manger can Assign the project and team to a Task.

## Folder structure for Pages

### Pages

         projectManagerData
            ProfileProjectManager/page.tsx
            ProjectManagementData
               AssignProject/page.tsx
               AssignSpecificProject/[projectId]/page.tsx
               CreateProject/page.tsx
               manageProject/page.tsx
               UpdateProject/page.tsx
            teamManagementData
               AssignProjectToTeam/[teamId]/page.tsx
               CreateTeam/page.tsx
               EditTeam/[teamId]page.tsx
               ManageTeams/page.tsx
               TeamProjects/[teamId]/page.tsx
            taskManagementData
               CreateSpecifiedTask/[projectId]/page.tsx
               CreateTask/page.tsx
               ManageTasks/[projectID]/updateTask/[projectId]/[taskId]/page.tsx/pages.tsx
               ProjectTasks/[projectID]/updateTask[taskId]/page.tsx/pages.tsx

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
            teamManagementData
               createTeam/route.ts
               deleTeams/route.ts
               editTeam/[teamId]/route.ts
               getAllUsers/route.ts
               getTeamData/[teamId]/route.ts
               getTeamProjects/[teamId]/route.ts
               getTeams/route.ts
               getTeamsData/route.ts
               unassignProject/route.ts
            taskManagementData
               assignTask/[projectId]/route.ts
               createSpecifiedTask/route.ts
               getProjects/route.ts
               getProjectTasks[projectId]/route.ts
               getTaskDetails[taskId]/route.ts
               getTasks/route.ts
               getTeamMembers/[projectId]/route.ts
               getTeams/route.ts
               markTaskCompleted/[taskId]/route.ts
               markTaskPending/[taskId]/route.ts
               updateTask/route.ts

## Fixes

- Now at the Time of assigning Task all team Leader and Projec Manager will use User email instead of Userid.
- Same on oher related pages the UserId is replaced with email of the User
