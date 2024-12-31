'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Home, Info, Ticket, User, FileText, Building2 } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt', { email, password })
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/placeholder.svg?height=40&width=40" alt="商会平台 Logo" width={40} height={40} />
          </Link>
          <nav className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li><Button variant="ghost" asChild><Link href="/"><Home className="mr-2 h-4 w-4" /> 首页</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/about"><Info className="mr-2 h-4 w-4" /> 商会简介</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/corporate-members"><Building2 className="mr-2 h-4 w-4" /> 企业会员</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/events"><Calendar className="mr-2 h-4 w-4" /> 商会活动</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/coupons"><Ticket className="mr-2 h-4 w-4" /> 优惠券</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/board-meetings"><FileText className="mr-2 h-4 w-4" /> 理事会议</Link></Button></li>
            </ul>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">登录</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">密码</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">登录</Button>
                </form>
                <div className="mt-4 text-center">
                  <Link href="/register" className="text-sm text-blue-600 hover:underline">
                    还没有账号？立即注册
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
            <Button variant="outline" asChild><Link href="/profile"><User className="mr-2 h-4 w-4" /> 我的</Link></Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

