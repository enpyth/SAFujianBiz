'use client'

import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // 模拟活动数据
  const events = [
    { date: new Date(2023, 11, 1), title: "商业论坛" },
    { date: new Date(2023, 11, 15), title: "年度晚宴" },
    { date: new Date(2024, 0, 5), title: "新年招商会" },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">活动日历</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div>
          <h2 className="text-xl font-semibold mb-4">活动列表</h2>
          {events.map((event, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full mb-2 justify-start">
                  {event.date.toLocaleDateString()} - {event.title}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{event.title}</DialogTitle>
                  <DialogDescription>
                    日期：{event.date.toLocaleDateString()}
                    <br />
                    地点：待定
                    <br />
                    面向对象：全体会员
                  </DialogDescription>
                </DialogHeader>
                <Button className="mt-4">报名参加</Button>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  )
}

