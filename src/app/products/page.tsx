import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { ReceitaEmRiscoCard } from "@/components/ReceitaEmRiscoCard"
import { VolumeEmEstoqueCard } from "@/components/VolumeEmEstoqueCard"
import { GraficoInteractive } from "@/components/grafico-interactive"
import { TableProducts } from "@/components/dataTableProducts"
 

export default function Page() {

   // Dados simulados
   const receitaEmRisco = "R$679.744,13";
   const volumeEmEstoque = "R$94.070,00";
 
   const data = [
     { date: '01/Jan', receita: 5000 },
     { date: '05/Jan', receita: 8000 },
     { date: '10/Jan', receita: 6500 },
     { date: '15/Jan', receita: 12000 },
     { date: '20/Jan', receita: 9000 },
     { date: '25/Jan', receita: 14000 },
     { date: '30/Jan', receita: 11000 },
   ];
 
   const produtos = [
     { nome: 'Alça corda Beatnik', vendas: 12, total: 'R$1.968,00', risco: 'R$0,00' },
     { nome: 'Alça Fina Beatnik - Stone', vendas: 10, total: 'R$1.390,00', risco: 'R$1.109,22' },
     { nome: 'Blazer BT100 em Couro', vendas: 0, total: 'R$0,00', risco: 'R$0,00' },
     { nome: 'Bolsa BH001 - Stone', vendas: 8, total: 'R$4.578,00', risco: 'R$0,00' },
     { nome: 'Bolsa BH002 - Mini Stone', vendas: 15, total: 'R$7.765,00', risco: 'R$5.094,00' },
   ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Beatnik & Sons
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Produtos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 px-4 pt-0">
          {/* Grid */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {/* Exibir no Mobile */}
            <div className="block md:hidden">
              <div className="pb-2">
                <ReceitaEmRiscoCard valor={receitaEmRisco} />
              </div>
              <div>
                <VolumeEmEstoqueCard valor={volumeEmEstoque} />
              </div>          
            </div> 
          </div>
          {/* Exibir no Desktop */}
          <div className="hidden md:block">
            <GraficoInteractive />
          </div>

          {/* Tabela dos produtos */}
          <div className="">
            <Card>
              <TableProducts />
            </Card>
            
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
