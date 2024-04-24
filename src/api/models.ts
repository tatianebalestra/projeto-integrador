interface Person {
  id: number,
  name: string,
  taxId: string,
  birthDate: string 
}

export type Employee = Partial<Person>;

export interface  Patient extends Person {
  summaryReport: string
};

export interface Report {
  id: number,
  title: string,
  report: string,
  dateCreated: string,
  dateEdited: string | null,
  patientId: number,
  employeeId: number
}