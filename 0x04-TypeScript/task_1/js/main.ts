interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher{
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
  return `${firstName[0]}.${lastName}`;
}

interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  (firstName: string, lastName: string): classInterface;
}

class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string): classInterface {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = (): string => 'Currently working';
  displayName = (): string => this.firstName;
}
