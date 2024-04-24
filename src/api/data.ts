import { Employee, Patient, Report } from "./models";

export const localPatients: Patient[] = [
  {
    id: 0,
    name: "Morty Smith",
    taxId: "53008690076",
    birthDate: "1999-02-16", 
    summaryReport: "Jovem, bem intencionado e impressionável. Pode ser facilmente manipulado."
  },
  {
    id: 1,
    name: "Summer Smith",
    taxId: "Summer Smith",
    birthDate: "1997-12-02", 
    summaryReport: "Adolescente superficial que é obcecada em melhorar seu status social entre os colegas."
  },
  {
    id: 2,
    name: "Beth Smith",
    taxId: "40973485078",
    birthDate: "1970-05-15", 
    summaryReport: "Egoísta e bem humorada, alcoolátra e não recebe bem críticas."
  },
  {
    id: 3,
    name: "Rick Sanchez",
    taxId: "15703003059",
    birthDate: "1958-07-03", 
    summaryReport: "Cientista megagênio, alcoolátra, com comportamento nihilista que leva a preocupação da segurança de sua filha e netos."
  },
  {
    id: 4,
    name: "Jerry Smith",
    taxId: "96840117090",
    birthDate: "1967-04-22", 
    summaryReport: "Perdedor, pai como patético e marido deplorável."
  },
]

export const localEmployees: Employee[] = [
  {
    id: 0,
    name: "Helen Wong",
    taxId: "22103474082",
    birthDate: "1960-05-05"
  },
  {
    id: 1,
    name: "Hannibal Lecter",
    taxId: "65781189009",
    birthDate: "1950-01-12"
  }
]

