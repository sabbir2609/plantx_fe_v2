import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute bottom-1/4 left-0 p-4 md:p-6 lg:p-8 w-full md:w-8/12 lg:w-1/2">
        {/* Slogan */}
        <div className="text-left max-w-4xl mx-auto md:mx-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
            Elevate your space with nature
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Transforming spaces with sustainable green design.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="btn btn-primary text-primary bg-white rounded-lg hover:bg-transparent hover:text-white hover:outline-white text-sm md:text-base"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="btn btn-secondary text-secondary bg-white rounded-lg hover:bg-transparent hover:text-white hover:outline-white text-sm md:text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
