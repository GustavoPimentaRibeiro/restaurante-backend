class Product {
  private photo: string;
  private name: string;
  private price: number;
  private category: string;

  constructor(photo: string, name: string, price: number, category: string) {
    this.photo = photo;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  //#region GETS
  getPhoto() {
    return this.photo;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getCategory() {
    return this.category;
  }
  //#endregion

  //#region SETS
  setPhoto(photo: string) {
    this.photo = photo;
  }

  setName(name: string) {
    this.name = name;
  }

  setPrice(price: number) {
    this.price = price;
  }

  setCategory(category: string) {
    this.category = category;
  }
  //#endregion

  //#region METHODS
  //#endregion
}

export default Product;
