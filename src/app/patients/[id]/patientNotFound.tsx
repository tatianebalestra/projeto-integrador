export default function PatientNotFound({id}: {id: number}) {
  return (
    <div className="mx-auto text-center text-3xl text-red-500">Paciente de id:{id} não foi encontrado</div>
  )
}