import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Leaf, ShieldCheck, ArrowRight, Heart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-hidden selection:bg-primary selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="font-display font-bold text-2xl text-primary tracking-tighter flex items-center gap-1">
          Glow Up <Sparkles className="w-5 h-5" />
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
          <a href="#routine" className="hover:text-primary transition-colors">The Routine</a>
          <a href="#ingredients" className="hover:text-primary transition-colors">Ingredients</a>
          <a href="#community" className="hover:text-primary transition-colors">Community</a>
        </div>
        <Button className="rounded-full font-bold px-6 bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
          Shop Now
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-[#FFFBF7]">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: "4s" }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  New: The Dewy Drop Serum
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] text-foreground mb-6">
                  Serious <span className="text-primary italic">science</span>.<br />
                  Silly <span className="text-accent italic">simple</span>.
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  We're the friend who tells you exactly what your skin needs, minus the confusing jargon. Dermatologist tested, Gen Z approved.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full font-bold px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                    Take the Quiz
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full font-bold px-8 h-14 text-lg border-2 hover:bg-secondary/20 transition-all hover:-translate-y-1">
                    Explore Products
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-12 flex items-center gap-4 text-sm font-medium text-muted-foreground">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-secondary/50 flex items-center justify-center text-xs overflow-hidden">
                        <img src={`/community.png`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p>Loved by 50,000+ glowing besties.</p>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal direction="left" delay={0.2} className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] md:aspect-square shadow-2xl shadow-primary/10 border-8 border-white animate-float">
                <img 
                  src="/hero.png" 
                  alt="Glowing radiant skin" 
                  className="w-full h-full object-cover"
                />
                {/* Floating tags */}
                <div className="absolute top-10 -left-6 bg-white px-4 py-2 rounded-2xl shadow-xl font-bold text-sm text-foreground flex items-center gap-2 transform -rotate-6">
                  <Droplets className="w-4 h-4 text-secondary-foreground" /> Max Hydration
                </div>
                <div className="absolute bottom-20 -right-6 bg-white px-4 py-2 rounded-2xl shadow-xl font-bold text-sm text-foreground flex items-center gap-2 transform rotate-6">
                  <Sparkles className="w-4 h-4 text-accent" /> Glass Skin Effect
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary py-4 overflow-hidden border-y-2 border-primary-foreground/10 transform -rotate-1 origin-left w-[110vw] -ml-4 z-20 relative">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="text-white font-display font-bold text-2xl uppercase tracking-wider">Cruelty Free</span>
              <Sparkles className="w-6 h-6 text-white/50" />
              <span className="text-white font-display font-bold text-2xl uppercase tracking-wider">Vegan</span>
              <Sparkles className="w-6 h-6 text-white/50" />
              <span className="text-white font-display font-bold text-2xl uppercase tracking-wider">Derm Tested</span>
              <Sparkles className="w-6 h-6 text-white/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Routine Section */}
      <section id="routine" className="py-32 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-5xl font-display font-bold mb-6 text-foreground">The 3-Step <span className="text-primary">Glow Protocol</span></h2>
              <p className="text-lg text-muted-foreground">Because you have better things to do than a 12-step routine. Cleanse, treat, hydrate, and go live your life.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Melt It Off", desc: "Our bouncy jelly cleanser removes makeup, SPF, and bad vibes without stripping your barrier.", img: "/product1.png", color: "bg-accent/10" },
              { num: "02", title: "Dew The Most", desc: "A supercharged serum packed with niacinamide and hyaluronic acid for that instant glass skin finish.", img: "/ingredient.png", color: "bg-primary/10" },
              { num: "03", title: "Seal The Deal", desc: "A cloud-like moisturizer that locks in the good stuff and keeps you glowing for 24 hours.", img: "/product2.png", color: "bg-secondary/40" },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.2} direction="up">
                <div className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${step.color} rounded-bl-[100%] -z-10 transition-transform group-hover:scale-150 duration-500`}></div>
                  <span className="text-6xl font-display font-extrabold text-foreground/5 absolute top-6 right-6">{step.num}</span>
                  
                  <div className="aspect-square rounded-2xl overflow-hidden mb-8 relative">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
                  
                  <Button variant="ghost" className="group/btn font-bold hover:bg-transparent hover:text-primary p-0">
                    View Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <section id="ingredients" className="py-32 bg-foreground text-background overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img src="/routine.png" alt="Ingredients" className="relative z-10 rounded-[2rem] transform -rotate-3 hover:rotate-0 transition-transform duration-500" />
                
                {/* Floating ingredient card */}
                <div className="absolute -bottom-8 -right-8 bg-white text-foreground p-6 rounded-2xl shadow-2xl max-w-xs z-20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <h4 className="font-bold text-lg">Centella Asiatica</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">The ultimate soothing superstar for angry, stressed-out skin.</p>
                </div>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={0.2}>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-tight">
                  No secrets. <br/>
                  <span className="text-primary text-stroke">Just science.</span>
                </h2>
                <p className="text-xl text-white/70 mb-10 leading-relaxed">
                  We formulate with clinically-proven actives at percentages that actually do something. No filler, no fluff, just real results.
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  { title: "Niacinamide (5%)", desc: "Brightens, smooths texture, and tells pores to shrink.", icon: Sparkles },
                  { title: "Hyaluronic Acid Multi-Weight", desc: "Plumps skin at every level, not just the surface.", icon: Droplets },
                  { title: "Ceramide NP", desc: "The cement that keeps your skin barrier strong and resilient.", icon: ShieldCheck },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={0.3 + (i * 0.1)} direction="up">
                    <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                        <p className="text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community / Vibe Section */}
      <section id="community" className="py-32 bg-[#FFFBF7] relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                Join the <span className="text-accent italic">Glow Club</span>
              </h2>
              <p className="text-xl text-muted-foreground">Real skin has texture, pores, and occasional breakouts. We're here for all of it.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] relative group">
                <img src="/community.png" alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10">
                  <h3 className="text-white text-3xl font-display font-bold mb-2">Real Results</h3>
                  <p className="text-white/80">Check out our community's before & afters</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="flex flex-col gap-8">
              <ScrollReveal direction="up" delay={0.3}>
                <div className="bg-primary/10 rounded-[2rem] p-10 border border-primary/20">
                  <Heart className="w-10 h-10 text-primary mb-6" />
                  <p className="text-2xl font-display font-medium text-foreground mb-6 leading-relaxed">
                    "Honestly, I've tried everything and this is the first routine that doesn't feel like a chore. My skin is literally glass."
                  </p>
                  <div>
                    <p className="font-bold">— Maya T.</p>
                    <p className="text-sm text-muted-foreground">Oily/Combo Skin</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="bg-secondary/30 rounded-[2rem] p-10 border border-secondary">
                  <h3 className="text-2xl font-display font-bold mb-4">Follow us on TikTok</h3>
                  <p className="text-muted-foreground mb-6">For chaotic behind-the-scenes, skincare debunking, and exclusive drops.</p>
                  <Button className="rounded-full font-bold">
                    @GlowUpOfficial
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Spill the Tea (FAQ)</h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-none bg-secondary/10 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">Is this good for sensitive skin?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  1000%. We skipped the essential oils, synthetic fragrances, and harsh drying alcohols. It's basically a hug for your skin barrier.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-none bg-primary/10 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">Do I really need all 3 steps?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  Need is a strong word, but they're designed to work together like a perfectly choreographed pop group. You can mix and match, but the magic happens when they're united.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-none bg-accent/10 rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">How long until I see results?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  You'll feel the hydration immediately. For texture and tone changes, give it about 3-4 weeks (one full skin cycle). Good things take a little time!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-accent text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 className="text-6xl md:text-8xl font-display font-black mb-8 uppercase tracking-tighter">Ready to Glow?</h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Build your perfect routine today and get 15% off your first order.
            </p>
            <Button size="lg" className="rounded-full font-bold px-10 h-16 text-xl bg-white text-accent hover:bg-white/90 shadow-2xl transition-all hover:scale-105">
              Start Shopping Now
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="font-display font-bold text-2xl text-white tracking-tighter flex items-center gap-1 mb-4">
                Glow Up <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <p className="max-w-xs text-sm">Skincare that doesn't take itself too seriously, but takes your skin very seriously.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bundles</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Info</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs">
            <p>© 2025 Glow Up Skincare. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
