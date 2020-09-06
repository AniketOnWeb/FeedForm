import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/analytics";
import "firebase/remote-config";

const config = {
  apiKey: "AIzaSyBML1AirpSLDU3xsCHXy5ZdsjB_6qF_kek",
  authDomain: "feedform-d06f9.firebaseapp.com",
  databaseURL: "https://feedform-d06f9.firebaseio.com",
  projectId: "feedform-d06f9",
  storageBucket: "feedform-d06f9.appspot.com",
  messagingSenderId: "32232222252",
  appId: "1:32232222252:web:e4b5006336038cb4346b89",
  measurementId: "G-PRYGQVHN4Z",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }

  //Register new User
  async register(response) {
    let batch = app.firestore().batch();

    let proRef = app
      .firestore()
      .collection("users")
      .doc();

    batch.set(proRef, {
      ...response.profileObj,
    });

    return batch.commit();
  }

  //   addTask(project, selectedProject, task, setTask, setProject, taskDate) {
  //     const ProjectId = project || selectedProject;

  //     let collatedDate = "";

  //     if (ProjectId === "TODAY") {
  //       collatedDate = moment().format("DD/MM/YYYY");
  //     } else if (ProjectId === "NEXT__7") {
  //       collatedDate = moment()
  //         .add(7, "days")
  //         .format("DD/MM/YYYY");
  //     }

  //     return (
  //       task &&
  //       ProjectId &&
  //       app
  //         .firestore()
  //         .collection("Tasks")
  //         .add({
  //           archived: false,
  //           ProjectId,
  //           task,
  //           date: collatedDate || taskDate,
  //           userId: `${app.auth().currentUser.uid}`,
  //         })
  //         .then(() => {
  //           setTask("");
  //           setProject("");
  //         })
  //     );
  //   }
}

export default new Firebase();
