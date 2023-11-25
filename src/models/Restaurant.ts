class Restaurant {
  private photo: string;
  private name: string;
  private address: string;
  private business_hours: string;

  constructor(
    photo: string,
    name: string,
    address: string,
    business_hours: string,
  ) {
    this.photo = photo;
    this.name = name;
    this.address = address;
    this.business_hours = business_hours;
  }

  //#region GETS
  getPhoto() {
    return this.photo;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  getBusinessHours() {
    return this.business_hours;
  }
  //#endregion

  //#region SETS
  setPhoto(photo: string) {
    this.photo = photo;
  }

  setName(name: string) {
    this.name = name;
  }

  setAdress(address: string) {
    this.address = address;
  }

  setBusinessHours(business_hours: string) {
    this.business_hours = business_hours;
  }
  //#endregion

  //#region METHODS
  sayHello() {
    return "Hello world!";
  }
  //#endregion
}

export default Restaurant;
