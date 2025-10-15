import React from "react";

const Concept2 = () => {
  const concepts = [
    {
      title: "Class and Object",
      description: (
        <>
          <p>
            Class: A class is a blueprint for creating objects. It defines a set
            of attributes and methods that the created objects can use. Classes
            encapsulate data and functions that operate on the data.
          </p>
          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def start_engine(self):
        print(f"The {self.brand} {self.model}'s engine has started.")

my_car = Car("Toyota", "Corolla")
my_car.start_engine()`}
              </code>
            </pre>
          </div>
          <p>
            Object: An object is an instance of a class. When a class is
            defined, no memory is allocated until an object of that class is
            created.
          </p>
          <p>
            In Python, when you create an instance of a class, like my_car =
            Car("Toyota", "Corolla"), the __init__ method is called with the
            newly created object passed as the first argument (self). This is
            equivalent to explicitly passing the object, as in Car(my_car,
            "Toyota", "Corolla"). The self parameter refers to the instance
            itself, allowing the __init__ method to initialize the instance's
            attributes.
          </p>
          <br />
          <ul className="list-decimal ml-6">
            <li>
              <h3 className="text-lg font-semibold">
                1.1 Object Creation and Initialization
              </h3>
              <p>
                In Python, the <code>__init__</code> method is not responsible
                for allocating memory for the object itself. The memory
                allocation for a new object is handled by the Python interpreter
                before the <code>__init__</code> method is called. Here's a
                breakdown of the process:
              </p>
              <ul className="list-disc ml-6">
                <li>
                  Memory Allocation: When a new instance of a class is created,
                  Python first allocates memory for the new object. This process
                  involves setting up space in memory to hold the object,
                  including its attributes.
                </li>
                <br />
                <li>
                  Object Initialization (<code>__init__</code>): After memory is
                  allocated, Python calls the <code>__init__</code> method to
                  initialize the object. This method can be used to set the
                  initial state of the object, such as assigning values to its
                  attributes. The <code>__init__</code> method receives the
                  newly created object as its first argument (self), along with
                  any additional arguments passed during the object's creation.
                </li>
                <br />
                <li>
                  Using the Object: Once the object is initialized, it can be
                  used according to the methods and attributes defined in its
                  class.
                </li>
              </ul>
              <br />
              <p>
                It's important to note that the <code>__init__</code> method is
                not the constructor in the traditional sense, as it does not
                create the object or allocate memory. In Python, the actual
                constructor is the <code>__new__</code> method, which is called
                before <code>__init__</code> and is responsible for creating the
                new instance. However, <code>__new__</code> is usually only
                overridden in special cases, such as when creating instances of
                immutable types like integers or strings.
              </p>
              <div className="bg-gray-100 p-4 my-2">
                <pre>
                  <code>
                    {`class MyClass:
    def __new__(cls, *args, **kwargs):
        print("Creating instance (allocating memory)")
        return super().__new__(cls)

    def __init__(self, value):
        print("Initializing instance")
        self.value = value

obj = MyClass(10)`}
                  </code>
                </pre>
              </div>
              <p>Output:</p>
              <div className="bg-gray-100 p-4 my-2">
                <pre>
                  <code>
                    {`Creating instance (allocating memory)
Initializing instance`}
                  </code>
                </pre>
              </div>
            </li>
            <li>
              <h3 className="text-lg font-semibold">
                1.2 Default Initialization
              </h3>
              <p>
                If you don't define an <code>__init__</code> method in a class,
                Python will use a default <code>__init__</code> method provided
                by the base object class. This default method doesn't perform
                any special initialization—it simply creates the instance and
                returns it without setting any attributes.
              </p>
              <div className="bg-gray-100 p-4 my-2">
                <pre>
                  <code>
                    {`class MyClass:
    pass

obj = MyClass()
print(obj)`}
                  </code>
                </pre>
              </div>
              <p>Output:</p>
              <div className="bg-gray-100 p-4 my-2">
                <pre>
                  <code>{`<__main__.MyClass object at 0x...>`}</code>
                </pre>
              </div>
              <p>
                In this case, the instance <code>obj</code> is created, but
                there are no attributes to initialize because we didn't define
                any in <code>MyClass</code>. The object will be created without
                any additional setup.
              </p>
              <p>
                However, if your class needs to initialize specific attributes
                when an object is created, you must define an{" "}
                <code>__init__</code> method to set those attributes. Otherwise,
                the object will not have the necessary data members, which could
                lead to errors when you try to use them later.
              </p>
              <div className="bg-gray-100 p-4 my-2">
                <pre>
                  <code>
                    {`class MyClass:
    def __init__(self, value):
        self.value = value

obj = MyClass(10)
print(obj.value)`}
                  </code>
                </pre>
              </div>
              <p>Output:</p>
              <div className="bg-gray-100 p-4 my-2">
                <pre>
                  <code>{`10`}</code>
                </pre>
              </div>
              <p>
                In summary, the <code>__init__</code> method is not mandatory,
                but it is essential if you want to perform any initialization of
                the object's attributes. If you don't provide it, Python will
                use the default <code>__init__</code> method, which does nothing
                other than create the instance.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Encapsulation",
      description: (
        <>
          <p>
            Encapsulation is the concept of wrapping the data (attributes) and
            methods (functions) into a single unit called a class. It also
            restricts direct access to some of the object's components, which is
            a means of preventing accidental interference and misuse of the
            data.
          </p>
          <p>
            Private Attributes and Methods: In Python, we use an underscore _
            prefix to indicate that an attribute or method is intended to be
            private.
          </p>
          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class Car:
    def __init__(self, brand, model):
        self._brand = brand  # private attribute
        self._model = model
    
    def start_engine(self):
        print(f"The {self._brand} {self._model}'s engine has started.")`}
              </code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "Inheritance",
      description: (
        <>
          <p>
            Inheritance is a way to create a new class from an existing class.
            The new class, called the child class or subclass, inherits
            attributes and methods from the parent class or superclass.
          </p>
          <p>Single Inheritance: Inherits from one base class.</p>
          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class ElectricCar(Car):
    def __init__(self, brand, model, battery_capacity):
        super().__init__(brand, model)
        self.battery_capacity = battery_capacity
    
    def charge_battery(self):
        print(f"The {self.brand} {self.model}'s battery is charging.")`}
              </code>
            </pre>
          </div>
          <p>
            In Python's inheritance model, super().__init__(brand, model) is
            used to call the __init__ method of the parent class from within a
            subclass. This ensures that the parent class's initialization logic
            is executed, allowing the subclass to extend or modify it while
            preserving the setup provided by the parent class.
          </p>
          <p>Multiple Inheritance: Inherits from multiple base classes.</p>
          <p>
            Here's why it's called: <br />
            <b>Initialization of Parent Class Attributes: </b> <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; By calling super().__init__(brand, model),
            you ensure that the attributes and initialization logic defined in
            the parent class are applied to the subclass instance. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;This avoids code duplication and maintains a
            consistent initialization process.
            <br />
            <b>Inheritance Hierarchy Maintenance:</b> <br />{" "}
            &nbsp;&nbsp;&nbsp;&nbsp; If your subclass relies on or extends
            functionality provided by the parent class, invoking super() helps
            maintain a clear and manageable inheritance hierarchy, allowing for
            easier updates and modifications in the future.
          </p>

          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                <p>
                  # Creating an instance of ElectricCar <br />
                  my_electric_car = ElectricCar("Tesla", "Model S", 100) <br />
                  # Call methods
                  <br />
                  my_electric_car.start_engine()
                  <br />
                  my_electric_car.charge_battery()
                  <br />
                </p>
                <p className="bg-green-100 p-4 my-2">
                  {" "}
                  Expected Outputs: <br />
                  When you run the code above, the outputs will be: <br />
                  The Tesla Model S's engine has started.
                  <br />
                  The Tesla Model S's battery is charging.{" "}
                </p>
              </code>
            </pre>
          </div>
          <p>
            {" "}
            <b>3.1 Multiple Inheritence </b>
          </p>
          <p>
            When a class is derived from more than one base class it is called
            multiple Inheritance. The derived class inherits all the features of
            the base case.
          </p>
          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class GPSMixin:
    def get_location(self):
        print("Getting current location...")

class SmartCar(ElectricCar, GPSMixin):
    pass`}
              </code>
            </pre>
          </div>
          <p>
            {" "}
            <b>3.2 Method Resolution Order (MRO)</b>{" "}
          </p>
          <p>
            In Python, the Method Resolution Order (MRO) is crucial in multiple
            inheritance scenarios. It determines the order in which base classes
            are searched when calling a method on an instance. MRO helps ensure
            a consistent and predictable method lookup order, especially in
            complex class hierarchies.
            <br />
            Key Concepts <br />
            <b>MRO Definition:</b>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The MRO is the order in which
            classes are searched when a method is called on an instance.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python uses the C3 linearization
            algorithm to compute the MRO, which combines depth-first and
            breadth-first approaches to ensure a consistent and well-defined
            order.
            <br /> <b>C3 Linearization: </b>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python uses C3 linearization to
            compute the MRO, which considers the order of base classes and
            ensures that the method resolution follows a specific path.
            <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This algorithm handles
            multiple inheritance by creating a linear hierarchy that maintains
            the order of base classes and respects their relationships.
            <br />
            <b>Method Resolution Order: </b>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The MRO is determined for each
            class and can be viewed using the __mro__ attribute or the mro()
            method of a class.
          </p>
          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class A:
                      def method(self):
                          print("Method in class A")

                  class B(A):
                      def method(self):
                          print("Method in class B")

                  class C(A):
                      def method(self):
                          print("Method in class C")

                  class D(B, C):
                      pass

                  # Create an instance of D
                  d = D()

                  # Call method
                  d.method()`}
              </code>
            </pre>
          </div>
          <br />
          <p>
            {" "}
            <b>MRO Calculation:</b> <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For class D, the MRO is
            calculated as follows: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Start with the class D and its
            immediate base classes B and C.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Combine the MRO of B and C with
            D itself.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The MRO of B is [B, A, object].
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The MRO of C is [C, A, object].
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Merge these lists to form the
            MRO for D.
            <br />{" "}
          </p>

          <div className="bg-green-100 p-4 my-2">
            <pre>
              <code>
                {`
                    print(D.__mro__)
                    When d.method() is called, Python looks up the method in the following order:
                        D (class of the instance)
                        B (first base class listed in the MRO)
                        C (next base class)
                        A (last base class)
                        object (base class for all new-style classes)

                    Output :
                    (<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)
                    Since B appears before C in the MRO, the method() from class B is called. The output will be:
                    Method in class B
                `}
              </code>
            </pre>
          </div>
        </>
      ),
    },
    {
      title: "Polymorphism",
      description: (
        <>
          <p>
            The word "polymorphism" means "many forms", and in programming it
            refers to methods/functions/operators with the same name that can be
            executed on many objects or classes.
          </p>{" "}
          <br />
          <p>
            Polymorphism is a feature in programming that allows different
            classes to be used interchangeably. It means that even if different
            objects belong to different classes, they can be used in the same
            way if they share a common method or interface.
            <br />
            <br />
            For example, if different classes like Dog, Cat, and Bird all have a
            method named speak(), you can call speak() on an object of any of
            these classes, and it will work, even though each class has its own
            version of speak(). This makes it easy to write code that works with
            different types of objects in a flexible way.
            <br />
            In simpler terms, polymorphism lets you use different things in the
            same way.
          </p>
          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class Dog:
    def speak(self):
        return "Woof!"

class Cat:
    def speak(self):
        return "Meow!"

class Bird:
    def speak(self):
        return "Chirp!"

# Function that takes an animal and calls its speak method
def make_animal_speak(animal):
    print(animal.speak())

# Create instances of different classes
dog = Dog()
cat = Cat()
bird = Bird()

# Call the function with different objects
make_animal_speak(dog)  # Output: Woof!
make_animal_speak(cat)  # Output: Meow!
make_animal_speak(bird) # Output: Chirp!`}
              </code>
            </pre>
          </div>
          <br />
          <p>
            <b>Method Overriding:</b> A child class can provide a specific
            implementation of a method that is already defined in its parent
            class.
          </p>
          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class Car:
    def start_engine(self):
        print("The car's engine has started.")

class ElectricCar(Car):
    def start_engine(self):
        print("The electric car's engine is silent.")

my_car = ElectricCar()
my_car.start_engine()  # Output: The electric car's engine is silent.`}
              </code>
            </pre>
          </div>
          <p>
            <b>Method Overloading:</b> Python does not support method
            overloading in the traditional sense, but we can achieve similar
            behavior using default arguments or variable-length arguments.
          </p>
          <div className="flex">
            {/* Math Class Example */}
            <div className="bg-gray-100 p-4 my-2 w-1/2">
              <pre>
                <code>
                  {`class Math:
    def add(self, a, b=0, c=0):
        return a + b + c

# Creating an instance of Math
math_instance = Math()

# Calling add method with different numbers of arguments
print(math_instance.add(1))        # Output: 1
print(math_instance.add(1, 2))     # Output: 3
print(math_instance.add(1, 2, 3))  # Output: 6`}
                </code>
              </pre>
            </div>

            {/* Calculator Class Example */}
            <div className="bg-gray-100 p-4 my-2 w-1/2">
              <pre>
                <code>
                  {`class Calculator:
    def add(self, *args):
        if len(args) == 2:
            return args[0] + args[1]
        elif len(args) == 3:
            return args[0] + args[1] + args[2]
        else:
            return "Invalid number of arguments"

# Creating an instance of Calculator
calc = Calculator()

# Calling add method with different numbers of arguments
print(calc.add(1, 2))        # Output: 3
print(calc.add(1, 2, 3))     # Output: 6
print(calc.add(1))           # Output: Invalid number of arguments`}
                </code>
              </pre>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Abstraction",
      description: (
        <>
          <p>
            Abstraction is the process of hiding the complex implementation
            details and showing only the essential features of an object. It is
            achieved using abstract classes and interfaces in Python.
          </p>
          <p>
            Abstract Classes: A class that cannot be instantiated and is often
            used to define a common interface for its subclasses.
          </p>
          <br />
          <p>
            In simple terms, an interface in programming is like a contract or a
            blueprint that defines a set of methods that a class must implement.
            It doesn't contain the actual code for these methods; instead, it
            just specifies what methods should be present.
            <br />
            Think of it like a list of things a class should be able to do, but
            without saying how to do them. The actual implementation (how the
            methods work) is left up to the class that implements the interface.
            <br />
            <br />
            In Python, we don't have interfaces in the same way as in some other
            programming languages, but we can use abstract base classes (ABCs)
            to achieve a similar effect. ABCs can define methods that must be
            implemented by any subclass. <br />
            Python's abc module allows you to define abstract base classes. An
            abstract base class can define a set of methods that must be
            implemented by any subclass.
            <br />
          </p>

          <div className="flex space-x-4">
            <div className="flex-1 bg-gray-100 p-4 my-2">
              <pre>
                <code>
                  {`from abc import ABC, abstractmethod

class DynamicInterface(ABC):
    @abstractmethod
    def method(self):
        pass

class ImplementationA(DynamicInterface):
    def method(self):
        return "Implementation A"

class ImplementationB(DynamicInterface):
    def method(self):
        return "Implementation B"

def use_dynamic_interface(impl: DynamicInterface):
    print(impl.method())

impl_a = ImplementationA()
impl_b = ImplementationB()

use_dynamic_interface(impl_a)  # Output: Implementation A
use_dynamic_interface(impl_b)  # Output: Implementation B`}
                </code>
              </pre>
            </div>
            <div className="flex-1 bg-gray-100 p-4 my-2">
              <pre>
                <code>
                  {`from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"`}
                </code>
              </pre>
            </div>
          </div>
          <br />
          <p>
          <b>Polymorphism </b> allows objects of different types to be treated as objects of a common superclass, enabling flexibility and reusability in code.<br />
          <b>Dynamic Interfaces</b> provide a way to define a contract (a set of methods) that different classes must follow, often using abstract base classes or duck typing in Python.
          </p>
          <br />
          <p> In both polymorphism and dynamic interfaces, subclasses must implement all methods defined by the superclass or abstract base class.</p> <br />
          <p> <b>dynamic interfaces define how polymorphism can be achieved by specifying the methods that must be implemented, while polymorphism allows objects of different classes to be used interchangeably based on the defined interface.</b></p>
        </>
      ),
    },
    {
      title: "Composition",
      description: (
        <>
          <p>
            Composition is a concept where a class is composed of one or more
            objects from other classes. This is a "has-a" relationship.
          </p>

          <div className="bg-gray-100 p-4 my-2">
            <pre>
              <code>
                {`class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower

class Car:
    def __init__(self, brand, model, engine):
        self.brand = brand
        self.model = model
        self.engine = engine

    def start_engine(self):
        print(f"The {self.brand} {self.model} with {self.engine.horsepower}HP engine has started.")

engine = Engine(150)
my_car = Car("Toyota", "Corolla", engine)
my_car.start_engine()`}
              </code>
            </pre>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Object-Oriented Programming Concepts in Python
      </h1>
      <ul className="list-decimal ml-6">
        {concepts.map((concept, index) => (
          <li
            key={index}
            className={`p-4 mb-4 ${
              index % 2 === 0 ? "bg-yellow-100" : "bg-orange-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{concept.title}</h2>
            {concept.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Concept2;
