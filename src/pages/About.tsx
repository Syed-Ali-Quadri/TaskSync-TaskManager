import { Link } from "react-router"
import { Award, Clock, Globe, Heart, Lightbulb, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    document.title = "TaskSync - About Us"
  },[])
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          We're a passionate team dedicated to creating exceptional experiences and delivering innovative solutions.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses and individuals with cutting-edge technology solutions that solve real-world
                problems and drive meaningful growth.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-2 text-2xl font-bold">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the leading innovator in our industry, recognized for excellence, integrity, and transformative
                impact on the communities we serve.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">From humble beginnings to where we are today</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>

          {/* Timeline Item 1 */}
          <div className="relative mb-12 pl-8 md:ml-auto md:w-1/2 md:pl-16 md:pr-0">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background md:-left-4">
              <Clock className="h-4 w-4" />
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="mb-1 text-lg font-semibold">2015: The Beginning</h3>
              <p className="text-muted-foreground">
                Founded in a small garage by two college friends with a vision to change the industry.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative mb-12 pr-8 md:ml-0 md:w-1/2 md:pl-0 md:pr-16">
            <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background md:-right-4">
              <Clock className="h-4 w-4" />
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="mb-1 text-lg font-semibold">2018: Major Milestone</h3>
              <p className="text-muted-foreground">
                Secured our first major client and expanded the team to 25 talented professionals.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative mb-12 pl-8 md:ml-auto md:w-1/2 md:pl-16 md:pr-0">
            <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background md:-left-4">
              <Clock className="h-4 w-4" />
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="mb-1 text-lg font-semibold">2020: Innovation Award</h3>
              <p className="text-muted-foreground">
                Recognized for our innovative approach and received the Industry Excellence Award.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative mb-12 pr-8 md:ml-0 md:w-1/2 md:pl-0 md:pr-16">
            <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background md:-right-4">
              <Clock className="h-4 w-4" />
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="mb-1 text-lg font-semibold">2023: Global Expansion</h3>
              <p className="text-muted-foreground">
                Opened offices in three new countries and launched our flagship product to international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Value 1 */}
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Passion</h3>
              <p className="text-muted-foreground">
                We approach every project with enthusiasm and dedication, putting our heart into everything we create.
              </p>
            </CardContent>
          </Card>

          {/* Value 2 */}
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in everything we do, constantly pushing boundaries and exceeding
                expectations.
              </p>
            </CardContent>
          </Card>

          {/* Value 3 */}
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership, working together to achieve shared goals.
              </p>
            </CardContent>
          </Card>

          {/* Value 4 */}
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace creativity and forward-thinking, constantly seeking new ways to solve problems.
              </p>
            </CardContent>
          </Card>

          {/* Value 5 */}
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to responsible practices that benefit our community and the environment.
              </p>
            </CardContent>
          </Card>

          {/* Value 6 */}
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct business with honesty, transparency, and ethical principles at all times.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-muted p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold">Join Our Journey</h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Whether you're looking to join our team, partner with us, or learn more about our services, we'd love to
          connect with you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
