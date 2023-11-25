import Restaurant from "@/models/Restaurant";

it("Should say hello world!", () => {
  const person = new Restaurant("", "", "", "");

  expect(person.sayHello()).toBe("Hello world!");
});
