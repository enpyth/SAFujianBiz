'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Register() {
  const [memberType, setMemberType] = useState('personal')

  return (
    <div className="container mx-auto px-6 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">会员注册</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup defaultValue="personal" onValueChange={setMemberType} className="mb-6">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="personal" id="personal" />
              <Label htmlFor="personal">个人会员</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="business" id="business" />
              <Label htmlFor="business">企业会员</Label>
            </div>
          </RadioGroup>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="mb-6">查看会员协议</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{memberType === 'personal' ? '个人' : '企业'}会员协议</DialogTitle>
                <DialogDescription>
                  请仔细阅读以下协议内容...
                </DialogDescription>
              </DialogHeader>
              {/* 这里添加协议内容 */}
            </DialogContent>
          </Dialog>

          <form className="space-y-4">
            {memberType === 'personal' ? (
              <>
                <div>
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="请输入姓名" />
                </div>
                <div>
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入邮箱" />
                </div>
              </>
            ) : (
              <>
                <div>
                  <Label htmlFor="companyName">企业名称</Label>
                  <Input id="companyName" placeholder="请输入企业名称" />
                </div>
                <div>
                  <Label htmlFor="email">邮箱</Label>
                  <Input id="email" type="email" placeholder="请输入邮箱" />
                </div>
              </>
            )}
            <div>
              <Label htmlFor="password">密码</Label>
              <Input id="password" type="password" placeholder="请设置密码" />
            </div>
            <Button type="submit" className="w-full">注册</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

