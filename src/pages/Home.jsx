// import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Icons } from "react-toastify";
import GoogleMapReact from "google-map-react";
import Countdown from "./CountDown";

const Marker = ({ text }) => <div>{text}</div>;

const Link = () => {
  return <a>Link</a>;
};
export default function Home() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative h-[80dvh] w-full overflow-hidden">
        <img
          src="/HeroImage.avif"
          alt="Couple"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center backdrop:blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Tanvee &amp; Chintan
          </h1>
          <div className="grid gap-2">
            <p className="text-lg font-medium">August 15, 2024 | 9:30 AM</p>
            <p className="text-lg font-medium">
              Annapurna kathiyawadi, Surat, Gujarat
            </p>
          </div>
          <div
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            onClick={() => {
              window.open("https://forms.gle/YYzRa8JCjUepq1oY6");
            }}
          >
            I'm Attending
          </div>
        </div>
      </section>
      <section className="bg-muted container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Special Day
            </h2>
            <p className="text-muted-foreground md:text-lg">
              We are thrilled to invite you to celebrate our special day with
              us. Your presence and support mean the world to us as we embark on
              this new chapter of our lives.
            </p>
          </div>
          {/* <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Connect with Us
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
                prefetch={false}
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section className="bg-muted py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Love Story
              </h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">The Beginning</h3>
                  <p className="text-muted-foreground md:text-lg">
                    We met in college and instantly connected over our shared
                    love of adventure and travel. Our first date was a hike
                    through a beautiful nature reserve, and the rest is history.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-semibold">The Proposal</h3>
                  <p className="text-muted-foreground md:text-lg">
                    John surprised me with a romantic proposal during a weekend
                    getaway to the coast. It was the perfect moment, and I
                    couldn't wait to start this new chapter of our lives
                    together.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="/placeholder.svg"
                alt="Engagement Photo 1"
                width={600}
                height={400}
                className="rounded-lg object-cover object-center"
              />
              <img
                src="/placeholder.svg"
                alt="Engagement Photo 2"
                width={600}
                height={400}
                className="rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Venue
            </h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">
                  The Annapurna Restaurant
                </h3>
                <p className="text-muted-foreground md:text-lg">
                  Our ceremony and reception will be held at the beautiful
                  Enchanted Restaurant in surat.The creative staff works hard,
                  stays positive and makes this place great. The terrific
                  service is a big plus of Annapurna Kathiyawadi Restaurant.
                  From the visitors' point of view, the atmosphere is calm. This
                  place is ranked 4.1 within the Google grading system.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Getting There</h3>
                <p className="text-muted-foreground md:text-lg">
                  The Annapurna Restaurant is located at Valthan-Punagam Rd,
                  Near Euro School, Surat, Gujarat, India.
                </p>
              </div>
            </div>
          </div>
          <div className="border overflow-hidden">
            <div>
              {/* <img
                src="./map.png"
                alt="map"
                onClick={() =>
                  window.open("https://maps.app.goo.gl/UUtra6CmicEEAxDx7")
                }
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3719.502217989804!2d72.9170236!3d21.2119246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04514150e05ef%3A0xaf0665b095f2bc43!2sAnnapurna%20Kathiyawadi%20Restaurant!5e0!3m2!1sen!2sin!4v1721562381871!5m2!1sen!2sin"
                width="100%"
                height="350"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Countdown to Our Wedding
              </h2>
              <div>
                <Countdown />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Guestbook
              </h2>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>GU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground">Congratulations!</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Jane Arden</p>
                    <p className="text-muted-foreground">
                      Wishing you both a lifetime of happiness!
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-muted-foreground">
                      Can't wait to celebrate with you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground ">
              &copy; Nikunj. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
