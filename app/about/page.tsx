import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { directors } from '../data/homeData'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">商会简介</h1>
      <Tabs defaultValue="intro" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="intro">简介</TabsTrigger>
          <TabsTrigger value="charter">章程</TabsTrigger>
          <TabsTrigger value="directors">理事</TabsTrigger>
        </TabsList>
        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>关于我们</CardTitle>
              <CardDescription>了解我们的使命和价值观</CardDescription>
            </CardHeader>
            <CardContent>
              <p>我们的商会成立于[年份]，致力于促进[地区/行业]的商业发展和合作。作为一个非营利组织，我们为会员提供各种资源和机会，帮助他们在竞争激烈的商业环境中取得成功。</p>
              <p className="mt-4">我们的使命是：</p>
              <ul className="list-disc list-inside mt-2">
                <li>促进会员之间的交流与合作</li>
                <li>提供商业信息和市场洞察</li>
                <li>组织高质量的商业活动和培训</li>
                <li>代表会员利益，与政府和其他组织沟通</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="charter">
          <Card>
            <CardHeader>
              <CardTitle>商会章程</CardTitle>
              <CardDescription>我们的组织结构和运作方式</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">第一章：总则</h3>
              <p>本商会是由[地区/行业]的企业自愿组成的非营利性社会团体。</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">第二章：会员</h3>
              <p>凡认同本商会章程的企业和个人，均可申请成为会员。</p>
              <h3 className="text-lg font-semibold mt-4 mb-2">第三章：组织机构</h3>
              <p>本商会设会员大会、理事会、监事会和秘书处。</p>
              {/* Add more sections as needed */}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="directors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((director, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image src={director.image} alt={director.name} width={100} height={100} className="rounded-full mx-auto" />
                  <CardTitle className="text-center mt-4">{director.name}</CardTitle>
                  <CardDescription className="text-center">{director.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{director.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

