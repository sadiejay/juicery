function HealthArea(name, img) {
  this.area = name;
  this.img = img;
  this.juices = [];
}

HealthArea.prototype.addJuices = function (juices) {
  juices.forEach((juice) => {
    if (juice.healthAreas.hasOwnProperty(this.area)) {
      this.juices.push(juice);
    }
  });
};

export default HealthArea;
