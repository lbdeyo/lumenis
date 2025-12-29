import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumenis Partners | About",
};

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-start pt-5 pb-32 px-6 bg-white dark:bg-black">
        <div className="flex flex-col items-start gap-8 text-left w-full">
          <h1 className="text-5xl font-semibold leading-10 tracking-tight">
            About Lumenis
          </h1>

          <div className="max-w-4xl w-full">
            <img
              src="/img/anna-maria.avif"
              alt="Anna Maria Larsen"
              className="float-left rounded-lg mr-6 mb-4 max-w-xs"
            />
            <div className="space-y-6">
              <p className="text-lg leading-8 text-white">
                Anna Maria Larsen has spent her career guiding leaders toward
                clarity, purpose, and growth. As Founder of Lumenis Partners,
                she brings decades of experience in executive mentoring and
                executive search, and is known for her ability to ask the right
                questions, uncover core truths, and draw out the best in
                individuals and organizations.
              </p>

              <p className="text-lg leading-8 text-white">
                Anna Maria&apos;s work is grounded in a deep belief in people
                and the power of meaningful dialogue. She has partnered with
                hundreds of senior executives to help them navigate complexity,
                lead with integrity, and realize their full potential.
              </p>

              <p className="text-lg leading-8 text-white">
                Her commitment to service extends far beyond the boardroom. Anna
                Maria has held leadership roles on numerous nonprofit boards,
                including two terms on the National Board of Governors for the
                American Red Cross ($3B+), where she helped select the
                organization&apos;s CEO and drive transformative change. She
                also served as a Trustee for the Denver Botanic Gardens,
                describing it as &quot;a place where people can be lifted by the
                beauty of nature.&quot;
              </p>

              <p className="text-lg leading-8 text-white">
                A longtime civic leader, Anna Maria co-chaired the transition
                team for former Colorado Governor Bill Owens, guiding 170
                leaders in reviewing state agencies and recommending key
                appointments. Her contributions include leadership roles with
                the Governor&apos;s Commission on Community Service, the Denver
                Rotary Club, the Girl Scouts, and the Denver Metro Chamber of
                Commerce, where she helped launch the Small Business Profit
                Center and founded the Women Business Owners Network. She has
                also served as a lay adviser to the National Conference of
                Catholic Bishops.
              </p>

              <p className="text-lg leading-8 text-white">
                Anna Maria holds a Bachelor&apos;s degree from Trinity
                Washington University (D.C.), a certificate in Organizational
                Leadership and Not-for-Profit Management from Harvard
                University, and a postgraduate certification in Leadership
                Coaching from Georgetown University.
              </p>
            </div>
            <div className="clear-both"></div>
          </div>

          <h2 className="text-4xl font-semibold leading-10 tracking-tight mt-12 mb-6 clear-both">
            Testimonials
          </h2>

          <div className="flex flex-col gap-8 max-w-4xl">
            <blockquote className="text-lg leading-8 text-white italic border-l-4 border-white/30 pl-6">
              &quot;When I stepped into my first company leadership role, Anna
              Maria&apos;s calm, thoughtful guidance helped me slow the game
              down and bring my executive strengths to the surface. Navigating a
              Board, working with an ownership group overseas, operating and
              growing the company all at once could have been overwhelming. Her
              impact has lasted for years—I still use our notes and continue to
              call her when challenges arise. I&apos;ve introduced her to my
              current company and look forward to working with her for years to
              come.&quot; — Will Loughran, Chief Operating Officer, Concord
              Hospitality
            </blockquote>

            <blockquote className="text-lg leading-8 text-white italic border-l-4 border-white/30 pl-6">
              &quot;At what proved to be an inflection point in my
              career—successful but ready for a deeper challenge—Anna Maria
              helped me find the clarity I couldn&apos;t reach on my own. Her
              unique style and process guided me through a pivotal decision that
              led to greater success and fulfillment. Worth every penny.&quot; —
              Ramona Mockoviak, Senior Managing Director, Chevy Chase Trust
            </blockquote>

            <blockquote className="text-lg leading-8 text-white italic border-l-4 border-white/30 pl-6">
              &quot;Anna Maria helped me find balance and clarity as CEO of a
              $140M+ organization. I&apos;d always been a strong executor, but
              she helped me uncover a more compassionate leadership style—with
              even better results. My team is more aligned and productive. We
              are unified in mission— working with Anna Maria led to the
              evolution of our mission, which was much more expansive as we
              evolved as a team rather than an individual. Personally, I
              returned to my authentic self, becoming a better partner, parent,
              and healthier overall—physically, emotionally, and
              spiritually.&quot; — Mary Kelly, CEO, StrataTech Education Group
            </blockquote>

            <blockquote className="text-lg leading-8 text-white italic border-l-4 border-white/30 pl-6">
              &quot;Fresh off selling my business, and looking to develop my
              skills to move to the next level, Anna Maria brought wisdom from
              both her executive experience and her grounded, human
              perspective—sometimes drawn from her family restaurant business
              experience in New York. Her insights continue to shape the way I
              approach the world today.&quot; — Sam Jonas, CEO, Serial
              Entrepreneur.
            </blockquote>

            <blockquote className="text-lg leading-8 text-white italic border-l-4 border-white/30 pl-6">
              &quot;Anna Maria helped me as an Executive understand what it
              truly means to be authentic, to operate within my strengths, and
              to be confident in ceding control. She helped me find peace in the
              midst of chaos, clarity, and authentic power as a leader. I became
              more effective with my teams and learned to quiet the inner noise
              that drains energy and hinders lasting success. Her guidance
              helped me lean more fully into my natural talents.&quot; — Josh
              Green, CEO/Entrepreneur
            </blockquote>

            <blockquote className="text-lg leading-8 text-white italic border-l-4 border-white/30 pl-6">
              &quot;Anna Maria brings a thoughtful, positive, and unique
              approach to the executive journey. She guided me through some
              challenging phases of my leadership career, aways walking beside
              me with wisdom and care. She is truly one of a kind!&quot; — Jeff
              Nichols, CEO, Minnesota Autism Center.
            </blockquote>

            <blockquote className="text-lg leading-8 text-white italic border-l-4 border-white/30 pl-6">
              &quot;Anna Maria&apos;s mentorship transformed not just my career
              but my whole life journey. Her supportive, caring, and challenging
              approach helped me discover myself more deeply, flourish, and lead
              with purpose.&quot; — Mooyeon Oh-Park, MD Chief Medical Officer,
              Burke Rehabilitation Hospital
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  );
}
