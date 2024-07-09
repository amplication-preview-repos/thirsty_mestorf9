import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { ChatList } from "./chat/ChatList";
import { ChatCreate } from "./chat/ChatCreate";
import { ChatEdit } from "./chat/ChatEdit";
import { ChatShow } from "./chat/ChatShow";
import { PastPaperList } from "./pastPaper/PastPaperList";
import { PastPaperCreate } from "./pastPaper/PastPaperCreate";
import { PastPaperEdit } from "./pastPaper/PastPaperEdit";
import { PastPaperShow } from "./pastPaper/PastPaperShow";
import { TeacherAssistanceList } from "./teacherAssistance/TeacherAssistanceList";
import { TeacherAssistanceCreate } from "./teacherAssistance/TeacherAssistanceCreate";
import { TeacherAssistanceEdit } from "./teacherAssistance/TeacherAssistanceEdit";
import { TeacherAssistanceShow } from "./teacherAssistance/TeacherAssistanceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WorkIT"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="Chat"
          list={ChatList}
          edit={ChatEdit}
          create={ChatCreate}
          show={ChatShow}
        />
        <Resource
          name="PastPaper"
          list={PastPaperList}
          edit={PastPaperEdit}
          create={PastPaperCreate}
          show={PastPaperShow}
        />
        <Resource
          name="TeacherAssistance"
          list={TeacherAssistanceList}
          edit={TeacherAssistanceEdit}
          create={TeacherAssistanceCreate}
          show={TeacherAssistanceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
