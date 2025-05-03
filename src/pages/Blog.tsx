import { useState } from "react"

import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/BlogCard"

// Sample data - in a real app, this would come from your API or database
const sampleBlogPosts = [
  {
    id: "1",
    title: "10 Tips to Boost Your Productivity with TaskSync",
    content: "Lorem ipsum dolor sit amet...",
    excerpt: "Discover how to maximize your productivity with these expert tips for using TaskSync effectively.",
    featuredImage: "/placeholder.svg?height=300&width=600",
    category: "productivity",
    tags: ["productivity", "tips", "workflow"],
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-05-15"),
    readTime: 5,
  },
  {
    id: "2",
    title: "How to Organize Team Projects for Maximum Efficiency",
    content: "Lorem ipsum dolor sit amet...",
    excerpt: "Learn the best practices for organizing team projects and improving collaboration with TaskSync.",
    featuredImage: "/placeholder.svg?height=300&width=600",
    category: "collaboration",
    tags: ["teams", "collaboration", "project-management"],
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-05-10"),
    readTime: 7,
  },
  {
    id: "3",
    title: "TaskSync's New Features: Q2 2023 Update",
    content: "Lorem ipsum dolor sit amet...",
    excerpt: "Explore all the new features and improvements we've added to TaskSync in our latest quarterly update.",
    featuredImage: "/placeholder.svg?height=300&width=600",
    category: "updates",
    tags: ["features", "updates", "new-release"],
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-04-28"),
    readTime: 4,
  },
  {
    id: "4",
    title: "The Ultimate Guide to Time Management",
    content: "Lorem ipsum dolor sit amet...",
    excerpt: "Master the art of time management with this comprehensive guide and TaskSync's powerful features.",
    featuredImage: "/placeholder.svg?height=300&width=600",
    category: "time-management",
    tags: ["time-management", "productivity", "guide"],
    author: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-04-15"),
    readTime: 10,
  },
  {
    id: "5",
    title: "How to Set Up Automated Workflows in TaskSync",
    content: "Lorem ipsum dolor sit amet...",
    excerpt:
      "Learn how to automate repetitive tasks and create efficient workflows using TaskSync's automation features.",
    featuredImage: "/placeholder.svg?height=300&width=600",
    category: "tutorials",
    tags: ["automation", "workflow", "tutorial"],
    author: {
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-04-05"),
    readTime: 8,
  },
  {
    id: "6",
    title: "Case Study: How Company X Increased Productivity by 35%",
    content: "Lorem ipsum dolor sit amet...",
    excerpt: "Discover how Company X transformed their project management and boosted productivity with TaskSync.",
    featuredImage: "/placeholder.svg?height=300&width=600",
    category: "case-studies",
    tags: ["case-study", "success-story", "business"],
    author: {
      name: "Robert Brown",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    publishedAt: new Date("2023-03-22"),
    readTime: 6,
  },
]

export default function Blog({ posts = sampleBlogPosts }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  // Filter posts based on search query and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <main className="flex flex-col min-h-screen p-4 md:p-8 lg:p-12">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">TaskSync Blog</h1>
            <p className="text-muted-foreground">Insights, tips, and updates from the TaskSync team</p>
          </div>
        </div>
        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} featured={index === 0} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("")
                setCategoryFilter("all")
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
