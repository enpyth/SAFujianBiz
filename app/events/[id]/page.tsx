import { notFound } from "next/navigation"
import Image from "next/image"
import { Button, LinearProgress } from "@mui/material"
import { MapPin, Calendar, Users, Clock, DollarSign } from "lucide-react"
import { getEventById } from "@/lib/events"

export default async function EventPage({ params }: { params: { id: string } }) {
  const event = await getEventById(Number.parseInt(params.id))

  if (!event) {
    notFound()
  }

  const registrationProgress = (event.registeredcount / event.maxcapacity) * 100

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={600}
          height={300}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>{event.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5" />
              <span>{event.price}</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Registration Progress</span>
                </div>
                <span>
                  {event.registeredcount} / {event.maxcapacity}
                </span>
              </div>
              <LinearProgress variant="determinate" value={registrationProgress} />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p>{event.description}</p>
            <h2 className="text-2xl font-semibold">Organizer</h2>
            <p>{event.organizer}</p>
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p>Email: {event.contactemail}</p>
            <p>Phone: {event.contactphone}</p>
          </div>
        </div>
        {event.status === "upcoming" && (
          <div className="mt-6">
            <Button variant="contained" color="primary">Register Now</Button>
          </div>
        )}
      </div>
    </div>
  )
}

