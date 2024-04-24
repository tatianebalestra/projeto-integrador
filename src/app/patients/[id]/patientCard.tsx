import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Patient } from "@/api/models";

export default function PatientCard({patient}: {patient: Patient}) {

  return (
  <Card className="w-fit mx-auto">
  <CardHeader>
    <CardTitle><span className="font-bold">Nome:</span> {patient.name}</CardTitle>
    <CardDescription><span className="font-bold">CPF:</span> {patient.taxId}</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col">
    <span className="font-bold">Descrição:</span>
    <span>{patient.summaryReport}</span>
  </CardContent>
  <CardFooter>
    <span className="font-bold pr-1">Data de nascimento:</span> {patient.birthDate}
  </CardFooter>
</Card>
  );
}