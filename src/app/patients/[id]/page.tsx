import { findPatientById } from "@/api";
import PatientInfo from "./patientInfo";

export default async function PatientPage({params}: any) {


  return (
    <div className="h-full w-full mx-auto max-w-screen-lg content-center items-center">
      <PatientInfo patient={findPatientById(params.id)} id={params.id}/>
    </div>
  );
}