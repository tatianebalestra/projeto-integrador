import { Employee } from "@/api/models";
import EmployeeCard from "./employeeCard";
import EmployeeNotFound from "./employeeNotFound";

export default function EmployeeInfo({employee, id}: {employee: Employee | null, id: number}) {
  return (
    <div className="w-full">
    {employee ? <EmployeeCard employee={employee}/> : <EmployeeNotFound id={id}/>}
    </div>
  )
}