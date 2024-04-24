import { employee, patients } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { localEmployees, localPatients, localReports } from "./data";
import { Employee, Patient, Report } from "./models";

export const findPatientById = (id: number): Patient | null => {
 return localPatients.find((p) => p.id == id) || null
}

export const getPatients = (): Patient[] => {
  return localPatients;
}

export const getReports = (): Report[] => {
  return localReports;
}

export const findEmployeeById = (id: number): Employee | null => {
  return localEmployees.find((p) => p.id == id) || null
}

export const getEmployees = (): Employee[] => {
  return localEmployees;
}

//  export const findPatientById = async (id: number): Patient | null => {
//    if(id < 0) return null;
//    const res = await db.select().from(patients).where(eq(patients.id, id)).limit(1)

//    return res.length == 0 ? null : res[1];
//  }

// export const findEmployeeById = async (id: number): Promise<Employee | null> => {
//   if(id < 0) return null;
//   const res = await db.select().from(employee).where(eq(employee.id, id)).limit(1)
//   return res.length == 0 ? null : res[1];
// } 

// export const findAllReports = async (): Promise<Report[]> => {
//   return [];
// }


// * Patients from db
// TODO show patients
// TODO update patient
// TODO remove patient -> CASCADE table check how todo

// * Employees from db
// TODO show employees
// TODO update employee
// TODO remove employee -> CASCADE table check how todo

// * Report from db
// TODO find single report
// TODO update report
// TODO remove report