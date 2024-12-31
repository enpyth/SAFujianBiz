'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Coupons() {
  const [coupons, setCoupons] = useState([
    { id: 1, title: "新会员优惠", discount: "100元", expiry: "2023-12-31", claimed: false },
    { id: 2, title: "周年庆优惠", discount: "20%折扣", expiry: "2023-12-15", claimed: false },
    { id: 3, title: "推荐会员优惠", discount: "50元", expiry: "2024-01-31", claimed: false },
  ])

  const claimCoupon = (id: number) => {
    setCoupons(coupons.map(coupon => 
      coupon.id === id ? { ...coupon, claimed: true } : coupon
    ))
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">优惠券</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map(coupon => (
          <Card key={coupon.id}>
            <CardHeader>
              <CardTitle>{coupon.title}</CardTitle>
              <CardDescription>优惠：{coupon.discount}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>有效期至：{coupon.expiry}</p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => claimCoupon(coupon.id)} 
                disabled={coupon.claimed}
              >
                {coupon.claimed ? "已领取" : "立即领取"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

