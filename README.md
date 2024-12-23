# 🌐 Full Stack Job Portal Application 🚀

## ➡️ [🔥Live Demo]()

## Overview

Welcome to the **Job Portal Application** built with the **MERN stack**! This platform connects job seekers and employers, enabling them to easily manage job listings, applications, and more. It’s built using **React.js**, **Supabase**, **Tailwind CSS**, **Shadcn UI**, and **Vercel** for deployment.

---

## Features ✨

- **🔑 Secure Authentication**:
  
  - Users can sign up and log in via **email** using **Supabase Authentication**.
  
  - Job seekers and employers have their own customized profiles.

- **📋 Job Listings**:
  
  - Employers can post jobs with detailed descriptions, salary, and location.
  
  - Job seekers can **search** and **filter** through job listings.

- **💼 Apply for Jobs**:
  
  - Job seekers can upload resumes and cover letters when applying for jobs.
  
  - Resumes are stored securely in **Supabase Storage**.

- **🔄 Real-time Updates**:
  
  - Employers can view new applications in real-time.
  
  - Admin interface to manage users and job posts.

- **📱 Responsive Design**:
  
  - Fully responsive using **Tailwind CSS**, making it user-friendly on all devices (desktop, tablet, mobile).

---

## 🚀 Tech Stack

- **Frontend**:
  - **React.js**: A powerful JavaScript library for building dynamic and interactive user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework for building sleek, modern designs quickly.
  - **Shadcn UI**: Pre-built, customizable UI components for building beautiful, consistent interfaces.

- **Backend**:
  - **Supabase**: An open-source backend-as-a-service providing **authentication**, **database**, and **file storage**.

- **Authentication**:
  - **Supabase Authentication**: Secure login and signup using email-based authentication.

- **File Storage**:
  - **Supabase Storage**: Upload and manage resumes or documents securely.

- **Hosting**:
  - **Vercel**: For fast, serverless deployment of the frontend.
  - **Supabase**: Hosting for backend services, including **database** and **authentication**.

---

## 🚀 Installation

### 🛠️ Prerequisites

- Node.js (v16 or higher)
- Yarn (recommended)

### ⚡ Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
    ```

2. Install Dependencies:

    ```bash
    npm install
    ```

3. Set up Supabase:

    - Create a Supabase account at supabase.io.

    - Set up a new project and enable authentication and file storage.

    - Create a .env file in the root directory and add your Supabase URL and API key:

    ```plaintext
    REACT_APP_SUPABASE_URL=your_supabase_url
    REACT_APP_SUPABASE_KEY=your_supabase_key
    ```

4. Start the Application:

    ```bash
    npm start
    ```

    Visit <http://localhost:3000> in your browser!

---

## 🌐 Deployment

Deploy your project seamlessly with Vercel for the frontend and Supabase for the backend:

1. Frontend Deployment:

    - Push your code to GitHub.

    - Connect your GitHub repository to Vercel for automatic deployment.

2. Backend Deployment:

    - **Supabase** automatically hosts your database, authentication, and storage. Just set it up, and you're good to go!

---

## 🎨 Contributing

We welcome contributions! Feel free to fork the repo and submit a pull request.

### **Steps to Contribute**

1. **Fork the repository.**

2. **Create a new branch:**

    ```bash
        git checkout -b feature-branch
    ```

3. **Make your changes and commit:**

    ```bash
        git commit -am 'Add new feature'
    ```

4. **Push your changes:**

    ```bash
        git push origin feature-branch
    ```

5. **Open a pull request.**

---

## 💡 Acknowledgments

- **Supabase** for providing an open-source backend with authentication, database, and storage.

- **React.js** for building dynamic user interfaces.

- **Tailwind CSS** for making UI styling easy and responsive.

- **Shadcn UI** for the beautiful and reusable UI components.

---

## 💬 Questions?

Feel free to open an issue or send a PR if you have any questions or suggestions. We’re happy to help! 🤝

---
