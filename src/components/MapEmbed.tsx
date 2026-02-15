export function MapEmbed() {
  const address = "123+Clean+Street,+Seattle,+WA+98101";
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_EMBED_KEY&q=${address}`;

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-200">
      {/* Replace src with your Google Maps embed URL when you have an API key */}
      <iframe
        title="Seattle Sparkle Cleaning location"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.477899398!2d-122.3321!3d47.6062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzIyLjMiTiAxMjLCsDE5JzU1LjYiVw!5e0!3m2!1sen!2sus!4v1`}
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
