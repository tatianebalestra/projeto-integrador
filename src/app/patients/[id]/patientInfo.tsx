import { Patient } from "@/api/models";
import PatientCard from "./patientCard";
import PatientNotFound from "./patientNotFound";

export default function PatientInfo({patient, id}: {patient: Patient | null, id: number}) {
  return (
    <div className="w-full">
    {patient ? <PatientCard patient={patient}/> : <PatientNotFound id={id}/>}
    </div>
  )
}