// src/app/api/teamData/getProjectTasks/[projectId]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import AssignedProjectLog from "@/models/AssignedProjectLogs";
import Task from "@/models/Task";
import User from "@/models/User";
import { getToken, GetUserId, GetUserRole } from "@/utils/token";
import Project from "@/models/Project";
export async function GET(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const { projectId } = params;

    // Connect to the database

    // Retrieve current user's token information
    const token = await getToken(req);
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Unautherized access.",
        },
        { status: 404 }
      );
    }

    const userrole = GetUserRole(token);
    let isverified = false;
    if (userrole && userrole.includes("TeamMember")) {
      isverified = true;
    }
    if (!isverified) {
      return NextResponse.json(
        {
          success: false,
          message: "You are not a TeamMember.",
        },
        { status: 404 }
      );
    }
    await connectToDatabase();

    let currentUser = null;
    if (token) {
      const userid = await GetUserId(token);
      currentUser = await User.findOne({ UserId: userid });
    }
    // Find the AssignedProjectLog document for the given projectId
    const log = await AssignedProjectLog.findOne({ projectId });
    if (!log) {
      return NextResponse.json(
        {
          success: false,
          message: "No assigned project log found for this project.",
        },
        { status: 404 }
      );
    }
    const project = await Project.findOne({ ProjectId: log.projectId });

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "No project found for this projectId.",
        },
        { status: 404 }
      );
    }

    // Extract task IDs from the log
    const tasksIds = log.tasksIds;

    // Fetch tasks for these task IDs
    let tasks = [];
    if (tasksIds && tasksIds.length > 0) {
      tasks = await Task.find({ TaskId: { $in: tasksIds } });
    }

    // Gather unique user IDs from the tasks' assignedTo arrays using Array.from
    const assignedUserIds = Array.from(
      new Set(tasks.flatMap((task: any) => task.assignedTo))
    );

    // Fetch user details for these assigned user IDs
    let members = [];
    if (assignedUserIds.length > 0) {
      members = await User.find({ UserId: { $in: assignedUserIds } });
    }

    return NextResponse.json({
      success: true,
      tasks,
      members,
      currentUser,
      title: project.title,
    });
  } catch (error) {
    console.error("Error fetching project tasks:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch project tasks." },
      { status: 500 }
    );
  }
}
