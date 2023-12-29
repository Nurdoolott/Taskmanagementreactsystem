import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AddTask from "../components/AddTask";
import TaskPage from "../pages/TaskPage";
import EditTask from "../components/EditTask";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<RegisterPage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="task-page" element={<TaskPage />} />
        <Route path="add-task" element={<AddTask />} />
        <Route path={`edit-task/:taskId`} element={<EditTask />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
