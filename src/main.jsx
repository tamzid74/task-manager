import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <DndProvider backend={HTML5Backend}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </React.StrictMode>
      </QueryClientProvider>
    </DndProvider>
  </AuthProvider>
);
