import type React from "react"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CalendarIcon, ImageIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(100, { message: "Title must be less than 100 characters" }),
  content: z
    .string()
    .min(50, { message: "Content must be at least 50 characters" })
    .max(10000, { message: "Content must be less than 10000 characters" }),
  excerpt: z.string().max(200, { message: "Excerpt must be less than 200 characters" }).optional(),
  category: z.string().min(1, { message: "Please select a category" }),
  tags: z.string().optional(),
  featuredImage: z.string().optional(),
  publishDate: z.date({ required_error: "Please select a publish date" }),
})

interface BlogFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void
  initialData?: z.infer<typeof formSchema>
  isEditing?: boolean
}

export function BlogForm({ onSubmit, initialData, isEditing = false }: BlogFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(initialData?.featuredImage || null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      content: "",
      excerpt: "",
      category: "",
      tags: "",
      featuredImage: "",
      publishDate: new Date(),
    },
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      onSubmit(values)
      setIsLoading(false)
      if (!isEditing) {
        form.reset()
        setFeaturedImagePreview(null)
      }
    }, 1000)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setFeaturedImagePreview(result)
        form.setValue("featuredImage", result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">{isEditing ? "Edit Blog Post" : "Create Blog Post"}</CardTitle>
        <CardDescription>
          {isEditing ? "Update your blog post details" : "Share your knowledge with the TaskSync community"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a compelling title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="productivity">Productivity</SelectItem>
                        <SelectItem value="task-management">Task Management</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="time-management">Time Management</SelectItem>
                        <SelectItem value="project-management">Project Management</SelectItem>
                        <SelectItem value="tutorials">Tutorials</SelectItem>
                        <SelectItem value="updates">Product Updates</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="publishDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Publish Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="productivity, tips, workflow (comma separated)" {...field} />
                  </FormControl>
                  <FormDescription>Separate tags with commas</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A brief summary of your blog post (optional)"
                      className="resize-none h-20"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This will be displayed in blog previews</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featuredImage"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Featured Image</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        {...field}
                        className="cursor-pointer"
                      />
                      {featuredImagePreview && (
                        <div className="relative w-full h-48 rounded-md overflow-hidden border">
                          <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${featuredImagePreview})` }}
                          />
                        </div>
                      )}
                      {!featuredImagePreview && (
                        <div className="w-full h-48 rounded-md border border-dashed flex items-center justify-center bg-muted/20">
                          <div className="flex flex-col items-center text-muted-foreground">
                            <ImageIcon className="h-10 w-10 mb-2" />
                            <span>No image selected</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription>Recommended size: 1200 x 630 pixels</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your blog post content here..."
                      className="resize-none min-h-[300px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" type="button" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button onClick={form.handleSubmit(handleSubmit)} disabled={isLoading}>
          {isLoading ? (isEditing ? "Updating..." : "Publishing...") : isEditing ? "Update Post" : "Publish Post"}
        </Button>
      </CardFooter>
    </Card>
  )
}
