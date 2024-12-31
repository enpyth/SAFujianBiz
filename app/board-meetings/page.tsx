import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BoardMeetings() {
  const upcomingMeetings = [
    { id: 1, title: "年度战略规划会议", date: "2023-12-10", time: "14:00" },
    { id: 2, title: "财务报告审核会议", date: "2023-12-20", time: "10:00" },
  ]

  const pastMeetings = [
    { id: 1, title: "第三季度业绩回顾", date: "2023-10-15", summary: "讨论了第三季度的财务表现和关键指标..." },
    { id: 2, title: "新会员发展策略会议", date: "2023-09-20", summary: "制定了未来6个月的会员发展计划..." },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">理事会议</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">即将举行的会议</h2>
        <div className="grid gap-4">
          {upcomingMeetings.map(meeting => (
            <Card key={meeting.id}>
              <CardHeader>
                <CardTitle>{meeting.title}</CardTitle>
                <CardDescription>日期：{meeting.date} 时间：{meeting.time}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">会议记录</h2>
        <div className="grid gap-4">
          {pastMeetings.map(meeting => (
            <Card key={meeting.id}>
              <CardHeader>
                <CardTitle>{meeting.title}</CardTitle>
                <CardDescription>日期：{meeting.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{meeting.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

