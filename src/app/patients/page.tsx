import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getPatients } from '@/api';

export default async function PatientsPage() {
  return (
    <div className="h-full w-full mx-auto max-w-screen-lg content-center items-center">
    <Card>
  <CardHeader>
    <CardTitle>Pacientes</CardTitle>
  </CardHeader>
  <CardContent>
      {
      getPatients().map((e) => {
        return (
          <div className="flex flex-row justify-between py-2" key={e.id}>
        <div>Nome {e.name}</div>
        <Link href={'/patients/' + e.id}>Detalhes</Link>
        </div>
        )
      })
    }
  </CardContent>
</Card>
</div>
  );
}