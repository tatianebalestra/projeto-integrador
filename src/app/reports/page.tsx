import { findPatientById, getReports } from "@/api";
import Reports from "./reports";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function ReportsPage({params}: any) {


  return (
    <div className="h-full mx-auto max-w-screen-lg flex place-items-center">
      <Reports reports={getReports()}/>
    </div>
  );
}