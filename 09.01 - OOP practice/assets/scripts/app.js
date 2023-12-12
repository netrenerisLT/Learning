class Tooltip {}

class ProjectItem {
  //STEP 2. transfer item's id to this class
  constructor(prjItemsIteratorId, updateProjectListFunction) {
    this.prjItemsIteratorId = prjItemsIteratorId;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectTypeSwitchButton();
  }

  connectMoreInfoButton() {}

  connectTypeSwitchButton() {
    //STEP 3. select button with the received id
    const projectItemElement = document.getElementById(this.prjItemsIteratorId);
    const typeSwitchButton = projectItemElement.querySelector(
      "button:last-of-type"
    );
    typeSwitchButton.addEventListener("click", this.updateProjectListHandler);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    //STEP 1. find items of different types and return ther id
    this.type = type;
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItemsIterator of projectItems) {
      this.projects.push(
        new ProjectItem(prjItemsIterator.id, this.switchProject.bind(this))
      );
    }
  }
  //   STEP 5 we can call that on App class
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject() {
    console.log(this);
  }

  switchProject(itemId) {
    //STEP 4. remove item from projects array and switch it to the other list
    this.switchHandler(this.projects.find((p) => p.id === itemId)); //STEP 4.2 pass item to switchHandlerFunction
    this.projects = this.projects.filter((p) => p.id !== itemId); //STEP 4.1 filter out item from projects array, which not returns id not equal to searched id
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    // STEP 5.1 we create instaces with function
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
