import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"
import { getAllEvents } from "@/lib/events"

export default async function EventsPage() {
  const events = await getAllEvents()

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="flex flex-col">
              <Link href={`/events/${event.id}`}>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </Link>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{event.title}</h2>
                    <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.address}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 flex items-center">
                <Button asChild>
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

