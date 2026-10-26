import { SiteHeader } from "@/components/site-header";
import { AppverseFooter } from "@/components/appverse-footer";

export default function RevisionPolicyPage() {
  return (
    <>
      <SiteHeader />
      <section className="legal-page">
        <div className="shell">
          <div className="max-w-4xl mx-auto">
            <div className="legal-content">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.10),transparent_55%)]" />
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Revision Policy</h1>
                  <p className="text-neutral-400 text-lg">
                    Our revision policy ensures transparency and fairness for all clients while maintaining the quality and efficiency of our work.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Included Revisions</h2>
                  <p className="text-neutral-300">
                    Each plan includes a set number of revisions as listed in its respective tier:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Starter Plan: 2 revisions included</li>
                    <li>Professional Plan: 3 revisions included</li>
                    <li>Enterprise Plan: Unlimited revisions within the agreed project scope</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Additional Revisions</h2>
                  <p className="text-neutral-300">
                    Any revisions beyond the included amount will be charged at the following hourly rates:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>Starter Plan: $35/hour</li>
                    <li>Professional Plan: $55/hour</li>
                    <li>Enterprise Plan: $60/hour</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Scope of Revisions</h2>
                  <p className="text-neutral-300">
                    Revisions are meant to refine and adjust the agreed deliverables, not to expand the original scope of work. Significant changes or additions will require a new project agreement.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Turnaround Time</h2>
                  <p className="text-neutral-300">
                    The turnaround time for revisions will depend on the complexity of the requested changes and current project workload.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Contact Us</h2>
                  <p className="text-neutral-300">
                    For questions regarding our revision policy, please contact us at:
                  </p>
                  <p className="text-neutral-300">
                    Email: <a href="mailto:amrabdelwahed00@gmail.com" className="text-lime-300 underline">amrabdelwahed00@gmail.com</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  );
}
