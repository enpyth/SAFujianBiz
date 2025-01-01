import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DirectorProps {
  director: {
    name: string;
    company: string;
    description: string;
    image: string;
  }
}

const DirectorCard = ({ director }: DirectorProps) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative w-full h-64">
        <Image
          src={director.image}
          alt={director.name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{director.name}</CardTitle>
        <p className="text-sm text-gray-500">{director.company}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{director.description}</p>
      </CardContent>
    </Card>
  )
}

export default DirectorCard

