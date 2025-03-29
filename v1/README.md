# Version 1

## Team Management

- Seprated the Project Management Module of the Project Manger.
- Project Manager can See the Team.
- Project Manager can Create the Team
- Project Manager can Delete the Team
- Project Manager can Update the Team.
- Project Manger can Assign the project to a team.
- Project Manager can UnAssign a project from a team.

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

## Incomplete Sections

- The further more Integration of the projects and teams with the task is due.
- Integration of the tasks with the Projects will be done afterwards.
- Other then that all modules of the Team Management are complete.
- Some more additional details will be shown on ManageProject Page and ManageTeams Page (Team details if project is assigned).This will be done in v3.
