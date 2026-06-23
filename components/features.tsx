const features = [
  {
    title: 'Formulas',
    description: 'Manage herbal formulations',
  },
  {
    title: 'Clinical Trials',
    description: 'Track clinical studies',
  },
  {
    title: 'Lab Data',
    description: 'Organize test results',
  },
  {
    title: 'Compliance',
    description: 'Regulatory documentation',
  },
];

export function Features() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Circular category cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Circle background */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full bg-muted overflow-hidden border-4 border-background shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 group-hover:from-secondary/40 group-hover:to-secondary/20 transition-colors duration-300" />
                <div className="relative z-10 text-center space-y-2">
                  <p className="text-2xl font-bold text-foreground">{feature.title}</p>
                </div>
              </div>
              
              {/* Lime green accent dot */}
              <div className="absolute bottom-0 translate-y-1/2 w-6 h-6 bg-secondary rounded-full shadow-md" />
              
              <p className="text-sm text-muted-foreground mt-8">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
