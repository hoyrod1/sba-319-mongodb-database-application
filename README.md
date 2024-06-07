This application can create, read, update and delete Trainers, Training Packages and Members
In the .env file store your connection credentials to connect to MongoDB and set your PORT number

The available routes for the Trainers;
The post("/", trainerCtrl.createTrainer) - This route will allow you to create a new Trainer. All fields are required and must be of text value.
get("/", trainerCtrl.getTrainers) - This route populate all the Trainers.
get("/:id", trainerCtrl.getTrainer) - This route populate a individual Trainers.
put("/:id", trainerCtrl.updateTrainer) - This route updates a individual Trainers.
delete("/:id", trainerCtrl.deleteTrainer) - This route deletes a individual Trainers.

The available routes for the TrainingPackage;
The post("/", trainingPackageCtrl.createTrainingPackage) - This route will allow you to create a new Training Package. All fields are required and must be of text value.
get("/", trainingPackageCtrl.getTrainingPackages) - This route populate all the Training Package.
get("/:id", trainingPackageCtrl.getTrainingPackage) - This route populate a individual Training Package.
put("/:id", trainingPackageCtrl.updateTrainingPackage) - This route updates a individual Training Package.
delete("/:id", trainingPackageCtrl.deleteTrainingPackage) - This route deletes a individual Training Package.

The available routes for the Members;
The post("/", memberCtrl.createMember) - This route will allow you to create a new Member. All fields are required and must be of text value and a date value will automatically be set when a Member is created.
get("/", memberCtrl.getMembers) - This route populate all Members.
get("/:id", memberCtrl.getMember) - This route populate a individual Member.
put("/:id", memberCtrl.updateMember) - This route updates a individual Member.
delete("/:id", memberCtrl.deleteMember) - This route deletes a individual Member.
