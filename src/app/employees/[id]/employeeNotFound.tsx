export default function EmployeeNotFound({id}: {id: number}) {
  return (
    <div className="mx-auto text-center text-3xl text-red-500">Funcionário de id:{id} não foi encontrado</div>
  )
}