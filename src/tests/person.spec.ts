import Person from "@/models/person";

it("Should say hello world!", () => {
  const person = new Person();

  expect(person.sayHello()).toBe("Hello world!");
});
