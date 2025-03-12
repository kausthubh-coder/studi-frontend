import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Layers, Code, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Canvas</span>
            <span className="text-[#0070f3]">Manus</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10">
            A powerful document canvas for creating, managing, and sharing your ideas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/docs"
              className="px-6 py-3 rounded-full bg-foreground text-background font-medium text-base hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors flex items-center justify-center gap-2"
            >
              View Documentation
              <ArrowRight size={18} />
            </Link>
            <Link
              href="https://github.com/yourusername/canvasmanus"
              className="px-6 py-3 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-2 font-medium text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
              <Image
                src="/github-mark.svg"
                alt="GitHub"
                width={18}
                height={18}
                className="dark:invert"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7] dark:bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="bg-[#e6f7ff] dark:bg-[#003366] p-3 rounded-full mb-4">
                <FileText className="w-6 h-6 text-[#0070f3]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Canvas</h3>
              <p className="text-muted-foreground">
                Create flexible documents with a canvas-like interface for unlimited creativity
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="bg-[#e6f7ff] dark:bg-[#003366] p-3 rounded-full mb-4">
                <Layers className="w-6 h-6 text-[#0070f3]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nested Documents</h3>
              <p className="text-muted-foreground">
                Organize your thoughts with nested document structures for better organization
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="bg-[#e6f7ff] dark:bg-[#003366] p-3 rounded-full mb-4">
                <Code className="w-6 h-6 text-[#0070f3]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Markdown Support</h3>
              <p className="text-muted-foreground">
                Write in Markdown with real-time preview and formatting tools
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="bg-[#e6f7ff] dark:bg-[#003366] p-3 rounded-full mb-4">
                <Zap className="w-6 h-6 text-[#0070f3]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
              <p className="text-muted-foreground">
                Work together with your team in real-time with live editing and comments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center bg-[#e6f7ff] dark:bg-[#002147]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Check out our comprehensive documentation to learn more about CanvasManus
          </p>
          <Link 
            href="/docs"
            className="px-8 py-3 rounded-full bg-foreground text-background font-medium text-lg hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors inline-flex items-center gap-2"
          >
            View Documentation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-foreground">Canvas</span>
              <span className="text-[#0070f3]">Manus</span>
            </h3>
          </div>
          <div className="flex gap-8">
            <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/docs/api" className="text-muted-foreground hover:text-foreground transition-colors">
              API
            </Link>
            <Link href="https://github.com/yourusername/canvasmanus" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CanvasManus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
