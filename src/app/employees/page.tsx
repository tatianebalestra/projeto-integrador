import { getEmployees } from "@/api";
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default async function EmployeesPage() {

  return (
    <div className="h-full w-full mx-auto max-w-screen-lg content-center">
    <Card>
  <CardHeader>
    <CardTitle>Funcionários</CardTitle>
  </CardHeader>
  <CardContent>
      {
      getEmployees().map((e) => {
        return (
          <div className="flex flex-row justify-between py-2" key={e.id}>
        <div>Nome {e.name}</div>
        <Link href={'/employees/' + e.id}>Detalhes</Link>
        </div>
        )
      })
    }
  </CardContent>
</Card>
</div>
  );
}