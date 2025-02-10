import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const corporateMembers = [
  {
    name: "科技创新有限公司",
    industry: "信息技术",
    description: "专注于人工智能和大数据解决方案的领先企业。",
    logo: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "绿色能源集团",
    industry: "新能源",
    description: "致力于可再生能源技术研发和应用的创新公司。",
    logo: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "未来教育科技",
    industry: "教育科技",
    description: "提供创新在线教育平台和解决方案的教育科技公司。",
    logo: "/placeholder.svg?height=64&width=64"
  },
  {
    name: "健康生活有限公司",
    industry: "医疗保健",
    description: "开发先进医疗设备和健康管理系统的医疗科技公司。",
    logo: "/placeholder.svg?height=64&width=64"
  },
]

export default function CorporateMembers() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">企业会员</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {corporateMembers.map((member, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="flex-row gap-4 items-center">
              <Image src={member.logo} alt={`${member.name} logo`} width={64} height={64} className="rounded-full" />
              <div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.industry}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

