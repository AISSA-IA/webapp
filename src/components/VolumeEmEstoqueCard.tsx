import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VolumeEmEstoqueCardProps {
  valor: string;
}

export function VolumeEmEstoqueCard({ valor }: VolumeEmEstoqueCardProps) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Volume em Estoque</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-gray-500">{valor}</p>
      </CardContent>
    </Card>
  )
}
