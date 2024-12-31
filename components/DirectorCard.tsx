import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Director {
  name: string
  company: string
  description: string
  image: string
}

export default function DirectorCard({ director }: { director: Director }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="w-full h-48 relative mb-4">
          <Image src={director.image} alt={director.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        <CardTitle>{director.name}</CardTitle>
        <CardDescription>{director.company}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{director.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">查看详情</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{director.name}</DialogTitle>
              <DialogDescription>{director.company}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image src={director.image} alt={director.name} width={300} height={300} className="rounded-lg mx-auto mb-4" />
              <p>{director.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

