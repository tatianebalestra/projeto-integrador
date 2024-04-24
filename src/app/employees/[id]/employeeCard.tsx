import { Employee } from "@/api/models";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function EmployeeCard({employee}: {employee: Employee}) {

  return (
  <Card className="w-fit mx-auto">
  <CardHeader>
    <CardTitle><span className="font-bold">Nome:</span> {employee.name}</CardTitle>
    <CardDescription><span className="font-bold">CPF:</span> {employee.taxId}</CardDescription>
  </CardHeader>
  <CardFooter>
    <span className="font-bold pr-1">Data de nascimento:</span> {employee.birthDate}
  </CardFooter>
</Card>
  );
}