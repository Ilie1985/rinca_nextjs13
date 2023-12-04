import "./globals.css";
import HomeHeader from "@/components/HomeHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Rinca",
  description: "Rinca app created using nextjs 13 ",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <HomeHeader/>
        {children}
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        </body>
    </html>
  );
}
