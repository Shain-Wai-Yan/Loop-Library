import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Check, RefreshCw, DollarSign } from "lucide-react"

interface BookCardProps {
  title: string
  author: string
  coverUrl: string
  dueDate?: string
  returnedDate?: string
  progress?: number
  completed?: boolean
  shared?: boolean
  rentedCount?: number
  earnings?: string
}

export function BookCard({
  title,
  author,
  coverUrl,
  dueDate,
  returnedDate,
  progress,
  completed,
  shared,
  rentedCount,
  earnings,
}: BookCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 h-[240px] bg-muted">
          <img src={coverUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
        <CardContent className="flex-1 p-4">
          <div className="space-y-2">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{author}</p>

            {dueDate && (
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-amber-500" />
                <span>Due: {dueDate}</span>
              </div>
            )}

            {returnedDate && (
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-green-600" />
                <span>Returned: {returnedDate}</span>
              </div>
            )}

            {progress !== undefined && (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Reading Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {shared && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <RefreshCw className="h-4 w-4 text-green-600" />
                  <span>Rented {rentedCount} times</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span>Earnings: {earnings}</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </div>
      <CardFooter className="p-4 pt-0 flex justify-end gap-2">
        {dueDate && (
          <>
            <Button variant="outline" size="sm">
              Extend
            </Button>
            <Button variant="outline" size="sm">
              Return
            </Button>
          </>
        )}
        {completed && (
          <Button variant="outline" size="sm">
            Rent Again
          </Button>
        )}
        {shared && (
          <Button variant="outline" size="sm">
            Manage Listing
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
