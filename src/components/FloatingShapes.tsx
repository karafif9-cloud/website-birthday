const shapes = [
  { size: 80, top: "10%", left: "8%", delay: "0s", opacity: 0.4 },
  { size: 50, top: "20%", left: "85%", delay: "1s", opacity: 0.5 },
  { size: 120, top: "70%", left: "5%", delay: "2s", opacity: 0.3 },
  { size: 60, top: "80%", left: "80%", delay: "0.5s", opacity: 0.4 },
  { size: 40, top: "45%", left: "92%", delay: "1.5s", opacity: 0.5 },
  { size: 90, top: "60%", left: "45%", delay: "2.5s", opacity: 0.25 },
  { size: 35, top: "30%", left: "30%", delay: "3s", opacity: 0.4 },
];

const FloatingShapes = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    {shapes.map((s, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-gradient-mint blur-2xl group-hover:animate-float-slow"
        style={{
          width: s.size,
          height: s.size,
          top: s.top,
          left: s.left,
          opacity: s.opacity,
          animationDelay: s.delay,
          animationDuration: `${14 + i * 2}s`,
          animationTimingFunction: "ease-in-out",
          animationDirection: "alternate",
        }}
      />
    ))}
  </div>
);

export default FloatingShapes;
