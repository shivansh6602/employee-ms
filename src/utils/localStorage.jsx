localStorage.clear()
const employees = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "employee1@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a clean and responsive login UI",
        taskDate: "2026-01-10",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Employee Dashboard UI",
        taskDescription: "Build employee dashboard layout using React",
        taskDate: "2026-01-12",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve navbar alignment issue",
        taskDate: "2026-01-05",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 2,
    name: "Rahul Verma",
    email: "employee2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate login API with frontend",
        taskDate: "2026-01-11",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Reusable Components",
        taskDescription: "Buttons, Inputs, Cards",
        taskDate: "2026-01-06",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deployment failed due to build error",
        taskDate: "2026-01-07",
        category: "DevOps"
      }
    ]
  },

  {
    id: 3,
    name: "Neha Singh",
    email: "employee3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Schema Design",
        taskDescription: "Design tables for employee management",
        taskDate: "2026-01-09",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription: "Document all endpoints",
        taskDate: "2026-01-04",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDescription: "Implement JWT based auth",
        taskDate: "2026-01-13",
        category: "Backend"
      }
    ]
  },

  {
    id: 4,
    name: "Priya Gupta",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Admin Panel",
        taskDescription: "Admin dashboard for task assignment",
        taskDate: "2026-01-14",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Form Validation",
        taskDescription: "Improve form validation UX",
        taskDate: "2026-01-03",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Performance",
        taskDescription: "App performance was not improved",
        taskDate: "2026-01-02",
        category: "Optimization"
      }
    ]
  },

  {
    id: 5,
    name: "Suresh Kumar",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Application",
        taskDescription: "Test all modules manually",
        taskDate: "2026-01-15",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project Structure",
        taskDescription: "Initial folder and routing setup",
        taskDate: "2026-01-01",
        category: "Setup"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "State Management",
        taskDescription: "Manage state using Context API",
        taskDate: "2026-01-16",
        category: "React"
      }
    ]
  }
];




const admin = [{
  "id": 101,
  "email": "admin@gmail.com",
  "password": "123"
}];

export const setLocalStorage = () => {
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () => {
const employees = JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))

return {employees,admin}

}
