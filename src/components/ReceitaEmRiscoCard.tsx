import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ReceitaEmRiscoCardProps {
  valor: string;
}

export function ReceitaEmRiscoCard({ valor }: ReceitaEmRiscoCardProps) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Receita em Risco</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-500">{valor}</p>
      </CardContent>
    </Card>
  )
}
