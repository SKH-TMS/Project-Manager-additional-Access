# Project-Manager-additional-Access
## Version 0

### Project Management

- Seprated the Project Management Module of the Project Manger.
- Project Manager can See the Projects.
- Project Manager can Create the Projects
- Project Manager can Delete the Projects
- Project Manager can Update the Project.
- Project Manger can Assign the project to a team.
- Project Manager can UnAssign a project from a team.

### Folder structure for Pages

#### Pages

         projectManagerData
            ProjectManagementData
               AssignProject/page.tsx
               AssignSpecificProject/[projectId]/page.tsx
               CreateProject/page.tsx
               manageProject/page.tsx
               UpdateProject/page.tsx

#### API routes

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

### Incomplete Sections

- The further more Integration of the projects with the task is due.
- Integration of the tasks with the Projects will be done after the Integration of TeamManagement with the ProjectManager.
- Other then that all modules of the ProjectManagement are complete.
- Some more additional details will be shown on ManageProject Page (Team details if project is assigned). This will be acieved by completing TeamManagement module in ProjectManager.

## Version 1

### Team Management

- Seprated the Project Management Module of the Project Manger.
- Project Manager can See the Team.
- Project Manager can Create the Team
- Project Manager can Delete the Team
- Project Manager can Update the Team.
- Project Manger can Assign the project to a team.
- Project Manager can UnAssign a project from a team.

### Folder structure for Pages

#### Pages

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

#### API routes

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

### Fixes
- Fixed ProjectManager routes now Project Manager can only acces the Projects and the teams which he have created


### Incomplete Sections

- The further more Integration of the projects and teams with the task is due.
- Integration of the tasks with the Projects will be done afterwards.
- Other then that all modules of the Team Management are complete.
- Some more additional details will be shown on ManageProject Page and ManageTeams Page (Team details if project is assigned).This will be done in v3.
## Version 2

### Task Management

- Seprated the Project Management Module of the Project Manger.
- Project Manager can See the Task.
- Project Manager can Create the Task
- Project Manager can Delete the Task
- Project Manager can Update the Task.
- Project Manger can Assign the project and team to a Task.

### Folder structure for Pages

#### Pages

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

#### API routes

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

### Fixes

- Now at the Time of assigning Task all team Leader and Projec Manager will use User email instead of Userid.
- Same on oher related pages the UserId is replaced with email of the User