export const localReports: Report[] = [
  {
    id: 0,
    title: "Análise preliminar Morty Smith",
    report: "Morty é um garoto tímido de que acompanha seu avô em todas as aventuras malucas que este propõe.\nEle adora o avô mas ao mesmo tempo acha que ele também deve ter alguns problemas.\nMorty é facilmente manipulável e tem uma vontade absurda de se provar, principalmente para o seu avô.",
    dateCreated: "2024-03-25",
    dateEdited: null,
    patientId: 0,
    employeeId: 0
  },
  {
    id: 1,
    title: "Análise introdutória Summer Smith",
    report: "Summer é a irmã mais velha de Morty Smith. Ela é uma garota obcecada por atenção e que quer desesperadamente ser notada pelas crianças populares da escola.\nEla despreza os pais, mas respeita o fato do avô, Rick Sanchez, ser o homem mais inteligente do universo.\nTem a síndrome da adolescente: acha que o mundo gira em torno dela e acha que sua vida é ruim em decorrência de outras pessoas, nunca por consequência de suas ações",
    dateCreated: "2024-03-19",
    dateEdited: "2024-03-22",
    patientId: 1,
    employeeId: 0
  },
  {
    id: 2,
    title: "Relatório Beth Smith",
    report: "Beth é a matriarca da família. Ela é uma cirurgiã de cavalos bem sucedida que está muito feliz que seu pai retornou depois de anos. Ela também tem sérias preocupações sobre a quantidade de tempo que Rick e Morty passam juntos e como isso afeta o desempenho de Morty na escola.",
    dateCreated: "2024-03-20",
    dateEdited: null,
    patientId: 2,
    employeeId: 0
  },
  {
    id: 3,
    title: "Relatório preocupante Rick Sanchez",
    report: "Rick é cientista, ateu e avô materno de sua família.  Ele bebe constantemente e tem uma arma de portais que usa para transportar a ele e seu neto, Morty Smith, para os mais variados universos e realidades.\nPara ele o problema com a bebida é óbvio, mas ele se recusa a buscar e fazer tratamento. Acha que é melhor do que qualquer um à sua volta e também não busca melhorar este comportamento.",
    dateCreated: "2024-03-21",
    dateEdited: null,
    patientId: 3,
    employeeId: 0
  },
  {
    id: 4,
    title: "Relatório Jerry Smith",
    report: "Jerry é o pai (recentemente desempregado) de Summer e Morty. Morty tem a maioria de seus traços de personalidade baseados no pai.\nEle é passivo agressivo e constantemente é ignorado pelos outros membros da família, incluindo sua própria esposa.",
    dateCreated: "2024-03-27",
    dateEdited: null,
    patientId: 4,
    employeeId: 0
  },
  {
    id: 5,
    title: "Relatório Morty Smith",
    report: "Morty é um jovem adolescente. Ele sofre com gagueiras constantes (mesmo quando está calmo) e sua voz constantemente desafina devido aos efeitos da puberdade. Morty é emocional, ingênuo, obediente e facilmente manipulado, especialmente por Rick, que também o usa como assistente de suas invenções. Morty sempre age de forma receosa, tentando arrumar coragem diante de seus adversários. Ele também se mostra ser sexualmente frustrado, por causa da dificuldade em se relacionar amorosamente com outras meninas e leva muito tempo para adquirir auto-estima.",
    dateCreated: "2024-03-28",
    dateEdited: null,
    patientId: 0,
    employeeId: 1
  },
  {
    id: 6,
    title: "Relatório Summer Smith",
    report: "A Summer tem alguns traços de personalidade de um típico adolescente americano. Ela deseja ser popular entre seus amigos, e acha que as travessuras de sua família são patéticas. Ela realmente se preocupa com eles, no entanto. Ela está muito ligada ao telefone e às mídias sociais, tirando vídeos do Snuffles quando ele se tornou super inteligente, e estremeceu ao pensar que Jerry se juntou ao Facebook.",
    dateCreated: "2024-03-28",
    dateEdited: null,
    patientId: 1,
    employeeId: 1
  },
  {
    id: 7,
    title: "Relatório Beth Smith",
    report: "Ela atualmente é empregada como cirurgiã veterinária especialista em equinos. Caracterizada por um complexo de superioridade e questões de abandono, Beth gradualmente entrou em conflito com o marido por suas contribuições para seu casamento, em parte devido à sua posição de nível mais baixo e impulsionada por seu pai e seus sentimentos de superioridade. Desde o seu divórcio, ela se concentrou em criar seus dois filhos",
    dateCreated: "2024-03-28",
    dateEdited: null,
    patientId: 2,
    employeeId: 1
  },
  {
    id: 8,
    title: "Relatório Rick Sanchez",
    report: "Rick é extremamente inteligente, tendo criado muitos dispositivos que nunca existiram na Terra, mas sua mente intelectual é constantemente comprometida por seu alcoolismo e sua própria visão pessoal do mundo. Rick fica entediado facilmente e não suporta monotonia. Ele não é escrupuloso ao usar violência ou matar outros seres para atingir seus objetivos. Rick chegou a demonstrar preocupação apenas com a vida de seus netos e seus amigos mais próximos. Rick também não gosta de receber ordens, constantemente desprezando figuras do poder e instituições, considerando a escola um desperdício inútil de tempo para pessoas estúpidas. Ele argumenta várias vezes que ele não acredita na existência de deus, mas em ocasiões em que ninguém pode ouvi-lo, ele se vira para ele, desafiando-o ou pedindo-lhe piedade.",
    dateCreated: "2024-03-28",
    dateEdited: null,
    patientId: 3,
    employeeId: 1
  },
  {
    id: 9,
    title: "Relatório Jerry Smith",
    report: "Jerry sempre tenta pensar no melhor interesse da família, mas sua tentativa de ser o patriarca da família pode muitas vezes ser equivocada por sua natureza egocêntrica. Isso causa um grande conflito com Rick, pois seu sogro claramente não tem respeito por ele.",
    dateCreated: "2024-03-28",
    dateEdited: null,
    patientId: 4,
    employeeId: 1
  },
]