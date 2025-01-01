'use client'

import { SignUp } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const [role, setRole] = useState<'individual' | 'corporate' | null>(null);

  return (
    <div className="flex min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">选择注册身份</h2>
          <div className="grid gap-4">
            <Card className={cn(
              "cursor-pointer transition-colors",
              role === 'individual' && "border-primary"
            )}
              onClick={() => setRole('individual')}
            >
              <CardHeader>
                <CardTitle>个人用户</CardTitle>
                <CardDescription>适合个人加入商会</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>参与商会活动的机会</li>
                  <li>获取行业资讯和交流机会</li>
                  <li>享受会员专属优惠和服务</li>
                  <li>建立商业人脉网络</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={cn(
              "cursor-pointer transition-colors",
              role === 'corporate' && "border-primary"
            )}
              onClick={() => setRole('corporate')}
            >
              <CardHeader>
                <CardTitle>企业用户</CardTitle>
                <CardDescription>适合企业机构加入商会</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>获得商会资源对接</li>
                  <li>参与大型商业活动</li>
                  <li>享受企业级专属服务</li>
                  <li>拓展企业合作机会</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {role ? (
            <SignUp 
              path="/sign-up"
              routing="path"
              afterSignUpUrl="/profile"
              unsafeMetadata={{
                role: role
              }}
            />
          ) : (
            <div className="text-center text-gray-500">
              请先选择注册身份
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 