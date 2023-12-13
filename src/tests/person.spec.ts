import Person from "@/models/Person";

it("Should say hello world!", () => {
  expect(Person.sayHello()).toBe("Hello world!");
});
