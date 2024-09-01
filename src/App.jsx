import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
export default function App() {
  return (
    <main className="relative">
      <Navbar/>
     <section className="xl:padding-1  wide:padding-r padding-b">
      <Hero/>

     </section>
     <section className="padding">
      Popular components
     </section>
     <section className="padding">
      Super quality
     </section>
     <section className="padding-x py-10">
      Services
     </section>
     <section className="padding">
      Special offers
     </section>
     <section className="padding bg-pale-blue" >
      Customer Reviews
     </section>
     <section className="padding-x sm:py-32 py-16 w-full">
      Subscribe
     </section>
     <section className="padding-x bg-black padding-t pb-8">
      Footer
     </section>
    </main>
  )
}