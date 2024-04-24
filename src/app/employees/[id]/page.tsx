import { findEmployeeById } from "@/api";
import EmployeeInfo from "./employeeInfo";

export default async function PatientPage({params}: any) {


  return (
    <div className="h-full w-full mx-auto max-w-screen-lg items-center">
      <EmployeeInfo employee={findEmployeeById(params.id)} id={params.id}/>
    </div>
  );
}