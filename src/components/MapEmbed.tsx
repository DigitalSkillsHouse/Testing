export function MapEmbed() {
  // Replace with your Google Maps embed URL: Google Maps → Share → Embed a map
  const embedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.477899398!2d-122.3321!3d47.6062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1708012800000!5m2!1sen!2sus";

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-200">
      <iframe
        title="Seattle Sparkle Cleaning location"
        src={embedSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
