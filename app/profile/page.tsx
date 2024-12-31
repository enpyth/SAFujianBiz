'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent,TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Profile() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "张三",
    phone: "123-456-7890",
    email: "zhangsan@example.com"
  })

  const [services, setServices] = useState([
    { id: 1, name: "商业咨询" },
    { id: 2, name: "法律援助" },
    { id: 3, name: "市场推广" }
  ])

  const [activities, setActivities] = useState([
    { id: 1, name: "2023年度商业论坛", date: "2023-11-15" },
    { id: 2, name: "新年招商会", date: "2024-01-05" }
  ])

  const [coupons, setCoupons] = useState([
    { id: 1, title: "新会员优惠", status: "未使用" },
    { id: 2, title: "周年庆优惠", status: "已使用" }
  ])

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">我的账户</h1>
      <Tabs defaultValue="info" className="w-full">
        <TabsList>
          <TabsTrigger value="info">个人信息</TabsTrigger>
          <TabsTrigger value="services">关注服务</TabsTrigger>
          <TabsTrigger value="activities">历史活动</TabsTrigger>
          <TabsTrigger value="coupons">优惠券管理</TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">姓名</Label>
              <Input id="name" value={personalInfo.name} onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})} />
            </div>
            <div>
              <Label htmlFor="phone">联系方式</Label>
              <Input id="phone" value={personalInfo.phone} onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})} />
            </div>
            <div>
              <Label htmlFor="email">邮箱</Label>
              <Input id="email" value={personalInfo.email} onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})} />
            </div>
            <Button type="submit">保存修改</Button>
          </form>
        </TabsContent>
        <TabsContent value="services">
          <ul className="space-y-2">
            {services.map(service => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="activities">
          <ul className="space-y-2">
            {activities.map(activity => (
              <li key={activity.id}>{activity.date} - {activity.name}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="coupons">
          <ul className="space-y-2">
            {coupons.map(coupon => (
              <li key={coupon.id}>{coupon.title} - {coupon.status}</li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  )
}

