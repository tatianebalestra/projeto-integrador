import { findEmployeeById, findPatientById } from "@/api";
import { Report } from "@/api/models";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Reports({reports}: {reports: Report[]}) {


  return (
    <div className="w-full">
        <Card className="mx-auto">
  <CardHeader>
    <CardTitle><span className="font-bold">Relatórios:</span></CardTitle>
  </CardHeader>
  <CardContent>
  <Accordion type="single" collapsible>
      {
        reports.map((r) => {
          return (
            <AccordionItem value={r.title} key={r.id}>
            <AccordionTrigger><span className="font-bold">{r.title}</span></AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <div>
              <span className="font-bold pr-1">Relator(a):</span>
              <span>{findEmployeeById(r.employeeId)?.name}</span>
              </div>
              <div>
              <span className="font-bold pr-1">Paciente:</span>
              <span>{findPatientById(r.patientId)?.name}</span>
              </div>
              <div>
              <span className="font-bold pr-1">Data de criação:</span><span>{r.dateCreated}</span>
              </div>              
              {r.dateEdited && <div>
              <span className="font-bold pr-1">Última Edição:</span><span>{r.dateEdited}</span>
              </div>
              }
              <div>
              <span className="font-bold pr-1">Relatório:</span><span>{r.report}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
          )
        })
      }
    </Accordion> 
  </CardContent>
</Card>
    </div>
  )
}