// STEP 6 select list
class DOMHelper {
  // STEP 8.2 clean memory leak after the switch
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Tooltip {}

class ProjectItem {
  //STEP 2. transfer item's id to this class
  constructor(prjItemsIteratorId, updateProjectListFunction, type) {
    this.prjItemsIteratorId = prjItemsIteratorId;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectTypeSwitchButton(type);
  }

  connectMoreInfoButton() {}

  connectTypeSwitchButton(type) {
    //STEP 3. select button with the received id
    const projectItemElement = document.getElementById(this.prjItemsIteratorId);
    let typeSwitchButton = projectItemElement.querySelector(
      "button:last-of-type"
    );

    // STEP 9 update buttons text
    typeSwitchButton = DOMHelper.clearEventListeners(typeSwitchButton);
    typeSwitchButton.textContent = type === "active" ? "Finish" : "Activate";

    typeSwitchButton.addEventListener(
      "click",
      this.updateProjectListHandler.bind(null, this.prjItemsIteratorId)
    );
  }
  // STEP 8.1 update
  update(updateProjectListFunction, type) {
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectTypeSwitchButton(type);
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
        new ProjectItem(
          prjItemsIterator.id,
          this.switchProject.bind(this),
          this.type
        )
      );
    }
  }
  //   STEP 5 we can call that on App class
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  //   STEP 7. move items to different list
  addProject(project) {
    this.projects.push(project);
    console.log(this);
    DOMHelper.moveElement(
      project.prjItemsIteratorId,
      `#${this.type}-projects ul`
    );
    //STEP 8 update switchandler when the item moved to different list
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(itemId) {
    //STEP 4. remove item from projects array and switch it to the other list
    this.switchHandler(
      this.projects.find((p) => p.prjItemsIteratorId === itemId)
    ); //STEP 4.2 pass item to switchHandlerFunction
    this.projects = this.projects.filter(
      (p) => p.prjItemsIteratorId !== itemId
    ); //STEP 4.1 filter out item from projects array, which not returns id not equal to searched id
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
