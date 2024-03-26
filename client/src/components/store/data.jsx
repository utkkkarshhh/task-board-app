const pendingTasks = [
  {
    title: "Develop landing page",
    priority: "P0",
    content:
      "Design and develop a responsive landing page for the new product launch.",
    assignee: "Alice Johnson",
    status: "Assign",
  },
  {
    title: "Review marketing campaign",
    priority: "P1",
    content:
      "Review the latest marketing campaign performance and provide feedback for improvements.",
    assignee: "John Smith",
    status: "Assign",
  },
  {
    title: "Prepare presentation slides",
    priority: "P2",
    content:
      "Create slides for the upcoming client presentation covering project progress and future plans.",
    assignee: "Emily Davis",
    status: "Assign",
  },
];

const inProgressTasks = [
  {
    title: "Update backend API",
    priority: "P2",
    content:
      "Implement new features and fix bugs in the backend API based on client requirements.",
    assignee: "Michael Brown",
    status: "In Progress",
  },
  {
    title: "Update backend API",
    priority: "P2",
    content:
      "Implement new features and fix bugs in the backend API based on client requirements.",
    assignee: "Michael Brown",
    status: "In Progress",
  },
  {
    title: "Update backend API",
    priority: "P2",
    content:
      "Implement new features and fix bugs in the backend API based on client requirements.",
    assignee: "Michael Brown",
    status: "In Progress",
  },
];

const completedTasks = [
  {
    title: "Client meeting",
    priority: "P1",
    content:
      "Conduct a successful client meeting to discuss project milestones and deliverables.",
    assignee: "Daniel Wilson",
    status: "Completed",
  },
];

const deployedTasks = [
  {
    title: "Deploy version 2.0",
    priority: "P2",
    content:
      "Deploy the latest version of the application to production servers with new features and optimizations.",
    assignee: "Sophia Clark",
    status: "Deployed",
  },
  {
    title: "Deploy version 2.0",
    priority: "P2",
    content:
      "Deploy the latest version of the application to production servers with new features and optimizations.",
    assignee: "Sophia Clark",
    status: "Deployed",
  },
];

const deferredTasks = [
  {
    title: "Research new technology",
    priority: "P0",
    content:
      "Conduct research on emerging technologies to explore their potential benefits for future projects.",
    assignee: "Oliver Taylor",
  },
];

module.exports = {
  pendingTasks,
  inProgressTasks,
  completedTasks,
  deployedTasks,
  deferredTasks,
};
