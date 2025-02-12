'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, Info, User, FileText, Building2, Calendar } from 'lucide-react'

const Header = () => {
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
              <li><Button variant="ghost" asChild><Link href="/enterprises"><Building2 className="mr-2 h-4 w-4" /> 企业会员</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/events"><Calendar className="mr-2 h-4 w-4" /> 商会活动</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/board-meetings"><FileText className="mr-2 h-4 w-4" /> 理事会议</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/news"><FileText className="mr-2 h-4 w-4" /> 新闻资讯</Link></Button></li>
              <li><Button variant="ghost" asChild><Link href="/protected"><User className="mr-2 h-4 w-4" /> 我的</Link></Button></li>
            </ul>
            
            {/* {!1 ? ( // 根据登录状态显示不同的按钮
              <div className="flex items-center space-x-4">
                <Button asChild variant="outline">
                  <Link href="/login">登录</Link>
                </Button>
                <Button asChild>
                  <Link href="/sign-up">注册</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="outline" asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" /> 我的
                  </Link>
                </Button>
              </div>
            )} */}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

