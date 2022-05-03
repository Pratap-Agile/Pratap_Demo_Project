import React from "react";

//redux post component
const Post = React.lazy(() => import("./components/CRUD/Redux_CRUD/Post/Post"));
const CreatePost = React.lazy(() =>
  import("./components/CRUD/Redux_CRUD/CreatePost/CreatePost")
);
const DisplatData = React.lazy(() =>
  import("./components/CRUD/Redux_CRUD/DisplayPost/DiplayData")
);
const EditPost = React.lazy(() =>
  import("./components/CRUD/Redux_CRUD/EditPost/EditPost")
);

////firebase add navigation only firebase
const Add = React.lazy(() => import("./components/CRUD/Firebase_CRUD/AddEdit"));
const View = React.lazy(() => import("./components/CRUD/Firebase_CRUD/View"));
const AddEdit = React.lazy(() =>
  import("./components/CRUD/Firebase_CRUD/AddEdit")
);
const FirebaseRead = React.lazy(() =>
  import("./components/CRUD/Firebase_CRUD/index")
);

const routes = [
  { path: "/", exact: true, name: "Home" },

  //redux crud path
  { path: "/theme/post", name: "User", element: Post },
  { path: "/theme/createpost", name: "createpost", element: CreatePost },
  { path: "/theme/editpost/:id", name: "editpost", element: EditPost },
  { path: "/theme/displaydata/:id", name: "displaydata", element: DisplatData },

  //firebase crud path
  { path: "/firebase/add", name: "Add", element: Add },
  { path: "/firebase/view/:id", name: "View", element: View },
  { path: "/firebase/update/:id", name: "AddEdit", element: AddEdit },
  { path: "/firebase/read", name: "FirebaseRead", element: FirebaseRead },
];

export default routes;
