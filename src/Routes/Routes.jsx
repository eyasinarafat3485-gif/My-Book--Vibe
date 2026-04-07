import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/Books/Homepage";
import Mainlayout from "../Layout/Mainlayout";
import Errorpage from "../Error/Errorpage";
import Books from "../Components/Books";
import BookDetails from "../Components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: "/booksDetails/:bookId",
        Component: BookDetails,
        loader: ()=> fetch("/booksData.json")
      }
    ],
    errorElement: <Errorpage />
  },

]);
